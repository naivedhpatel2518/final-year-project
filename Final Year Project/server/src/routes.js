const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const { getDistance } = require('geolib');
const User = require('./models/User');
const Lecture = require('./models/Lecture');
const Attendance = require('./models/Attendance');

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });
    
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.user = decoded;
        next();
    });
};

// --- AUTH ---
router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, role: user.role, name: user.name });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/auth/register', async (req, res) => { // Temporary for seeding
    const { username, password, role, name, enrollmentNo } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role, name, enrollmentNo });
        await newUser.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- FACULTY ---
// Create Lecture
router.post('/faculty/create-lecture', verifyToken, async (req, res) => {
    if (req.user.role !== 'faculty') return res.status(403).json({ message: 'Access denied' });
    const { subject, latitude, longitude } = req.body;
    try {
        const lecture = new Lecture({
            subject,
            faculty: req.user.id,
            location: { latitude, longitude },
            isActive: true 
        });
        await lecture.save();
        res.json(lecture);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Generate QR (Dynamic)
router.get('/faculty/generate-qr/:lectureId', verifyToken, async (req, res) => {
    if (req.user.role !== 'faculty') return res.status(403).json({ message: 'Access denied' });
    const { lectureId } = req.params;
    
    // Encrypt payload with timestamp to expire every 2 mins (client side logic can refresh)
    // Here we just send a signed payload that the student sends back
    const payload = jwt.sign({ lectureId, timestamp: Date.now() }, process.env.JWT_SECRET, { expiresIn: '2m' });
    
    try {
        const qrCode = await QRCode.toDataURL(payload);
        res.json({ qrCode, payload });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// View Attendance
router.get('/faculty/attendance/:lectureId', verifyToken, async (req, res) => {
    if (req.user.role !== 'faculty') return res.status(403).json({ message: 'Access denied' });
    try {
        const attendance = await Attendance.find({ lecture: req.params.lectureId }).populate('student', 'name enrollmentNo');
        res.json(attendance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Manual Override (Grace Period)
router.post('/faculty/override', verifyToken, async (req, res) => {
    if (req.user.role !== 'faculty') return res.status(403).json({ message: 'Access denied' });
    const { lectureId, studentId } = req.body;
    try {
        let record = await Attendance.findOne({ lecture: lectureId, student: studentId });
        if (record) {
            record.status = 'Present';
            record.manualOverride = true;
        } else {
            record = new Attendance({
                lecture: lectureId,
                student: studentId,
                status: 'Present',
                manualOverride: true
            });
        }
        await record.save();
        res.json({ message: 'Attendance updated manually' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- STUDENT ---
// Mark Attendance
router.post('/student/mark-attendance', verifyToken, async (req, res) => {
    if (req.user.role !== 'student') return res.status(403).json({ message: 'Access denied' });
    const { qrPayload, latitude, longitude } = req.body;

    try {
        // 1. Verify QR
        const decoded = jwt.verify(qrPayload, process.env.JWT_SECRET);
        const { lectureId } = decoded;

        const lecture = await Lecture.findById(lectureId);
        if (!lecture || !lecture.isActive) return res.status(400).json({ message: 'Lecture invalid or inactive' });

        // 2. Verify Geolocation
        // distance in meters
        const distance = getDistance(
            { latitude, longitude },
            { latitude: lecture.location.latitude, longitude: lecture.location.longitude }
        );

        if (distance > 50) { // 50 meters radius
            return res.status(400).json({ message: 'You are too far from the class', distance });
        }

        // 3. Mark in DB
        const existing = await Attendance.findOne({ lecture: lectureId, student: req.user.id });
        if (existing) return res.status(400).json({ message: 'Attendance already marked' });

        const newAttendance = new Attendance({
            lecture: lectureId,
            student: req.user.id,
            status: 'Present'
        });
        await newAttendance.save();
        
        res.json({ message: 'Attendance marked successfully', distance });

    } catch (err) {
        res.status(400).json({ message: 'Invalid or expired QR Code', error: err.message });
    }
});

// Get Student Lectures (History ?) or Active ?
// ...

module.exports = router;

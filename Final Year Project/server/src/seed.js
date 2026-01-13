require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB for Seeding');

        // Check if users exist
        const facultyExists = await User.findOne({ username: 'faculty' });
        if (!facultyExists) {
            const hashedFaculty = await bcrypt.hash('pass123', 10);
            await User.create({
                username: 'faculty',
                password: hashedFaculty,
                role: 'faculty',
                name: 'Dr. Smith'
            });
            console.log('Faculty User Created');
        } else {
            console.log('Faculty User already exists');
        }

        const studentExists = await User.findOne({ username: 'student' });
        if (!studentExists) {
            const hashedStudent = await bcrypt.hash('pass123', 10);
            await User.create({
                username: 'student',
                password: hashedStudent,
                role: 'student',
                name: 'John Doe',
                enrollmentNo: 'CSE2025001',
                deviceId: 'device_001'
            });
            console.log('Student User Created');
        } else {
            console.log('Student User already exists');
        }

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();

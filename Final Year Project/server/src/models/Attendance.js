const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture', required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['Present', 'Absent'], default: 'Present' },
    manualOverride: { type: Boolean, default: false }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);

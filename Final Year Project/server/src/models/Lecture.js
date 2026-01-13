const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    startTime: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false } // Only active during the 2-min window + grace period
});

module.exports = mongoose.model('Lecture', LectureSchema);

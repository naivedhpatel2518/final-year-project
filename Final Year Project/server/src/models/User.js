const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'faculty'], required: true },
    name: { type: String, required: true },
    enrollmentNo: { type: String }, // Only for students
    deviceId: { type: String }      // For device binding (future scope)
});

module.exports = mongoose.model('User', UserSchema);

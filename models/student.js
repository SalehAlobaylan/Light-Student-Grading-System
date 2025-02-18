const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: String,
    name: String,
    quiz: Number,
    midterm: Number,
    project: Number,
    finalExam: Number,
    totalMarks: Number,
    grade: String,
});

module.exports = mongoose.model('Student', studentSchema);

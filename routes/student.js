const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

router.post('/add', async (req, res) => {
    const { name, marks } = req.body;
    const newStudent = new Student({ name, marks });
    await newStudent.save();
    res.status(201).json(newStudent);
});

// router.get('/students/:id', async (req, res) => {
//     const student = await Student.findById(req.params.id);
//     res.json(student);
// });

router.put('/edit/:id', async (req, res) => {
    const { name, marks } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, marks }, { new: true });
    res.json(updatedStudent);
});

module.exports = router;

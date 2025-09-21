const tasksRouter = require('express').Router();
const Task = require('../models/task');

tasksRouter.post('/tasks', async (req, res) => {
    try {
        const { TName, due, description } = req.body;
        if (!TName || !due) {
            return res.status(400).send('These fields are required!');
        }

        const task = new Task({
            TName,
            due,
            description,
        });

        await task.save();
        return res.status(201).json({ message: 'Task added successfully!' });
    } catch (error) {
        return res.status(500).json({ error: 'An issue was encountered: ' + error.message });
    }
});

tasksRouter.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Issue setting tasks' + error.message });
    }
});

module.exports = tasksRouter;
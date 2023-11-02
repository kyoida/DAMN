// const Task = require('../models/taskModel');

const taskController = {
    getAllTasks: async (req, res) => {
        // try {
        //     const tasks = await Task.findAll();
        //     res.status(200).json(tasks);
        // } catch (error) {
        //     res.status(500).json({error: 'My bad...'});
        // }
        var users = {
            must: 'yes I am',
            tik: 'tik tok'
        };
        res.status(200).send(users);
    }
}
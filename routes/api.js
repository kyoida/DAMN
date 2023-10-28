const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', (req, res, err) => {
    if (err) return err;
    taskController.getAllTasks
});

// router.post('/tasks', taskController.createTask);

// router.put('/tasks/:taskId', taskController.updateTask);

// router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;
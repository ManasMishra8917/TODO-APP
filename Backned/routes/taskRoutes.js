const express = require('express');
const router = express.Router();

// Import controllers
const taskController = require('../controllers/taskController');

// Define routes
router.get('/tasks', taskController.getTasks); // Ensure taskController.getTasks exists and is a function
router.post('/tasks', taskController.createTask); // Ensure taskController.createTask exists and is a function

module.exports = router;

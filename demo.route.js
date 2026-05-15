const express = require('express');

const User = require('../models/user.model');
const Task = require('../models/task.model');

const router = express.Router();

// Create a User
router.post('/users', async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    // Unique email -> nicer message
    if (err && err.code === 11000) {
      err.statusCode = 409;
      err.message = 'Email already exists';
    }
    next(err);
  }
});

// List Users
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Create a Task (with reference to User)
router.post('/tasks', async (req, res, next) => {
  try {
    const { title, description, completed, userId } = req.body;

    // Validate referenced user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'userId does not exist' });
    }

    const task = await Task.create({ title, description, completed, userId });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

// List Tasks (populate referenced user)
router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Task.find()
      .sort({ _id: -1 })
      .populate('userId', 'name email createdAt');

    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;


const express = require('express');

const authRouter = require('./authRouter');
const todoListRouter = require('./todoListRouter');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/todo', todoListRouter);

module.exports = router;

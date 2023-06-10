const express = require('express');
const authController = require('../controller/authController');

const authRouter = express.Router();

authRouter.get('', authController.getAllUsers);

module.exports = authRouter;

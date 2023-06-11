const express = require('express');
const authController = require('../controller/authController');

const authRouter = express.Router();

authRouter.get('', authController.getAllUsers);
authRouter.post('', authController.createUser);
authRouter.post('/login', authController.logInInUser);

module.exports = authRouter;

const express = require('express');
const authController = require('../controller/authController');

const authRouter = express.Router();

// 어드민 임시
authRouter.get('/admin/9999', authController.getAllUsers);

authRouter.post('', authController.createUser);
authRouter.post('/login', authController.logInInUser);
authRouter.post('/gift', authController.saveGift);

authRouter.patch('/deadline', authController.setDeadLine);

module.exports = authRouter;

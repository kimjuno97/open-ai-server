const authService = require('../services/authService');

const getAllUsers = async (req, res) => {
	return res.status(200).json({ users: await authService.getAllUsers() });
};

const authController = {
	getAllUsers,
};

module.exports = authController;

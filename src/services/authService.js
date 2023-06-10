const authDao = require('../models/authDao');

const getAllUsers = async () => {
	return await authDao.getAllUsers();
};

const authService = {
	getAllUsers,
};

module.exports = authService;

const authDao = require('../models/authDao');

const getAllUsers = async () => {
	try {
		return await authDao.getAllUsers();
	} catch (err) {
		throw err;
	}
};

const createUser = async ({ name, phone_number, child_age, region }) => {
	try {
		return await authDao.createUser({ name, phone_number, child_age, region });
	} catch (err) {
		throw err;
	}
};

const logInInUser = async ({ phone_number }) => {
	try {
		return await authDao.logInInUser({ phone_number });
	} catch (err) {
		throw err;
	}
};

const authService = {
	getAllUsers,
	createUser,
	logInInUser,
};

module.exports = authService;

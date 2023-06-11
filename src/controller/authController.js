const authService = require('../services/authService');

const getAllUsers = async (req, res) => {
	return res.status(200).json({ users: await authService.getAllUsers() });
};

const createUser = async (req, res) => {
	try {
		const { name, phone_number, child_age, region } = req.body;

		await authService.createUser({ name, phone_number, child_age, region });

		return res.status(201).json({
			message: 'success sign-up',
		});
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '이미 가입한 유저입니다.' });
	}
};

const logInInUser = async (req, res) => {
	try {
		const { phone_number } = req.body;

		const [userInfo] = await authService.logInInUser({ phone_number });

		if (userInfo) {
			return res.status(201).json({
				message: 'success log-in',
				userInfo,
			});
		} else {
			throw error();
		}
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '등록된 회원이 없습니다.' });
	}
};

const authController = {
	getAllUsers,
	createUser,
	logInInUser,
};

module.exports = authController;

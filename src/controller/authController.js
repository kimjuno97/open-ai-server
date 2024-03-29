const authService = require('../services/authService');

const getAllUsers = async (req, res) => {
	return res.status(200).json({ users: await authService.getAllUsers() });
};

const createUser = async (req, res) => {
	try {
		const { name, phone_number, child_age, region } = req.body;

		// if (!!name && !!phone_number && !!child_age && !!region) {
		// 	throw error();
		// }

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

const saveGift = async (req, res) => {
	try {
		const { gift, id } = req.body;
		const [userInfo] = await authService.saveGift({ gift, id });

		return res.status(201).json({ message: 'success upload', userInfo });
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '파일을 저장할 수 없습니다..' });
	}
};

const setDeadLine = async (req, res) => {
	try {
		const { deadline, id } = req.body;
		await authService.setDeadLine({ deadline, id });
		return res.status(201).json({ message: 'success deadline' });
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '올바른 유저가 아닙니다.' });
	}
};

const authController = {
	getAllUsers,
	createUser,
	logInInUser,
	saveGift,
	setDeadLine,
};

module.exports = authController;

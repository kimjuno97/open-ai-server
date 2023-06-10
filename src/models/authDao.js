const database = require('./dataSource');

const getAllUsers = async () => {
	try {
		return await database.query(
			`
        SELECT * FROM users;
      `,
		);
	} catch (err) {
		const error = new Error('서버 죽었나?..');
		error.statusCode = 400;
		throw error;
	}
};

const authDao = {
	getAllUsers,
};

module.exports = authDao;

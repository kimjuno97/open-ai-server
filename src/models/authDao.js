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

const createUser = async ({ name, phone_number, child_age, region }) => {
	try {
		return await database.query(
			`
			INSERT INTO users(
				name,
				phone_number,
				child_age,
				region) VALUES (?, ?, ?, ?);`,
			[name, phone_number, child_age, region],
		);
	} catch (err) {
		throw err;
	}
};

const logInInUser = async ({ phone_number }) => {
	try {
		return await database.query(`SELECT * FROM users WHERE phone_number=?;`, [phone_number]);
	} catch (err) {
		throw err;
	}
};

const authDao = {
	getAllUsers,
	createUser,
	logInInUser,
};

module.exports = authDao;
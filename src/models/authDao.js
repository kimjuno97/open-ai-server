const database = require('./dataSource');

const getAllUsers = async () => {
	try {
		return await database.query(
			`
        SELECT * FROM users;
      `,
		);
	} catch (err) {
		throw err;
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

const saveGift = async ({ gift, id }) => {
	try {
		await database.query(`UPDATE users SET gift=? WHERE id=?;`, [gift, id]);
		return await database.query(`SELECT * from users WHERE id=?;`, [id]);
	} catch (err) {
		throw err;
	}
};

const setDeadLine = async ({ deadline, id }) => {
	try {
		return await database.query('UPDATE users SET deadline=? WHERE id=?', [deadline, id]);
	} catch (err) {
		console.log('err', err);
		throw err;
	}
};

const authDao = {
	getAllUsers,
	createUser,
	logInInUser,
	saveGift,
	setDeadLine,
};

module.exports = authDao;

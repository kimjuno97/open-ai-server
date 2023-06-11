const database = require('./dataSource');

const getTodoList = async ({ user_id }) => {
	try {
		return await database.query(`SELECT * FROM todolist WHERE ?`, [user_id]);
	} catch (err) {
		const error = new Error('서버 죽었나?..');
		error.statusCode = 400;
		throw error;
	}
};

const createTodo = async ({ user_id, todo }) => {
	try {
		return await database.query(
			`
      INSERT INTO todolist (user_id, todo) VALUES (?, ?);
    `,
			[user_id, todo],
		);
	} catch (err) {
		const error = new Error('DB에 안들어감.');
		error.statusCode = 400;
		throw error;
	}
};

const deleteTodo = async ({ id }) => {
	try {
		return await database.query(
			`
    DELETE FROM todolist WHERE id=?;
    `,
			[id],
		);
	} catch (err) {
		const error = new Error('삭제 가능한 정보 없음.');
		error.statusCode = 400;
		throw error;
	}
};

const todoListDao = {
	getTodoList,
	createTodo,
	deleteTodo,
};

module.exports = todoListDao;

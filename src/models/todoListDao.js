const database = require('./dataSource');

const getTodoList = async ({ user_id }) => {
	try {
		return await database.query(`SELECT * FROM todolist WHERE user_id = ?`, [user_id]);
	} catch (err) {
		throw err;
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
		throw err;
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
		throw err;
	}
};

const editTodo = async ({ id, todo, is_completed }) => {
	try {
		return await database.query(
			`
			UPDATE todolist SET todo=?,
			is_completed=? 
			WHERE id=?;`,
			[todo, is_completed, id],
		);
	} catch (err) {
		throw err;
	}
};

const todoListDao = {
	getTodoList,
	createTodo,
	deleteTodo,
	editTodo,
};

module.exports = todoListDao;

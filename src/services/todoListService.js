const todoListDao = require('../models/todoListDao');

const getTodoList = async ({ user_id }) => {
	try {
		return await todoListDao.getTodoList({ user_id });
	} catch (err) {
		throw err;
	}
};
const createTodo = async ({ user_id, todo }) => {
	try {
		await todoListDao.createTodo({ user_id, todo });
		return await todoListDao.getTodoList({ user_id });
	} catch (err) {
		throw err;
	}
};

const deleteTodo = async ({ id }) => {
	try {
		await todoListDao.deleteTodo({ id });
	} catch (err) {
		throw err;
	}
};

const todoListService = {
	getTodoList,
	createTodo,
	deleteTodo,
};

module.exports = todoListService;

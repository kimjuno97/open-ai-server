const todoListDao = require('../models/todoListDao');

const getTodoList = async ({ user_id }) => {
	try {
		const todolist = await todoListDao.getTodoList({ user_id });
		return todolist.map(el => ({ ...el, is_completed: el.is_completed === 1 }));
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

const editTodo = async ({ id, user_id, todo, is_completed }) => {
	try {
		await todoListDao.editTodo({ id, todo, is_completed });
		return await todoListDao.getTodoList({ user_id });
	} catch (err) {
		throw err;
	}
};

const todoListService = {
	getTodoList,
	createTodo,
	deleteTodo,
	editTodo,
};

module.exports = todoListService;

const todoListService = require('../services/todoListService');

const getTodoList = async (req, res) => {
	try {
		const { user_id } = req.params;

		const todoList = await todoListService.getTodoList({ user_id });

		return res.status(201).json({ todoList });
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '잘못된 요청입니다..' });
	}
};

const createTodo = async (req, res) => {
	try {
		const { user_id } = req.params;
		const { todo } = req.body;
		console.log('잘받았나??');
		console.log(user_id, req.body);

		const todoList = await todoListService.createTodo({ user_id, todo });

		return res.status(201).json({ todoList });
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '잘못된 요청입니다..' });
	}
};

const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;

		await todoListService.deleteTodo({ id });
		return res.status(201).json({ message: '삭제를 완료하였습니다.' });
	} catch (err) {
		return res.status(err.statusCode || 404).json({ message: '잘못된 요청입니다..' });
	}
};

const todoListController = {
	getTodoList,
	createTodo,
	deleteTodo,
};

module.exports = todoListController;

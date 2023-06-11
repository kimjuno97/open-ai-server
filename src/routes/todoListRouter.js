const express = require('express');
const todoListController = require('../controller/todoListController');

const todoListRouter = express.Router();

todoListRouter.get('/:user_id', todoListController.getTodoList);
todoListRouter.post('/:user_id', todoListController.createTodo);
todoListRouter.delete('/:id', todoListController.deleteTodo);

module.exports = todoListRouter;

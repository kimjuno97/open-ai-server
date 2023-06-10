const express = require('express');
const { chatGPT } = require('./openaiController/chatGptTurbo');

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const { messages } = req.body;
		const answer = await chatGPT({ messages });

		return res.status(200).json({ answer });
	} catch (err) {
		return res.status(400).json({ messages: 'BAD_REQUEST' });
	}
});

module.exports = {
	router,
};

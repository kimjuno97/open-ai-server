const express = require('express');
const { imageAI } = require('../openaiController/imageAI');

const router = express.Router();

router.post('/image', async (req, res) => {
	try {
		const { prompt, n, size } = req.body;
		const answer = await imageAI({ prompt, n, size });

		return res.status(200).json({ answer });
	} catch (err) {
		return res.status(400).json({ message: 'BAD_REQUEST' });
	}
});

module.exports = {
	router,
};

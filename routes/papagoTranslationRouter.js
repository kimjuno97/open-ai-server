const express = require('express');
const { papagoTranslation } = require('../controller/papagoTranslation');

const router = express.Router();

router.post('', async (req, res) => {
	try {
		const { source, target, text } = req.body;

		const answer = await papagoTranslation({ source, target, text });

		return res.status(200).json({ answer });
	} catch (err) {
		// 버그 확인 필요
		return res.status(400).json({ message: 'BAD_REQUEST' });
	}
});

module.exports = {
	router,
};

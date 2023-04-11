const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(
	cors({
		origin:
			process.env.NODE_ENV === 'develop'
				? 'http://localhost:3000'
				: [
					'https://open-ai-rust-seven.vercel.app',
					'https://open-ai-kimjuno97.vercel.app',
					'https://open-ai-git-main-kimjuno97.vercel.app',
					'https://open-265qsulex-kimjuno97.vercel.app',
				],
	})
);
app.use(morgan('combined'));
app.use(express.json());

app.get('/ping', (req, res, next) => {
	res.json({ message: 'pong' });
});

// openAI Router Line
const { chatGPT } = require('./openaiController/chatGptTurbo');

app.post('/chat', async (req, res) => {
	try {
		const { messages } = req.body;
		const answer = await chatGPT({ messages });

		return res.status(200).json({ answer });
	} catch (err) {
		return res.status(400).json({ messages: 'BAD_REQUEST' });
	}
});

const { imageAI } = require('./openaiController/imageAI');

app.post('/image', async (req, res) => {
	try {
		const { prompt, n, size } = req.body;
		const answer = await imageAI({ prompt, n, size });

		return res.status(200).json({ answer });
	} catch (err) {
		return res.status(400).json({ message: 'BAD_REQUEST' });
	}
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
	try {
		server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

start();

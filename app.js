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
				: 'https://open-ai-git-main-kimjuno97.vercel.app',
	})
);
app.use(morgan('combined'));
app.use(express.json());

app.get('/ping', (req, res, next) => {
	res.json({ message: 'pong' });
});

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	organization: process.env.ORG_ID,
	apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const openAI = async ({ messages }) => {
	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages,
	});

	return completion.data.choices[0].message;
};
/**  안될떄마다 업데이트 참고 할 곳
 *  1. https://platform.openai.com/docs/guides/chat/introduction
 */
app.post('/', async (req, res) => {
	try {
		const { messages } = req.body;
		const answer = await openAI({ messages });

		return res.status(200).json({ answer });
	} catch (err) {
		return res.status(400).json({ messages: 'BAD_REQUEST' });
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

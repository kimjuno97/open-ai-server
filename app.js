const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
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

const openAI = async ({ content }) => {
	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content }],
	});
	console.log('코드데이터 비교하기', completion.data.choices[0].message);
	return completion.data.choices[0].message;
};
/**  해야 될것
 *  1. https://platform.openai.com/docs/guides/chat/introduction
 *  2. 해당 링크에서 아래처럼 대화형으로 요청해야한다.
 *  3.  {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
 */
app.post('/', async (req, res) => {
	try {
		const { content } = req.body;
		const answer = await openAI({ content });

		return res.status(200).json({ answer });
	} catch (err) {
		console.log(err);
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

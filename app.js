const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const routes = require('./src/routes');

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
	}),
);
app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

app.get('/ping', (req, res, next) => {
	res.json({ message: 'pong' });
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

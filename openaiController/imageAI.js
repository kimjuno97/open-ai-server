const { openai } = require('./ConfigOpenAI');

const imageAI = async ({ prompt, n, size }) => {
	try {
		const response = await openai.createImage({
			prompt,
			n,
			size,
		});

		const imageArr = [];
		for (let i = 0; i < n; i++) {
			imageArr.push(response.data.data[i].url);
		}
		return imageArr;
	} catch (err) {
		throw err;
	}
};

module.exports = { imageAI };

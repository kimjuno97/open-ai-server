const { openai } = require('./ConfigOpenAI');

const imageAI = async () => {
	try {
		const response = await openai.createImage({
			prompt: 'a white siamese cat',
			n: 1,
			size: '1024x1024',
		});
		return response.data.data[0].url;
	} catch (err) {
		throw err;
	}
};

module.exports = { imageAI };

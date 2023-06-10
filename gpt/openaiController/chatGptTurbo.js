const { openai } = require('./ConfigOpenAI');

/**  안될떄마다 업데이트 참고 할 곳
 *  1. https://platform.openai.com/docs/guides/chat/introduction
 */

const chatGPT = async ({ messages }) => {
	try {
		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages,
		});

		return completion.data.choices[0].message;
	} catch (err) {
		throw err;
	}
};

module.exports = { chatGPT };

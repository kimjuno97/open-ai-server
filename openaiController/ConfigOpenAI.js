const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	organization: process.env.ORG_ID,
	apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = { openai };

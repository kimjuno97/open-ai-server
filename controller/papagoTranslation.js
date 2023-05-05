const axios = require('axios');

const papagoTranslation = async ({ text, source, target }) => {
	try {
		const headers = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
				'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
			},
		};
		const { data } = await axios.post(
			'https://openapi.naver.com/v1/papago/n2mt',
			{ text, source, target },
			headers,
		);
		// 버그 확인 필요
		const translatedText = data.message.result.translatedText;

		return translatedText;
	} catch (err) {
		throw err;
	}
};

module.exports = { papagoTranslation };

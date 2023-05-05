const express = require('express');
const router = express.Router();

const chatGPTRouter = require('./chatGPTRouter');
router.use('/chat', chatGPTRouter.router);

const imageAIRouter = require('./imageAIRouter');
router.use('/image', imageAIRouter.router);

const papagoTranslationRouter = require('./papagoTranslationRouter');
router.use('/papago', papagoTranslationRouter.router);

module.exports = router;

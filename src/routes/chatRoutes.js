const express = require('express');
const { chatController } = require('../controllers/chatController');

const router = express.Router();

// Rota principal de atendimento de LLM
router.post('/chat', chatController);

module.exports = router;

const llmService = require('../services/llmService');
const logger = require('../config/logger');
const { ERROR_MESSAGES } = require('../config/constants');

const chatController = async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    logger.warn('Mensagem vazia recebida.');
    return res.status(400).json({ error: ERROR_MESSAGES.MISSING_INPUT });
  }

  try {
    const resposta = await llmService.enviarPrompt(message);
    logger.success('Resposta da IA obtida com sucesso.');
    res.status(200).json({ resposta });
  } catch (error) {
    logger.error(`Erro no chatController: ${error.message}`);
    res.status(500).json({ error: ERROR_MESSAGES.API_CALL_FAILED });
  }
};

module.exports = {
  chatController
};

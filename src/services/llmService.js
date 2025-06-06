// src/services/llmService.js

const axios = require('axios');
const { BASE_URL, API_KEY, MODEL, MAX_TOKENS, TEMPERATURE } = require('../config/llm');
const { DEFAULT_CONTEXT } = require('../config/constants');
const logger = require('../config/logger');

const formatInput = require('../utils/formatInput');
const formatResponse = require('../utils/formatResponse');

/**
 * Envia uma mensagem formatada para a LLM e retorna a resposta processada.
 * @param {string} mensagemUsuario - Texto enviado pelo cliente.
 * @returns {Promise<string>} - Resposta gerada pela IA.
 */
const enviarPrompt = async (mensagemUsuario) => {
  const inputLimpo = formatInput(mensagemUsuario);
  const promptCompleto = `${DEFAULT_CONTEXT}\nUsuário: ${inputLimpo}\nIA:`;

  try {
    const response = await axios.post(
      BASE_URL,
      {
        model: MODEL,
        prompt: promptCompleto,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const textoGerado = response.data.choices?.[0]?.text?.trim();

    if (!textoGerado) {
      logger.warn('IA retornou resposta vazia.');
      throw new Error('Resposta vazia da IA');
    }

    return formatResponse(textoGerado);
  } catch (error) {
    logger.error(`Erro ao chamar API da LLM: ${error.message}`);
    throw error;
  }
};

module.exports = {
  enviarPrompt,
};

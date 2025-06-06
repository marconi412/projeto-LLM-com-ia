// src/utils/formatResponse.js

/**
 * Formata a resposta gerada pela IA para remover quebras de linha desnecessárias e espaços.
 * Pode ser expandido para tratamento de HTML, markdown ou resposta multilinha.
 * @param {string} text - Texto bruto da IA.
 * @returns {string} - Texto formatado.
 */
const formatResponse = (text) => {
  if (!text || typeof text !== 'string') return '';

  return text.trim().replace(/\n{2,}/g, '\n').replace(/\s{2,}/g, ' ');
};

module.exports = formatResponse;

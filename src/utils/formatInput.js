// src/utils/formatInput.js

/**
 * Limpa e padroniza a entrada do usuário.
 * Remove espaços extras, quebras de linha inúteis e corrige pontuação básica.
 * @param {string} input - Texto da mensagem do usuário.
 * @returns {string} - Texto formatado.
 */
const formatInput = (input) => {
  if (!input || typeof input !== 'string') return '';

  return input
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s*([?!.,])\s*/g, '$1 ') // cola pontuação com espaço
    .replace(/\n{2,}/g, '\n'); // remove quebras duplas de linha
};

module.exports = formatInput;

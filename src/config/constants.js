const APP_CONSTANTS = {
  DEFAULT_CONTEXT: 'Você é um atendente virtual educado e prestativo. Responda com clareza e empatia.',
  DEFAULT_PROMPT: 'Olá! Como posso te ajudar hoje?',
  ERROR_MESSAGES: {
    API_CALL_FAILED: 'Não foi possível obter resposta da IA no momento.',
    MISSING_INPUT: 'Por favor, forneça uma pergunta ou mensagem.',
    INTERNAL_SERVER_ERROR: 'Algo deu errado. Tente novamente mais tarde.'
  },
  HEADERS: {
    CONTENT_TYPE: 'application/json'
  }
};

module.exports = APP_CONSTANTS;

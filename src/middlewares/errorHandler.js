const logger = require('../config/logger');
const { ERROR_MESSAGES } = require('../config/constants');

const errorHandler = (err, req, res, next) => {
  logger.error(`Erro global capturado: ${err.message}`);
  res.status(500).json({
    error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    detalhes: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;

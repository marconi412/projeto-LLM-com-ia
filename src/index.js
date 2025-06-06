// src/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const SERVER_CONFIG = require('./config/server');
const logger = require('./config/logger');

const chatRoutes = require('./routes/chatRoutes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Rotas principais
app.use('/api', chatRoutes);

// Middleware de erro (deve ficar por último)
app.use(errorHandler);

// Iniciar servidor
app.listen(SERVER_CONFIG.PORT, () => {
  logger.success(`Servidor rodando em http://localhost:${SERVER_CONFIG.PORT} [${SERVER_CONFIG.MODE}]`);
});

require('dotenv').config();

const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000,
  MODE: process.env.NODE_ENV || 'development',
};

module.exports = SERVER_CONFIG;

require('dotenv').config();

const LLM_CONFIG = {
  BASE_URL: process.env.LLM_API_URL || 'https://api.together.xyz/v1/completions',
  API_KEY: process.env.LLM_API_KEY || '', // definir no .env
  MODEL: process.env.LLM_MODEL || 'mistralai/Mixtral-8x7B-Instruct-v0.1', // modelo default
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7
};

module.exports = LLM_CONFIG;

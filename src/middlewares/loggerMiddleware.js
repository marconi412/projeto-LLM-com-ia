// src/middlewares/loggerMiddleware.js

const chalk = require('chalk');

const loggerMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(
    `${chalk.gray(`[${time}]`)} ${chalk.cyan(req.method)} ${chalk.yellow(req.originalUrl)}`
  );
  next();
};

module.exports = loggerMiddleware;

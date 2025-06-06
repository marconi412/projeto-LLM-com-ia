const chalk = require('chalk');

const timestamp = () => {
  const now = new Date().toISOString();
  return chalk.gray(`[${now}]`);
};

const log = {
  info: (msg) => {
    console.log(`${timestamp()} ${chalk.blue('INFO')}  ➜ ${msg}`);
  },
  success: (msg) => {
    console.log(`${timestamp()} ${chalk.green('SUCCESS')} ➜ ${msg}`);
  },
  warn: (msg) => {
    console.warn(`${timestamp()} ${chalk.yellow('WARNING')} ➜ ${msg}`);
  },
  error: (msg) => {
    console.error(`${timestamp()} ${chalk.red('ERROR')} ➜ ${msg}`);
  },
};

module.exports = log;

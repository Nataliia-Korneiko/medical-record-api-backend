import pino from 'pino';

const logger = pino({
  base: { pid: false },
  transport: {
    target: 'pino-pretty',
    options: {
      colorized: true,
    },
  },
  timestamp: () => `,"time": "${new Date().toLocaleString()}"`,
});

export default logger;

const winston = require("winston");
const logLevels = {
  error: "error",
  warn: "warn",
  info: "info",
  debug: "debug",
};
const logColors = {
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "blue",
};
winston.addColors(logColors);
const logger = winston.createLogger({
  level: "info",
  levels: logLevels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}] ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;

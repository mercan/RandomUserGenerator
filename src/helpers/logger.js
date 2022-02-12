const winston = require("winston");
const dayjs = require("dayjs");
const config = require("../config/logger");

const loggerFormat = winston.format.combine(
  winston.format.timestamp({
    format: config.datePattern,
  }),
  winston.format.metadata({
    fillExcept: ["message", "level", "timestamp", "service"],
  }),
  winston.format.printf((msg) => {
    if (msg.service === "Fastify") {
      if (msg.message.req) {
        return `{"service": "${msg.service}", "time": "${msg.timestamp}", "level": "${msg.level}", "message": "Incoming request", "reqId": "${msg.message.req.id}", "url": "${msg.message.req.url}", "method": "${msg.message.req.method}"}`;
      }

      if (msg.message.res) {
        if (msg.message.err) {
          return `{"service": "${msg.service}", "time": "${msg.timestamp}", "level": "${msg.level}", "message": "Request error", "reqId": "${msg.message.res.request.id}", "error": "${msg.message.err}"}`;
        }

        return `{"service": "${msg.service}", "time": "${
          msg.timestamp
        }", "level": "${
          msg.level
        }", "message": "Request completed", "reqId": "${
          msg.message.res.request.id
        }", "statusCode": "${msg.message.res.statusCode}", "responseTime": "${
          Math.round(msg.message.responseTime * 100) / 100
        } ms"}`;
      }
    }

    if (!msg.message.req || !msg.message.res) {
      return `{"service": "${msg.service}", "time": "${msg.timestamp}", "level": "${msg.level}", "message": "${msg.message}"}`;
    }
  })
);

module.exports = (() => {
  return new winston.createLogger({
    defaultMeta: { service: "Fastify" },
    levels: Object.assign(
      { fatal: 0, warn: 4, trace: 7 },
      winston.config.syslog.levels
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize({ error: true }),
          loggerFormat
        ),
      }),
      new (require("winston-daily-rotate-file"))({
        format: loggerFormat,
        dirname: config.path,
        filename: config.fileName,
        extension: config.extension,
        timestamp: () => dayjs().format(config.timestampPattern),
        dataPattern: config.datePattern,
        zippedArchive: config.env !== "development",
      }),
    ],
  });
})();

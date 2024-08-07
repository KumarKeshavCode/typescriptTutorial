"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error'
        }),
        new winston_1.transports.File({
            dirname: 'logs',
            filename: 'info.log',
            level: 'info'
        })
        //new transports.Console()  //uncomment this to print logs to console as well.
    ],
    //transports :[new transports.console()],
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}] : ${message}`;
    })),
});
exports.logger = logger;

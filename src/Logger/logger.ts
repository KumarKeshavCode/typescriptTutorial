import { createLogger,transports, format } from "winston";

const logger = createLogger({

    transports:[
        new transports.File({
            dirname: 'logs',
            filename : 'error.log',
            level : 'error'
         }),
        new transports.File({ 
            dirname: 'logs',
            filename : 'info.log',
            level : 'info'
            })

        //new transports.Console()  //uncomment this to print logs to console as well.
    ],
    //transports :[new transports.console()],
    format : format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp ,level ,message})=>{
            return `${timestamp} [${level}] : ${message}`;
        })
        ),
   



});

export {logger};
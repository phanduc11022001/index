import { TYPE_LOG } from './constain.js ';

function logger(log, type = TYPE_LOG){
    console[type](log)
}


export  default logger;
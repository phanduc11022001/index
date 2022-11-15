import { createStors } from "./core.js";
import reducer from "./reducer.js";

const {attach, connect, dispatch } = createStors(reducer) 

window.dispatch = dispatch

export {
    attach, 
    connect
}
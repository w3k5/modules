var requireFromString = require('require-from-string');
const myPlugin = `(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>r});const r={router:{a:"a",b:"b"},somefunc:function(){return console.log("here")},dir:"__dirname",name:"test-plugin",prefix:"/test-plugin",version:"0.0.2"};module.exports=o})();`;

const someModule = requireFromString(myPlugin);
console.log(someModule.default)
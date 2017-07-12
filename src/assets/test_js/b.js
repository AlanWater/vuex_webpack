var tt = require("./a.js");
var events = require("events");

console.log(events.prototype);
console.log(`first tt.a is ${tt.a} in b.js`);

var tt2 = (a)=> (b) => (c) =>{
    console.log(`@@@@@@@@@@@@@@@`);
    console.log(c);
}

console.log(tt2(1)(1)(666));
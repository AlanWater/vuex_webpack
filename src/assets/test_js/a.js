var events = require("events");

class test1 extends events{
    constructor(a,b){
        
        super();
        
        this.a = a;
        this.b = b;
        
    }
}

console.log(events.prototype);
events.prototype._events = "abcd";
console.log(events.prototype);
var tt = new test1(1,2);

console.log("this is once enter")
console.log(`tt.a is "${tt.a}" in a.js`);

export default tt;
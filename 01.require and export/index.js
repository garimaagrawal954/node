
//npm init - to create package.json file    
//package.json is the configuration file in which we can create our own script and run our program by writing cmd - npm scriptName


// const {add, sub} = require("./math");
// console.log("Subtraction Value is", sub(2, 4));
// console.log("Addition Value is", add(5, 6));

const math = require("./math");
console.log("Addition Value is", math.add(5, 6));
console.log("Subtraction Value is", math.sub(2, 4));
// function add(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// module.exports = {
//     add,sub
// };

// Another way of exporting functions - use this when we have multiple functions
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b; 
//we can use module.exports single time only in a file because it overrides the previous exports.
//but we can use exports multiple times in a file.
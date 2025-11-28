const fs = require("fs");
// const os = require("os");

//Sync...Blocking Request
// fs.writeFileSync("./test.txt", "Hello World");


//Async...Non-Blocking Request
fs.writeFile("./test.txt", "Contacts details are printed", (err) => {}); //Callback function

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => { //Callback function 
    if(err) {
        console.log("Error", err);
    }
    else{
      console.log(result);  
    }
});

fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);
fs.appendFileSync("./test.txt", new Date().getDate().toString());


fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync('./copy.txt');

console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync("my-docs");

fs.mkdirSync("my-doc/a/b", {recursive: true});



// Default Thread Pool Size = 4
// Max? - 8core cpu -> 8 threads
// We should always write a code which non-blocking.

// console.log(os.cpus().length);


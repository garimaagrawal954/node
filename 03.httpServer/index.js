const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) console.error("Error writing to log file:", err);
        switch(req.url) {
            case "/": res.end("Home Page"); 
            break;
            case "/about": res.end("My name is Garima Agrawal"); 
            break;
            default: res.end("404 Page Not Found");
        }
    });
});

myServer.listen(8000, () => {
    const address = myServer.address();
    const host = address.address === '::' ? 'localhost' : address.address;
    console.log(`Server is running on http://${host}:${address.port}`);
});
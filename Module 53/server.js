const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello, welcome to your Node.js server!");
});

server.listen(3000, () => {
    console.log("Server is running on port no http://127.0.0.1:3000")
})
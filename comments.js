// Create web server
// Create a web server that listens to requests on port 3000. When a request is received, the server should respond with the contents of the file comments.json. If the file does not exist, the server should respond with a 404 status code.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./comments.json", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "File not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
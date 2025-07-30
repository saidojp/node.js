const http = require("http");

const server = http.createServer((request, response) => {
  response.write("DIE LIT!");
  response.end();
});

server.listen(3000);
console.log("Server is listening on port 3000");

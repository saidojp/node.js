const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Requested URL: " + request.url);
  console.log("Request Method: " + request.method);

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤");
});

server.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});

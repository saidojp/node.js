const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  if (request.url === "/ramen.gif") {
    const filePath = path.join(__dirname, "ramen.gif");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(404);
        return response.end("GIF not found");
      }

      response.writeHead(200, { "Content-Type": "image/gif" });
      response.end(data);
    });
    return;
  }

  // HTML response
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  response.write("<html>");
  response.write("<body style='font-family: monospace; white-space: pre;'>");

  response.write("<div>Welcome to Neon Noodles!</div>");
  response.write("<div>==============</div>");
  response.write("<div>LATE NITE MENU</div>");
  response.write("<div>==============</div>");
  response.write("<br>");

  response.write("<div>RAMEN</div>");
  response.write("<div>1. Quantum Truffle Ramen</div>");
  response.write("<br>");
  response.write("<img src='/ramen.gif' alt='Ramen' width='300'/><br><br>");

  response.write("<div>EXTRA TOPPINGS</div>");
  response.write("<div>1. Hacktivist Pork</div>");
  response.write("<div>2. Cybernetic Egg</div>");
  response.write("<div>3. Glowing Scallions</div>");

  response.write("</body>");
  response.write("</html>");

  response.end();
});

server.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});

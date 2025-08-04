const http = require("http");

let bio = "This is my original bio.";

const server = http.createServer((request, response) => {
  if (request.method === "PATCH") {
    let addition = "";

    request.on("data", (chunk) => {
      addition += chunk;
    });

    request.on("end", () => {
      console.log("Original Bio:", bio);
      bio += " " + addition; // Append new content to the end
      console.log("Updated Bio:", bio);

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Bio patched!");
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

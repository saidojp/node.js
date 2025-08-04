const http = require("http");

let mood = "";

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(mood ? `Current mood: ${mood}` : "No mood posted yet.");
  } else if (request.method === "POST") {
    let newMood = "";
    request.on("data", (chunk) => {
      newMood += chunk;
    });
    request.on("end", () => {
      mood = newMood;
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Mood posted!");
    });
  } else if (request.method === "PATCH") {
    let updatedMood = "";
    request.on("data", (chunk) => {
      updatedMood += chunk;
    });
    request.on("end", () => {
      mood = updatedMood;
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Mood updated!");
    });
  } else if (request.method === "DELETE") {
    mood = "";
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Mood deleted.");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Route not found.");
  }
});

server.listen(3000, () => {
  console.log("Mood feed server running at http://localhost:3000");
});

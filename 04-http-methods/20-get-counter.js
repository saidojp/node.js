const http = require("http"); // Import the http module

// Create a server
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  console.log("App Name: Discord");
  console.log("Create: Write a message in a channel");
  console.log("Read: See who has reacted to my message");
  console.log("Update: Edit my message to fix a typo");
  console.log("Delete: Delete my message");
  response.end("");
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

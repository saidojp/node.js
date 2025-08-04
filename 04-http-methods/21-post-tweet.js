const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    let tweet = "";

    // Collect the data sent in the POST request
    request.on("data", (chunk) => {
      tweet += chunk;
    });

    // When the entire request body is received
    request.on("end", () => {
      console.log("New tweet:", tweet); // Log the tweet to the console

      // Send a simple response
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Tweet received!");
    });
  } else {
    // Handle other HTTP methods (GET, etc.)
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

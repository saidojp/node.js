// const fs = require("fs");

// fs.unlink("seventh-grade.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file", err);
//     return;
//   }
//   console.log("File deleted successfully");
// });

const path = require("path");
const imageExtensions = [
  "toyota.jpg",
  "suzuki.jpg",
  "kawasaki.jpeg",
  "nissan.gif",
  "lexus.webp",
  "yamaha.PNG",
  "toyota.JPG",
  "suzuki.JPEG",
  "kawasaki.GIF",
  "nissan.WEBP",
];
const fullPath = path.join(
  "Desktop",
  "practice",
  "node.js",
  "chaotic-desktop.js"
);
console.log(fullPath);

const extension = path.extname(imageExtensions[1]); // не получается вызвать сразу 2 массива
console.log(extension);

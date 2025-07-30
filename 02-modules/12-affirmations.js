const os = require("os");
const path = require("path");
const fs = require("fs");

const affirmations = [
  "pure actions",
  "first year being so productive",
  "coding is my obsession",
  "coding is my passion",
  "coding is my life",
  "coding is my love",
  "coding is my everything",
  "coding is my hobby",
  "coding is my joy",
  "coding is my happiness",
  "coding is my purpose",
  "coding is my goal",
  "coding is my dream",
];

const desktopPath = path.join(os.homedir(), "Desktop");

// Function to get a random affirmation and save it to a file on the desktop
function saveRandomAffirmationToDesktop() {
  const randomAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  // Define the new file path on the desktop (this will overwrite the file each time)
  const newFilePath = path.join(desktopPath, "daily-affirmations.txt");

  // Write the random affirmation to a new file on the desktop (this will overwrite it)
  fs.writeFile(newFilePath, randomAffirmation, (err) => {
    if (err) {
      console.error("Error writing the affirmation to the file:", err);
    } else {
      console.log("Random affirmation saved to:", newFilePath);
    }
  });
}

saveRandomAffirmationToDesktop();

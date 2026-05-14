const [major] = process.versions.node.split(".").map(Number);

if (major !== 20) {
  console.error("");
  console.error("This project should run on Node.js 20.");
  console.error(`Current Node.js version: ${process.versions.node}`);
  console.error("");
  console.error("Fix:");
  console.error("  nvm install 20");
  console.error("  nvm use 20");
  console.error("  npm install");
  console.error("  npm run dev");
  console.error("");
  process.exit(1);
}

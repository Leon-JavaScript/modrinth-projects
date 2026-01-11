const fs = require('node:fs');
const path = require('node:path');

// Path to the modrinth.index.json file
const filePath = process.argv[2] || './hypixel-skyblock-simple/modrinth.index.json';

// Read the JSON file
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Helper to sort object keys
const sortObject = (obj) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj;
  return Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};

// Sort the files array by path alphabetically
data.files.sort((a, b) => a.path.localeCompare(b.path));

// Sort hashes and env entries for each file
for (const file of data.files) {
  if (file.hashes) file.hashes = sortObject(file.hashes);
  if (file.env) file.env = sortObject(file.env);
}

// Write the sorted JSON back to the file with proper formatting
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');

console.log(`✓ Sorted ${data.files.length} files in ${filePath}`);

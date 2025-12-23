const fs = require('node:fs');
const path = require('node:path');

// Path to the modrinth.index.json file
const filePath = process.argv[2] || './hypixel-skyblock-simple/modrinth.index.json';

// Read the JSON file
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Sort the files array by path alphabetically
data.files.sort((a, b) => a.path.localeCompare(b.path));

// Write the sorted JSON back to the file with proper formatting
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');

console.log(`✓ Sorted ${data.files.length} files in ${filePath}`);

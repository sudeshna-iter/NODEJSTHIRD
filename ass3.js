const fs = require('fs');
const fsp = require('fs'). promises;

function cbAppend(filePath, data) {
fs. readFile(filePath, 'utf8', (e, d) => {
if (e) return console. error(e);
fs. writeFile(filePath, d + '\\n' + text, e => {
if (e) return console. error(e);
console. log('Callback done');
    });
  });
}

async function asyncAppend(filePath, text) {
  try {
const d = await fsp. readFile(filePath, 'utf8');
await fsp. writeFile(filePath, d + '  ' + text);
console. log('Async done');
  } catch (e) {
    console.error(e);
  }
}

cbAppend('file. txt', 'Hello via Callback');
asyncAppend('file. txt', 'Hello via Async');
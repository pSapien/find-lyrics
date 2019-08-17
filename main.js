require('dotenv').config();

const getLyrics = require('./getLyrics');

(async function main() {
  try {
    const lyrics = await getLyrics('Unsainted', 'Slipknot');
    console.log(lyrics);
  } catch (err) {
    console.log(err);
  }
})();
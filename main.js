require('dotenv').config();

const getLyrics = require('./getLyrics');

(async function main() {
  try {
    const commandLineArgs = process.argv.slice(2);
    const [song, artist] = commandLineArgs;

    const lyrics = await getLyrics(song, artist);
    console.log(lyrics);
  } catch (err) {
    console.log(err);
  }
})();
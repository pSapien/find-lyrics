require('dotenv').config();

const ora = require('ora');

const Log = require('./log');
const Ask = require('./ask');
const getLyrics = require('./getLyrics');

const spinner = ora('Searching your lyrics');

async function main() {
  try {
    Log.packageName();
  
    const { song, artist } = await Ask.forSongAndArtist();
    spinner.start();
    const lyrics = await getLyrics(song, artist);

    Log.songAndArtist(song, artist);
    Log.lyrics(lyrics);
  } catch (err) {
    Log.error();
  } finally {
    spinner.stop();
  }
}

main();
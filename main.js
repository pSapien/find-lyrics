require('dotenv').config();

const ora = require('ora');
const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');

const Log = require('./log');
const getLyrics = require('./getLyrics');

const questions = [
  { type: 'input', message: 'Song: ', name: 'song' },
  { type: 'input', message: 'Artist/Band: ', name: 'artist' },
];
const spinner = ora('Searching your lyrics');

(async function main() {
  try {
    Log.packageName();
  
    const { song, artist } = await inquirer.prompt(questions);
    spinner.start();
    const lyrics = await getLyrics(song, artist);
    spinner.stop();

    Log.songAndArtist(song, artist);
    Log.lyrics(lyrics);
  } catch (err) {
    Log.error();
  }
})();

require('dotenv').config();
const inquirer = require('inquirer');
const chalk = require('chalk');
const boxen = require('boxen');

const getLyrics = require('./getLyrics');
const package = require('./package.json');

const questions = [
  { type: 'input', message: 'Enter the song you want lyrics for: ', name: 'song' },
  { type: 'input', message: 'Artist/Band: ', name: 'artist' },
];

(async function main() {
  try {
    console.log(
      boxen(
        chalk.cyan(`Find Lyrics v${package.version} - Search lyrics on your terminal`),
        { padding: 1, margin: 1, borderStyle: 'double' }
      )
    );

    const { song, artist } = await inquirer.prompt(questions);
    const lyrics = await getLyrics(song, artist);

    console.log('\n');
    console.log(
      chalk.cyanBright(`The lyrics of ${song} by ${artist}`)
    )
    console.log('\n')
    console.log(lyrics);
  } catch (err) {
    console.log(
      chalk.red(`
      This can happen because of two reasons
          1: The song is not found.
          2: There's a spelling mistake in artist or song.
      Please make sure you have enter your inputs correctly. Thanks!
      `)
    );
  }
})();
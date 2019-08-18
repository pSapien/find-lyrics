const boxen = require('boxen');
const chalk = require('chalk');

const { version, description, name } = require('./package.json');

class Log {
  static packageName() {
    console.log(
      boxen(
        chalk.cyan(
          `${name.split('-').map(capitalize).join(' ')} v${version} - ${description}`
        ),
        { padding: 1, margin: 1, borderStyle: 'double' }
      )
    );
  }

  static songAndArtist(song, artist) { 
    console.log('\n');
    console.log(chalk.cyanBright(`The lyrics of ${song} by ${artist}`));
  }

  static lyrics(lyrics) { 
    console.log('\n');
    console.log(lyrics);
  }

  static error() { 
    console.log(
      chalk.red(`
      This can happen because of two reasons
          1: The song is not found.
          2: There's a spelling mistake in artist or song.
      Please make sure you have enter your inputs correctly. Thanks!
      `)
    );
  }
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = Log;

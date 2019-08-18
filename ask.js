const inquirer = require('inquirer');

class Ask {
  static questions = [
    { type: 'input', message: 'Please enter the song name: ', name: 'song' },
    { type: 'input', message: 'Please enter the artist/band name: ', name: 'artist' }, 
  ];

  static async forSongAndArtist() { 
    return await inquirer.prompt(Ask.questions);
  }
}

module.exports = Ask;
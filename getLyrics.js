const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getLyrics(song, artist) { 
  const url = await getSongUrl(song, artist);
  const lyrics = await scrapeLyrics(url);

  return lyrics;
}

module.exports = getLyrics;

async function getSongUrl(song, artist) {
  const res = await fetch(`https://api.genius.com/search?q=${song} ${artist}`, {
    headers: {
      "Content-type": "application/json:",
      "Authorization": `Bearer ${process.env.API_KEY}`
    },
  });

  const { response } = await res.json();
  const { hits } = response;

  for (let hit of hits) { 
    if (hit.result.primary_artist.name.toLowerCase() === artist.toLowerCase())
      return hit.result.url;
  }
  
  throw new Error('Artist Name MisMatched');
}

async function scrapeLyrics(url) { 
  const response = await fetch(url);
  const text = await response.text();
  const $ = cheerio.load(text);

  return $('.lyrics').text().trim();
}


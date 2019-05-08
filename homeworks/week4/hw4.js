const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top?first=20',
  headers: {
    'Client-ID': 'wgu6368li8kfcwuc1xmcxzrb857lg0',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    for (let i = 0; i < info.data.length; i += 1) {
      console.log(`${info.data[i].id} ${info.data[i].name}`);
    }
  }
}

request(options, callback);

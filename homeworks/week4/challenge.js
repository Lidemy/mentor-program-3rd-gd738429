const secondPag = 'eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MTAwfX0';

const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=100',
  headers: {
    'Client-ID': 'wgu6368li8kfcwuc1xmcxzrb857lg0',
  },
};

const option2 = {
  url: `https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=${secondPag}`,
  headers: {
    'Client-ID': 'wgu6368li8kfcwuc1xmcxzrb857lg0',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    for (let i = 0; i < info.data.length; i += 1) {
      console.log(`${info.data[i].user_name}  ${info.data[i].user_id} ${info.data[i].viewer_count}`);
    }
  }
}

request(options, callback);
request(option2, callback);

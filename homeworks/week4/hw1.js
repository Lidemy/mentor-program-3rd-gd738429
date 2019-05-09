const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books/',
  (error, response, body) => {
    const books = JSON.parse(body);
    for (let i = 0; i < 10; i += 1) {
      console.log(`${books[i].id} ${books[i].name}`);
    }
  });

const request = require('request');

const process = require('process');

const inputNum = process.argv;

if (inputNum[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books/',
    (error, response, body) => {
      const books = JSON.parse(body);
      for (let i = 0; i < 20; i += 1) {
        console.log(`${books[i].id} ${books[i].name}`);
      }
    });
} else if (inputNum[2] === 'read' && inputNum[3]) {
  request(`https://lidemy-book-store.herokuapp.com/books/${inputNum[3]}`,
    (error, response, body) => {
      const books = JSON.parse(body);
      console.log(`${books.id} ${books.name}`);
    });
}

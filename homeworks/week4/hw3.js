const request = require('request');

const process = require('process');

const inputNum = process.argv;
// LIST
if (inputNum[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books/',
    (error, response, body) => {
      const books = JSON.parse(body);
      for (let i = 0; i < books.length; i += 1) {
        console.log(`${books[i].id} ${books[i].name}`);
      }
    });
// READ
} else if (inputNum[2] === 'read' && inputNum[3]) {
  request(`https://lidemy-book-store.herokuapp.com/books/${inputNum[3]}`,
    (error, response, body) => {
      const books = JSON.parse(body);
      console.log(`${books.id} ${books.name}`);
    });
// DELETE
} else if (inputNum[2] === 'delete' && inputNum[3]) {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${inputNum[3]}`,
    (err, response) => {
      if (response.statusCode === 200) {
        console.log('Delete Complete');
      } else {
        console.log('Delete Fail');
      }
    });
// CREATE
} else if (inputNum[2] === 'create' && inputNum[3]) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name: inputNum[3],
      },
    },
    (err, response) => {
      if (response.statusCode === 201) {
        console.log('Create Complete');
      } else {
        console.log('Create Fail');
      }
    },
  );

// UPDATE
} else if (inputNum[2] === 'update' && inputNum[3] && inputNum[4]) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${inputNum[3]}`,
      form: {
        name: inputNum[4],
      },
    },
    (err, response) => {
      if (response.statusCode === 200) {
        console.log('Update Complete');
      } else {
        console.log('Update Fail');
      }
    },
  );
// ERROR
} else {
  request('https://lidemy-book-store.herokuapp.com/books/',
    () => {
      console.log('Error paramater, Please input right paramater and try again');
    });
}

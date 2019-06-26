// //////////////// varible block ////////////////////
let show = [];
let showJson = '';
const input = document.querySelector('.add__msg__input');
const btn = document.querySelector('.add__msg__btn');
const list = document.querySelector('.review__msg__list');


// //////////////// function block ////////////////////
// show 出最新的留言
function showNewMessage() {
  for (let i = 0; i < 20; i += 1) {
    const li = document.createElement('li');
    li.innerText = showJson[i].content;
    list.appendChild(li);
  }
}
// create a get request
function getPost() {
  const get = new XMLHttpRequest();
  get.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  get.send();
  get.onload = () => {
    show = get.responseText;
    showJson = JSON.parse(show);
    showNewMessage();
  };
}

// create a post request
function addPost(value) {
  const post = new XMLHttpRequest();
  const content = encodeURIComponent(value);
  post.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  post.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
  post.send(`content=${content}`);
  // 新增留言完後，在發送新的 request
  post.onload = () => {
    console.log('get request send');
    getPost();
  };
}

// /////////////// Event Listener /////////////////////
// page loaded
window.addEventListener('load', () => {
  getPost();
  showNewMessage();
});

// submit button
btn.addEventListener('click', () => {
  list.innerHTML = '';
  addPost(input.value);
  input.value = '';
});

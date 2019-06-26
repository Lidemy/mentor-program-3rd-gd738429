// ////////// variable block //////////
let counter = 0;
let json = [];
const contentRow = document.querySelector('.content__row');

// ////////// function block //////////
// 設定所有頁面
function setAllItem() {
  for (let j = 0; j < 20; j += 1) {
    const item = document.createElement('div');
    const logos = json.streams[counter].channel.logo;
    const preview = json.streams[counter].preview.large;
    const title = json.streams[counter].channel.name;

    item.classList.add('content__row__item');
    item.innerHTML = `<img src=${preview} alt='error' class="content__row__item__img"></img>
      <div class="content__row__item__footer">
      <img src=${logos} alt="error" class="content__row__item__footer__icon"/>
      <div class="content__row__item__footer__label">${title}</div>
      </div>`;
    contentRow.appendChild(item);
    counter += 1;
  }
}

// 設定 get twitch request
function getRequest() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League of Legends&limit=20', true);
  request.setRequestHeader('Client-ID', 'wgu6368li8kfcwuc1xmcxzrb857lg0');
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      json = JSON.parse(request.responseText);
      setAllItem();
    } else {
      console.log(request.status);
    }
  };
}

// ////////// Event Listener //////////
window.addEventListener('load', () => {
  getRequest();
});

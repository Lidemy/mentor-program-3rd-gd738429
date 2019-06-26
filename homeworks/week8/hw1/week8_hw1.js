const request = new XMLHttpRequest();
const body = document.querySelector('body');
const bingo = document.querySelector('#bingo');

function reward(str) {
  if (str === 'FIRST') {
    body.classList.add('bg-sky');
    bingo.innerHTML = `<div id="bingo__message">恭喜你中頭獎了！日本東京來回雙人遊！</div>
    <img src="http://i.epochtimes.com/assets/uploads/2018/06/Fotolia_16956926_Subscription_L-600x400.jpg" alt="error" id="bingo__image"/>`;
  } else if (str === 'SECOND') {
    bingo.innerHTML = `<div id="bingo__message">二獎！90 吋電視一台！</div>
    <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2017/09/06/6/3965508.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600" alt="error" id="bingo__image"/>`;
  } else if (str === 'THIRD') {
    bingo.innerHTML = `<div id="bingo__message">恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</div>
    <img src="https://lh3.googleusercontent.com/vA4tG0v4aasE7oIvRIvTkOYTwom07DfqHdUPr6k7jmrDwy_qA_SonqZkw6KX0OXKAdk" alt="error" id="bingo__image"/>`;
  } else {
    bingo.innerHTML = '<div id="bingo__message">銘謝惠顧</div><img src="" id="bingo__image"/>';
    body.classList.add('bg-black');
    body.style.color = 'white';
  }
}

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.responseText);
    const prizeNum = json.prize;
    console.log(prizeNum);
    reward(prizeNum);
  } else {
    console.log(request.responseText, request.status);
  }
};
request.onerror = () => {
  alert('系統不穩定，請再試一次');
  console.log(request.responseText);
};
request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
request.send();

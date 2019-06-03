const body = document.querySelector('body');
const inner = document.querySelector('.inner');
let BGchangeTime = 0; // 背景改變的時間
let clickTime = 0; // 滑鼠點擊的時間
let isBGchanged = false; // 背景是否改變
let isGameOver = false; // 遊戲是否結束

// 判斷畫面是否改變
function setBGcolor() {
  if (isBGchanged || isGameOver) return;
  body.classList.add('BG-orange');
  isBGchanged = true;
  BGchangeTime = new Date();
}

// 設定１～３的亂數 , 畫面改變
function randomStart() {
  const randomTime = (Math.random() * 2 + 1) * 1000; // 設定１～３的亂數
  setTimeout(setBGcolor, randomTime);// 經過一段時間後畫面改變
}

// 顯示按鈕
function showTryAgain() {
  if (isGameOver) {
    const btn = document.createElement('button');
    inner.append(btn);
    btn.setAttribute('class', 'again');
    btn.innerText = '再玩一次';
  }
}

// 再玩一次
function playAgain() {
  inner.removeChild(document.querySelector('.again'));
  body.classList.remove('BG-orange');
  isBGchanged = false;
  isGameOver = false;
  randomStart();
}

// 按下滑鼠
function click() {
  if (isGameOver) return;
  if (isBGchanged) {
    alert(`你的成績${(clickTime - BGchangeTime) / 1000}秒`);
  } else {
    alert('別急！還沒變色');
  }
  isGameOver = true;
  showTryAgain();
}

// 第一次執行畫面
randomStart();

// 之後的遊玩
window.addEventListener('click', (e) => {
  clickTime = new Date();
  if (e.target.nodeName === 'BUTTON') playAgain();
  else click();
});

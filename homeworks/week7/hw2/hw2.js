const contentBlock = document.getElementsByClassName('content-block');
const contentBlockWarning = document.getElementsByClassName('content-block-warning');
const input = document.getElementsByClassName('content-block-input');
let selectedName = null;// 選到的input name number
let isClicked = false;// 判斷文字是否被點擊過

// show warning
function showWarning(num) {
  contentBlock[num].classList.add('bg-changed');
  contentBlockWarning[num].classList.add('show-warning-text');
  input[num].classList.add('input-clicked');
  input[num].classList.add('bg-changed');
}
// remove warning
function removeWarning(num) {
  contentBlock[num].classList.remove('bg-changed');
  contentBlockWarning[num].classList.remove('show-warning-text');
  input[num].classList.remove('input-clicked');
  input[num].classList.remove('bg-changed');
}

// when input text , changed text color
function fontChanged(num) {
  input[num].classList.add('input-font-changed');
}

// check content is empty or not
function isContentEmpty(num) {
  if (input[num].value) {
    removeWarning(num);
    fontChanged(num);
  } else {
    showWarning(num);
  }
}

// 主要判斷input
function mainLogic(e, num) {
  if (input[num].value) return;
  if (isClicked === true) {
    if (e.target.nodeName !== 'INPUT') showWarning(num);
  }
  if (e.target.nodeName === 'INPUT') {
    isClicked = true;
    fontChanged(num);
  }
}

// special wrap option
function wrapBlock() {
  if (document.querySelector('input[id = "op1"]').checked === false && document.querySelector('input[id = "op2"]').checked === false) {
    document.querySelector('.content-wrap-block').classList.add('bg-changed');
    document.querySelector('.content-block-wrap-warning').classList.add('show-warning-text');
  } else {
    document.querySelector('.content-wrap-block').classList.remove('bg-changed');
    document.querySelector('.content-block-wrap-warning').classList.remove('show-warning-text');
  }
}

// /////////////////////////////////////////////////////////////

// 事件監聽 click
window.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'INPUT') return;
  if (e.target.name === '5') return;
  if (e.target.name === 'op' || e.target.name === 'op-label') {
    wrapBlock();
    return;
  }
  selectedName = e.target.name;// choose the content-block
  mainLogic(e, parseInt(selectedName, 10));
});

// 事件監聽 keyup
window.addEventListener('keyup', (e) => {
  if (e.target.name === '5') {
    fontChanged(5);
  }
  isContentEmpty(selectedName);
});

// 事件監聽 submit
document.querySelector('.content-btn').addEventListener('click', () => {
  if (document.querySelector('input[id = "op1"]').checked || document.querySelector('input[id = "op2"]').checked) {
    wrapBlock();
    let anyEmptyContent = false;
    for (let i = 0; i <= 4; i += 1) {
      if (input[i].value === '') {
        isContentEmpty(i);
        anyEmptyContent = true;
      }
    }
    if (anyEmptyContent === false) {
      alert('謝謝您的回覆！');
      window.location.reload();
    }
  } else {
    wrapBlock();
    for (let i = 0; i <= 4; i += 1) {
      if (input[i].value === '') {
        isContentEmpty(i);
      }
    }
  }
});

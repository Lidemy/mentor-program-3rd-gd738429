
// Variable Block---------------------------------------------------

const result = document.querySelector('#result');
const wrap = document.querySelector('#wrap');
let selectedBtn = null;// 選擇的按鈕
let tempArr = [];// 紀錄數字的陣列
let tempResult = null;// 暫存答案
let tempSignal = 0;// 暫存所選的運算符號
let isFirstInput = true;// 是否為第一次輸入

// function Block---------------------------------------------------

// 記錄輸入的答案到陣列
function recordList() {
  const recordTemp = result.innerText;
  if (result.innerText !== '') tempArr.push(recordTemp);
}

// 清空計算欄位
function clearResult() {
  result.innerText = '';
}

// 選擇運算符號
function chooseSignal() {
  switch (selectedBtn.innerText) {
    case '+':
      tempSignal = 1;
      break;
    case '-':
      tempSignal = 2;
      break;
    case '×':
      tempSignal = 3;
      break;
    case '÷':
      tempSignal = 4;
      break;
    default:
      break;
  }
}

// 判斷數字到計算欄位的邏輯函式
function inputLogic() {
  // 若是第一次輸入
  if (isFirstInput === true) {
    if (selectedBtn.innerText === '×' || selectedBtn.innerText === '-' || selectedBtn.innerText === '+' || selectedBtn.innerText === '÷') return;
    result.innerText = '';
    result.innerText = selectedBtn.innerText;
    isFirstInput = false;
  } else if (selectedBtn.innerText !== '×' && selectedBtn.innerText !== '-' && selectedBtn.innerText !== '+' && selectedBtn.innerText !== '÷' && selectedBtn.innerText !== 'AC' && selectedBtn.innerText !== '=') {
    result.innerText += selectedBtn.innerText;
  }
}


// 按下「等於」依據運算符號開始計算
function pressEqual() {
  switch (tempSignal) {
    case 1:
      tempResult += Number(tempArr[tempArr.length - 1]);
      break;
    case 2:
      tempResult -= Number(tempArr[tempArr.length - 1]);
      break;
    case 3:
      tempResult *= Number(tempArr[tempArr.length - 1]);
      break;
    case 4:
      tempResult /= Number(tempArr[tempArr.length - 1]);
      break;
    default:
      return;
  }
  result.innerText = tempResult;
}

// 判斷除了數字以外的符號
function functionButton() {
  // 功能'AC'
  if (selectedBtn.innerText === 'AC') {
    clearResult();
    tempArr = [];
    tempSignal = 0;
  }
  // 功能'×-+÷'
  if (selectedBtn.innerText === '×' || selectedBtn.innerText === '-' || selectedBtn.innerText === '+' || selectedBtn.innerText === '÷') {
    if (isFirstInput === true) {
      selectedBtn.innerText = '0';
    } else {
      recordList();
      clearResult();
    }
  }
  // 功能 '='
  if (selectedBtn.innerText === '=') {
    recordList();
    clearResult();
    pressEqual();
  }
}

// 準備計算 ＆ 判斷運算符號
function readyToCalculate() {
  // 先把第一個輸入的數字放入tempArr
  if (tempArr.length === 1) {
    tempResult = Number(tempArr[0]);
  }
  chooseSignal();
}

// Event Listener Block---------------------------------------------------

wrap.addEventListener('click', (e) => {
  selectedBtn = e.target.closest('.btn');
  if (e.target.className !== 'btn') return;
  if (e.target.className === 'btn') {
    inputLogic();
    functionButton();
    readyToCalculate();
  }
});

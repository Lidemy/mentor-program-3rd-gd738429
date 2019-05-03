function add(a, b) {
  let ans = ''; // answer
  let ansLength = 1; // length of answer
  let carry = 0; // 是否進位 0 表示無 1 表示有
  let a2 = a;
  let b2 = b;
  // 補齊位數
  if (a.length > b.length) {
    b2 = b.padStart(a.length, '0');
    a2 = a;
  } else if (a.length < b.length) {
    a2 = a.padStart(b.length, '0');
    b2 = b;
  }

  // execute a+b
  for (let i = 1; i <= a2.length; i += 1) {
    const aNum = a2.charCodeAt(a2.length - i);
    const bNum = b2.charCodeAt(a2.length - i);

    if (((aNum + bNum) % 48) + carry === 10) {
      ans = ans.padStart(ansLength, 0);
      carry = 1;
      if (a2.length - i === 0) {
        ans = ans.padStart(ansLength + 1, 1);
      }
    } else if ((aNum + bNum) < 106) {
      ans = ans.padStart(ansLength, ((aNum + bNum) % 48) + carry);
      carry = 0;
    } else {
      ans = ans.padStart(ansLength, ((aNum + bNum - 48) % 58) + carry);
      carry = 1;
      if (a2.length - i === 0) {
        ans = ans.padStart(ansLength + 1, 1);
      }
    }
    ansLength += 1;
  }
  return ans;
}

module.exports = add;

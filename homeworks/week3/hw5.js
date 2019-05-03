function add(a, b) {
  let ans = ''; // answer
  let ansLength = 1; // length of answer
  let carry = 0; // 是否進位 0 表示無 1 表示有

  // 補齊位數
  if (a.length > b.length) {
    b.padStart(a.length, '0');
  } else if (a.length < b.length) {
    a.padStart(b.length, '0');
  }

  // execute a+b
  for (let i = 1; i <= a.length; i += 1) {
    const aNum = a.charCodeAt(a.length - i); // show the charCode number from a[i]
    const bNum = b.charCodeAt(a.length - i); // show the charCode number from b[i]

    if ((aNum + bNum) < 106) {
      ans = ans.padStart(ansLength, ((aNum + bNum) % 48) + carry);
      carry = 0;
    } else {
      ans = ans.padStart(ansLength, ((aNum + bNum - 48) % 58) + carry);
      carry = 1;
      if (a.length - i === 0) {
        ans = ans.padStart(ansLength + 1, 1);
      }
    }
    ansLength += 1;
  }
  return ans;
}

module.exports = add;

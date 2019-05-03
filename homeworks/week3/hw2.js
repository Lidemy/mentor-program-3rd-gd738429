function alphaSwap(str) {
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      ans += String.fromCharCode(str.charCodeAt(i) + 32);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      ans += String.fromCharCode(str.charCodeAt(i) - 32);
    } else {
      ans += str[i];
    }
  }
  return ans;
}

module.exports = alphaSwap;

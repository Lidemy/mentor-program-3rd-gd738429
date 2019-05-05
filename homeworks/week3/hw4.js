function isPalindromes(str) {
  let ans = false;

  if (str === '') {
    ans = true;
  } else if (str.length === 1) {
    ans = true;
  } else {
    for (let i = 1; i <= Math.floor(str.length / 2); i += 1) {
      if (str[i - 1] === str[str.length - i]) {
        ans = true;
      } else {
        ans = false;
        break;
      }
    }
  }
  return ans;
}

module.exports = isPalindromes;

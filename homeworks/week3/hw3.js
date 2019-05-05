function isPrime(n) {
  let ans;

  if (n === 1) {
    ans = false;
  } else if (n === 2) {
    ans = true;
  } else if (n > 1) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        ans = false;
        break;
      } else {
        ans = true;
      }
    }
  } else {
    ans = 'Please input a number bigger than 0';
  }
  return ans;
}

module.exports = isPrime;

function stars(n) {
  const ansArray = [];
  let starCount = '';

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      starCount += '*';
    }
    ansArray.push(starCount);
    starCount = '';
  }
  return ansArray;
}

module.exports = stars;

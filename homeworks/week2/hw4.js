let i;

function printFactor(n) {
  for (i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  return n;
}

printFactor(10);

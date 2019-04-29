let result = '';
let fullString = '';
let i;
let j;

function join(str, concatStr) {
  str.toString();
  for (i = 0; i < str.length; i += 1) {
    result += str[i];
    if (i < str.length - 1) {
      result += concatStr;
    }
  }
  return result;
}

function repeat(insert, times) {
  for (j = 1; j <= times; i += 1) {
    insert.toString();
    fullString += insert;
  }
  return fullString;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));

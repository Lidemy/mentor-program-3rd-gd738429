let index;
let answer;

function capitalize(str) {
  index = str.charCodeAt(0);

  if (index >= 97 && index <= 122) {
    answer = str.replace(String.fromCharCode(index), String.fromCharCode(index - 32));
  }
  return answer;
}

console.log(capitalize('hello'));

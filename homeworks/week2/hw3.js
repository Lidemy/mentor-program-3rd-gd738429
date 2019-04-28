const array = [];
let i;
let answer;

function reverse(str) {
  for (i = str.length; i >= 0; i -= 1) {
    array.push(str.charAt(i));
  }
  answer = array.toString();
  return console.log(answer);
}

reverse('hello');

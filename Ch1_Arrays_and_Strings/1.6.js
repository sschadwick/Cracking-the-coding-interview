// String Compressions: 1.6

function compress(str) {
  var split = str.split('');
  var counter = 1;
  var result = '';
  for (var i = 0; i < split.length; i++) {
    if (split[i] === split[i + 1]) {
      counter++;
    } else {
      result += split[i] + counter;
      counter = 1;
    }
  }
  if (str.length > result.length) {
    return result;
  }  
  return str;
};

var input1 = 'aaaaabbbbbbcccd';
var output1 = 'a5b6c3d1';
// true
console.log((compress(input1) === output1));

var input2 = 'abcdef';
var output2 = 'abcdef';
// true
console.log((compress(input2) === output2));

// Is Unique: 1.1

// O(n^2) Solution
function unique(str) {
  var split = str.split('');
  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < i; j++) {
      if (split[i] === split[j]) {
        return false;
      }
    }
  }
  return true;
}

var yes = 'abcdefg';
var no = 'aaaaaa';

console.log('This should be true: ' + unique(yes));
console.log('This should be false: ' + unique(no));

//TODO: Optimize this solution for O(n)

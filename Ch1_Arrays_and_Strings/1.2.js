// Check Permuation: 1.2

function isPermutation(str1, str2) {
  if (str1.split('').sort().join() === str2.split('').sort().join()) {
    return true;
  }
  return false;
}

var test1 = 'bcdaefg';
var test2 = 'gfebcda';
var test3 = 'kneaaaaabaodifbn';

// true
console.log(isPermutation(test1, test2));

// false
console.log(isPermutation(test1, test3));

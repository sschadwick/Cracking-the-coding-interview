// Check Permuation: 1.2

function permutate(str1, str2) {
  function countLetters(str) {
    var split = str.split('');
    var dict = {}; // {a: 0, b: 3....}
    for (var i = 0; i < split.length; i++) {
      if (!dict[split[i]]) {
        dict[split[i]] = 1;
      } else {
        dict[split[i]]++;
      }
    }
    return dict;
  }

  function compareLength() {
    if (str1.length === str2.length) {
      return true;
    }
    return false;
  }

  function compareChar(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      return true;
    }
  }

  function compareCount() {
    for (var i = 0; i < sort1.length; i++) {
      if (count1[sort1[i]] !== count2[sort2[i]]) {
        return false;
      }
      return true;
    }
  }

  var count1 = countLetters(str1);
  var count2 = countLetters(str2);

  var sort1 = Object.keys(count1).sort();
  var sort2 = Object.keys(count2).sort();

  var lengthCheck = compareLength();
  var charMatch = compareChar(sort1, sort2);
  var charCount = compareCount();

  return lengthCheck && charMatch && charCount;
}

var test1 = 'bcdaefg';
var test2 = 'gfebcda';
var test3 = 'kneaaaaabaodifbn';
// true
console.log(permutate(test1, test2));

// false
console.log(permutate(test1, test3));

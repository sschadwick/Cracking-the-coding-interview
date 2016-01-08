// Palindrome Permutation: 1.4

function palindromePermutate(str) {
  var dict = countLetters(removeSpaces(str));
  var parsed = '';
  var oddCount = 0;
  for (var letter in dict) {
    if (dict[letter] % 2 !== 0) {
      oddCount++;
    }
  }
  if (oddCount < 2) {
    return true;
  }
  return false;
}

function removeSpaces(str) {
  var splitArr = str.split(' ');
  var result = '';
  for (var word in splitArr) {
    result += splitArr[word];
  }
  return result;
}

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

var input1 = 'taco cat';

// true
console.log(palindromePermutate(input1));

var input2 = 'potato';

// false
console.log(palindromePermutate(input2));

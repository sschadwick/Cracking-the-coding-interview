// One Away: 1.5

function oneAway(str1, str2) {
  var count1 = countLetters(str1);
  var count2 = countLetters(str2);
  var mismatches = 0;
  for (var letter in count1) {
    if (count1[letter] !== count2[letter]) {
      mismatches++;
    }
  }
  if (mismatches < 2) {
    return true;
  }
  return false;
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

var input1 = 'pale';
var compare1 = 'ple';
// true
console.log(oneAway(input1, compare1));

var input2 = 'pales';
var compare2 = 'pale';
// true
console.log(oneAway(input2, compare2));

var input3 = 'pale';
var compare3 = 'bale';
// true
console.log(oneAway(input3, compare3));

var input4 = 'pale';
var compare4 = 'bake';
// false
console.log(oneAway(input4, compare4));

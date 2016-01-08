// URLify: 1.3

function URLify(url) {
  var result = '';
  var split = url.split(' ');
  var parsed = [];

  // Parse out all whitespace
  for (var i in split) {
    if (!!split[i]) {
      parsed.push(split[i]);
    }
  };

  // Add in '%20'
  for (var i = 0; i < parsed.length; i++) {
    result += parsed[i];
    if (i === parsed.length - 1) {
      return result;
    }
    result += '%20';
  }
}

var input = 'Mr John Smith   ';
var output = 'Mr%20John%20Smith';

// true
console.log(URLify(input) === output);

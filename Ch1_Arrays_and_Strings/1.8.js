// Zero Matrix: 1.8

// Element to Zero will be passed in as matrix[1][2];

function zero(matrix, y, x) {
  var yCoord = y - 1;
  var xCoord = x - 1;

  // zero out y
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][yCoord] = 0;
  }

  // zero out x
  for (var i = 0; i < matrix[yCoord].length; i++) {
    matrix[xCoord][i] = 0;
  }
  return matrix;
}

// Input
var arr1 = [1, 1, 1, 1, 1];
var arr2 = [1, 1, 1, 2, 1];
var arr3 = [1, 3, 1, 2, 0];
var arr4 = [0, 1, 2, 4, 5];
var matrix = [arr1, arr2, arr3, arr4];

// Expected Output
var res1 = [0, 0, 0, 0, 0];
var res2 = [1, 0, 1, 2, 1];
var res3 = [1, 0, 1, 2, 0];
var res4 = [0, 0, 2, 4, 5];
var resMatrix = [res1, res2, res3, res4];

console.log(zero(matrix, 2, 1));

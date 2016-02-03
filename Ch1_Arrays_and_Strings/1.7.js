// Rotate Matrix: 1.7
//rotate an NxN matrix consisting of 4 byte pixels.

function rotate(matrix) {
  var newMatrix = [];
  for (var y = 0; y < matrix.length; y++) {
    var newArr = [];
    for (var x = 0; x < matrix[y].length; x++) {
      newArr.unshift(matrix[x][y]);
      //TODO: Optimize to use push rather than unshift
    }
    newMatrix.push(newArr);
  }
  return newMatrix;
}

var arr1 = ['1', '0', '0', '0'];
var arr2 = ['2', '4', '7', '11'];
var arr3 = ['3', '7', '14', '25'];
var arr4 = ['4', '11', '25', '50'];
var matr1 = [arr1, arr2, arr3, arr4];

console.log(rotate(matr1));

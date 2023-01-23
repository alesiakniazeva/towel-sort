
// You should implement your task here.


// function towelSort (matrix) {
//   var i=0; var j=0; var k =-1;
//   var sorted_matrix = new Array((matrix.length)*(matrix[0].length));
//   //console.log(sorted_matrix.length);
//   for (i=0; i<matrix.length; i++) {
//     for (j=0; j<matrix[i].length; j++) {
//       k=k+1;
//       sorted_matrix[k] = matrix[i][j];
//     }
//   }
//   return sorted_matrix;
// }

module.exports = function towelSort (matrix) {
if (arguments.length === 0 || matrix.length === 0) {
  return [];
} else {
  var i=0; var j=0; var k =-1;
  var sorted_matrix = new Array((matrix.length)*(matrix[0].length));
  //console.log(sorted_matrix.length);
  for (i=0; i<matrix.length; i++) {
    for (j=0; j<matrix[i].length; j++) {
      k=k+1;
      if (i%2 === 0) {
      sorted_matrix[k] = matrix[i][j]; 
      } else {
        sorted_matrix[k]=matrix[i][matrix[i].length -1 -j];
      }
    }
  }
  return sorted_matrix;
}
}

// var matrixx = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ];

//  console.log(towelSort(matrixx));



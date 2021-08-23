
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix== null || matrix == undefined) {
    return []
  } else {
  
  for (i=1;i<matrix.length;i+=2){
    
    
            matrix[i].reverse();
     }
    }
   return matrix.flat();
  
  
}

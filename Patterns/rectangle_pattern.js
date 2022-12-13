/*
 javascript function to get hollow rectangle Pattern In * STAR  pattern

 
 example :  
        input  getRectanglePattern(5,5)
        output       
                        * * * * *
                        *       *
                        *       *
                        *       *
                        * * * * *
        

         input  getRectanglePattern(4,5)
         output        
                            * * * *
                            *     *
                            *     *
                            * * * *
         
        
*/

//takes rows and cols as arguments
function getRectanglePattern(row, col) {
  let answer = "";

  for (let currentRow = 0; currentRow < row; currentRow++) {
    for (let currentCol = 0; currentCol < col; currentCol++) {
      if (currentRow == 0 || currentRow == row - 1) {
        answer += "*";
      } else if (currentCol == 0 || currentCol == col - 1) {
        answer += "*";
      } else answer += " ";
    }
    answer += "\n";
  }
  return answer;
}

console.log(getRectanglePattern(3, 10));
console.log(getRectanglePattern(5, 6));
console.log(getRectanglePattern(4, 3));
console.log(getRectanglePattern(4, 7));

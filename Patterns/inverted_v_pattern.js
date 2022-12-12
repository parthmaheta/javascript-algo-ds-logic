/*
 javascript function to get Inverted Pattern In * (STAR) or number pattern

 example :  
        input  getInvertedVPattern(5),getInvertedVPattern(5,true)
        output       
                            * 
                           * *
                          *   * 
                         *     * 
                        *       *
        
        input  getInvertedVPattern(5,false)
        output      
                             1 
                            1 2 
                           1   2 
                          1     2
                         1       2

        input  getInvertedVPattern(4),getInvertedVPattern(4,true)
         output        
                             * 
                            * * 
                           *   * 
                          *     *
         
        input   getInvertedVPattern(4,false)
        output        
                             1 
                            1 2 
                           1   2 
                          1     2
*/

function getInvertedVPattern(row, isStar = true) {
  let answer = "";
  for (let currentRow = 0; currentRow < row; currentRow++) {
    let count = isStar ? "*" : 1;

    for (let space = 0; space < row - currentRow; space++) {
      answer += "  ";
    }

    answer += "  " + count;
    if (!isStar) count++;

    for (let space = 0; space < currentRow; space++) {
      answer += "    ";
    }

    if (currentRow != 0) {
      answer += count;
    }
    answer += "\n";
  }
  return answer;
}

console.log(getInvertedVPattern(5));
console.log(getInvertedVPattern(5, false));
console.log(getInvertedVPattern(4, true));
console.log(getInvertedVPattern(4, false));

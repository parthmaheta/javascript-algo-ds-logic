/*
 javascript function to get Hollow Diamond Pattern In * (STAR) or number pattern

 example :  
        input  getHollowDiamondPattern(5),getHollowDiamondPattern(5,true)
        output       
                             *
                           *    *
                         *        *
                       *            *
                     *                *
                     *                *
                       *            *
                         *        *
                           *    *
                             *
        input  getHollowDiamondPattern(5,false)
        output      
                   1
                1    2
              1        2
            1            2
          1                2
          1                2
            1            2
              1        2
                1    2
                  1

        input  getHollowDiamondPattern(4),getHollowDiamondPattern(4,true)
         output        
                  *
                *    *
              *        *
            *            *
            *            *
              *        *
                *    *
                  *
         
        input   getHollowDiamondPattern(4,false)
        output        
                   1
                 1    2
               1        2
             1            2
             1            2
               1        2
                 1    2
                   1 
*/

function getHollowDiamondPattern(row, isStar = true) {
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
    for (let currentRow = 0; currentRow < row; currentRow++) {
      let count = isStar ? "*" : 1;
  
      for (let space = 0; space <=currentRow; space++) {
        answer += "  ";
      }
  
      answer += "  " + count;
      if (!isStar) count++;
  
      for (let space = row-1; space > currentRow; space--) {
        answer += "    ";
      }
  
      if (currentRow != row-1) {
        answer += count;
      }
      answer += "\n";
    }
    return answer;
  }
  
  console.log(getHollowDiamondPattern(5));
  console.log(getHollowDiamondPattern(5, false));
  console.log(getHollowDiamondPattern(4, true));
  console.log(getHollowDiamondPattern(4, false));
  
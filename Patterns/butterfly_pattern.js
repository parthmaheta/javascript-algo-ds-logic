/*
 javascript function to get Butterfly Pattern In * (STAR) or number pattern

 example :  
        input  getButterflyPattern(5),getButterflyPattern(5,true)
        output       
                        
                        *                 *
                        * *             * * 
                        * * *         * * * 
                        * * * *     * * * *
                        * * * * * * * * * *
                        * * * *     * * * *   
                        * * *         * * *
                        * *             * *
                        *                 *
        
        input  getButterflyPattern(5,false)
        output          1                 1
                        1 2             2 1
                        1 2 3         3 2 1
                        1 2 3 4     4 3 2 1
                        1 2 3 4 5 5 4 3 2 1
                        1 2 3 4     4 3 2 1                     
                        1 2 3         3 2 1
                        1 2             2 1
                        1                 1

        input  getButterflyPattern(4),getButterflyPattern(4,true)
         output        
                        *             *
                        * *         * * 
                        * * *     * * * 
                        * * * * * * * *  
                        * * *     * * *
                        * *         * *
                        *             *
        input   getButterflyPattern(4,false)
        output          1              1
                        1 2          2 1
                        1 2 3      3 2 1
                        1 2 3 4  4 3 2 1
                        1 2 3      3 2 1
                        1 2          2 1
                        1              1
*/

function getButterflyPattern(row, isStar = true) {
    let answer="";

    //top half
    for (let currentRow = 0; currentRow < row; currentRow++) {
      let count = isStar?"*":1;

    //right angle triangle  
    for (let currentCol = 0; currentCol <=currentRow; currentCol++) {  
        answer+=count
        if(!isStar)
        count++;      
    }
    for(let space=1;space< row-currentRow;space++){
        answer+=" ";
    }

    //inverted right angle triangle
    for(let space=1;space< row-currentRow;space++){
        answer+=" ";
    }
    if(!isStar)
    count--
    for (let currentCol = 0; currentCol <=currentRow; currentCol++) {  
        answer+=count
        if(!isStar)
        count--;      
    }   
    answer+="\n";
  }

   //bottom half
    for (let currentRow =1; currentRow < row; currentRow++) {
      let count = isStar?"*":1;
    for (let currentCol = 0; currentCol <row-currentRow; currentCol++) {  
        answer+=count
        if(!isStar)
        count++;      
    }
    for(let space=0;space<currentRow;space++){
        answer+=" ";
    }
    for(let space=0;space<currentRow;space++){
        answer+=" ";
    }
    if(!isStar)
    count--
    for (let currentCol = 0; currentCol <row-currentRow; currentCol++) {  
        answer+=count
        if(!isStar)
        count--;     
    }   
    answer+="\n";
  }


 
  return answer;
}

console.log(getButterflyPattern(5));
console.log(getButterflyPattern(5, false));
console.log(getButterflyPattern(4, true));
console.log(getButterflyPattern(4, false));

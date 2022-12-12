/*
 javascript function to get Butterfly Pattern In * (STAR) or number pattern

  
 example :  
        input  getXPattern(5),getXPattern(5,true)
        output 
                 *        *
                   *    *
                    *  *
                     *
                    * *
                  *    *
                *        *
        
        input  getXPattern(5,false)
        output         
                      1         1
                        1     1
                         1   1
                           1
                         1   1  
                        1     1
                      1         1
                        

        input  getXPattern(3),getXPattern(3,true)
         output        
                         * *                         
                          *
                         * *
                    
        input   getXPattern(3,false)
        output           1   1                         
                           1
                         1   1   
                        
                        
*/

function getXPattern(row, isStar = true) {
  let answer="";
  for(let currentRow=0;currentRow<=(row*2)-2;currentRow++){
    const count=isStar ? "*":1;
    for (let currentCol = 0; currentCol <=(row*2)-2; currentCol++) {
        if(currentCol==currentRow||currentCol==(row*2)-currentRow-2)
         answer+=count
        else
         answer+=" " 
       
    }
    answer+="\n"
  }
  return answer
}

console.log(getXPattern(5));
console.log(getXPattern(5, false));
console.log(getXPattern(4, true));
console.log(getXPattern(4, false));

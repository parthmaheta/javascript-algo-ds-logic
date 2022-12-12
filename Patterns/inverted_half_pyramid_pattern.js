/*
 javascript function to get Inverted Half Pyramid In * (STAR) or number pattern

 example :  
        input  getInvertedHalfPyramidPattern(5),getInvertedHalfPyramidPattern(5,true)
        output       
                * * * * *
                  * * * *
                    * * *
                      * *
                        *
        
        input  getInvertedHalfPyramidPattern(5,false)
        output      
                1 2 3 4 5
                  1 2 3 4
                    1 2 3
                      1 2
                        1

        input  getInvertedHalfPyramidPattern(4),getInvertedHalfPyramidPattern(4,true)
         output        
                  * * * *
                    * * *
                      * *
                        *           
                 
        input   getInvertedHalfPyramidPattern(4,false)
        output        
                  1 2 3 4
                    1 2 3
                      1 2
                        1
*/


function getInvertedHalfPyramidPattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;
        for(let space=0;space<currentRow;space++){
          answer+="  ";
        }
        for(let currentCol=0;currentCol<row-currentRow;currentCol++)
        {
            answer+=" "+count;
            if(!isStar)
            count++
        }
        answer+="\n"
    }
   return answer;
}



console.log(getInvertedHalfPyramidPattern(5));
console.log(getInvertedHalfPyramidPattern(5,false));
console.log(getInvertedHalfPyramidPattern(4,true));
console.log(getInvertedHalfPyramidPattern(4,false));
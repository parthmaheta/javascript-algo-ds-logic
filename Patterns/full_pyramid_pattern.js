/*
 javascript function to get Inverted Full Pyramid In * (STAR) or number pattern

 example :  
        input  getInvertedFullPyramidPattern(5),getInvertedFullPyramidPattern(5,true)
        output       
                        * * * * *
                         * * * *
                          * * *
                           * *
                            *
        
        input  getInvertedFullPyramidPattern(5,false)
        output      
                            1 2 3 4 5
                             1 2 3 4
                              1 2 3
                               1 2
                                1

        input  getInvertedFullPyramidPattern(4),getInvertedFullPyramidPattern(4,true)
         output        
                            * * * *
                             * * *
                              * *  
                               *           
         
        input   getInvertedFullPyramidPattern(4,false)
        output        
                            1 2 3 4
                             1 2 3
                              1 2
                               1
*/


function getInvertedFullPyramidPattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;
        for(let space=0;space<currentRow;space++){
          answer+="  ";
        }
        for(let currentCol=row;currentCol>currentRow;currentCol--)
        {
            answer+="   "+count;
            if(!isStar)
            count++
        }
        answer+="\n"
    }
   return answer;
}



console.log(getInvertedFullPyramidPattern(5));
console.log(getInvertedFullPyramidPattern(5,false));
console.log(getInvertedFullPyramidPattern(4,true));
console.log(getInvertedFullPyramidPattern(4,false));
/*
 javascript function to get Full Pyramid In * (STAR) or number pattern

 example :  
        input  getFullPyramidPattern(5),getFullPyramidPattern(5,true)
        output       
                                *
                               * *
                              * * *
                             * * * *
                            * * * * *
        
        input  getFullPyramidPattern(5,false)
        output      
                                1
                               1 2
                              1 2 3
                             1 2 3 4
                            1 2 3 4 5

        input  getFullPyramidPattern(4),getFullPyramidPattern(4,true)
         output        
                                 *           
                                * *  
                               * * *
                              * * * *
         
        input   getFullPyramidPattern(4,false)
        output        
                                1
                               1 2
                              1 2 3
                             1 2 3 4
*/


function getFullPyramidPattern(row,isStar=true){
  let answer="";
  for(let currentRow=0;currentRow<row;currentRow++){
      let count=isStar ? "*": 1;
      for(let space=row;space>currentRow;space--){
        answer+="  ";
      }
      for(let currentCol=0;currentCol<=currentRow;currentCol++)
      {
          answer+="   "+count;
          if(!isStar)
          count++
      }
      answer+="\n"
  }
 return answer;
}



console.log(getFullPyramidPattern(5));
console.log(getFullPyramidPattern(5,false));
console.log(getFullPyramidPattern(4,true));
console.log(getFullPyramidPattern(4,false));
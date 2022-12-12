/*
 javascript function to get Solid (full) Diamond Pattern In * (STAR) or number pattern

 example :  
        input  getSolidDiamondPattern(5),getSolidDiamondPattern(5,true)
        output       
                            * 
                           * *
                          * * * 
                         * * * * 
                        * * * * *
                         * * * * 
                          * * * 
                           * *
                            * 
        
        input  getSolidDiamondPattern(5,false)
        output      
                             1 
                            1 2 
                           1 2 3 
                          1 2 3 4
                         1 2 3 4 5
                          1 2 3 4 
                           1 2 3 
                            1 2 
                             1 

        input  getSolidDiamondPattern(4),getSolidDiamondPattern(4,true)
         output        
                             * 
                            * * 
                           * * * 
                          * * * *
                           * * * 
                            * * 
                             * 
         
        input   getSolidDiamondPattern(4,false)
        output        
                             1 
                            1 2 
                           1 2 3 
                          1 2 3 4
                           1 2 3 
                            1 2 
                             1 
*/


function getSolidDiamondPattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;

        for(let space=0;space<row-currentRow;space++){
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
    for(let currentRow=1;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;

        for(let space=0;space<=currentRow;space++){
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



console.log(getSolidDiamondPattern(5));
console.log(getSolidDiamondPattern(5,false));
console.log(getSolidDiamondPattern(4,true));
console.log(getSolidDiamondPattern(4,false));
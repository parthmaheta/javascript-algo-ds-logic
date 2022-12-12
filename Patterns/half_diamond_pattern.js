/*
 javascript function to get Half Diamond Pattern In * (STAR) or number pattern

 example :  
        input  getHalfDiamondPattern(5),getHalfDiamondPattern(5,true)
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
        
        input  getHalfDiamondPattern(5,false)
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

        input  getHalfDiamondPattern(4),getHalfDiamondPattern(4,true)
         output        
                            * 
                            * * 
                            * * * 
                            * * * *
                            * * * 
                            * * 
                            * 
         
        input   getHalfDiamondPattern(4,false)
        output        
                            1 
                            1 2 
                            1 2 3 
                            1 2 3 4
                            1 2 3 
                            1 2 
                            1 
*/


function getHalfDiamondPattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;
 
        for(let currentCol=0;currentCol<=currentRow;currentCol++)
        {
            answer+=" "+count;
            if(!isStar)
            count++
        }
        answer+="\n"
    }
    for(let currentRow=1;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;
 
        for(let currentCol=row;currentCol>currentRow;currentCol--)
        {
            answer+=" "+count;
            if(!isStar)
            count++
        }
        answer+="\n"
    }
   return answer;
}



console.log(getHalfDiamondPattern(5));
console.log(getHalfDiamondPattern(5,false));
console.log(getHalfDiamondPattern(4,true));
console.log(getHalfDiamondPattern(4,false));
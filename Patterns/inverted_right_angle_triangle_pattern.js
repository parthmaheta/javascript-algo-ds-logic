/*
 javascript function to get Inverted Right Angle Triangle In * (STAR) or number pattern

 example :  
        input  getInvertedRightAnglePattern(5),getInvertedRightAnglePattern(5,true)
        output       
                 * * * * *
                 * * * *
                 * * *
                 * *
                 *
        
        input  getInvertedRightAnglePattern(5,false)
        output 1 2 3 4 5
               1 2 3 4
               1 2 3
               1 2
               1

        input  getInvertedRightAnglePattern(4),getInvertedRightAnglePattern(4,true)
        output  * * * *
                * * *
                * *
                *   
                * 
        input   getInvertedRightAnglePattern(4,false)
        output  1 2 3 4
                1 2 3
                1 2
                1
*/


function getInvertedRightAnglePattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
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



console.log(getInvertedRightAnglePattern(5));
console.log(getInvertedRightAnglePattern(5,false));
console.log(getInvertedRightAnglePattern(4,true));
console.log(getInvertedRightAnglePattern(4,false));
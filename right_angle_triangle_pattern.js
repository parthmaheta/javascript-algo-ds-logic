/*
 javascript function to get Right Angle Triangle In * (STAR) or number pattern

 example :  
        input  getRightAnglePattern(5),getRightAnglePattern(5,true)
        output  *
                * *
                * * *
                * * * *
                * * * * *
        
        input  getRightAnglePattern(5,false)
        output  1
                1 2
                1 2 3
                1 2 3 4
                1 2 3 4 5

        input  getRightAnglePattern(4),getRightAnglePattern(4,true)
        output  *
                * *
                * * *
                * * * *
        
        input  getRightAnglePattern(4,false)
        output  1
                1 2
                1 2 3
                1 2 3 4
*/


function getRightAnglePattern(row,isStar=true){
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
   return answer;
}



console.log(getRightAnglePattern(5));
console.log(getRightAnglePattern(5,false));
console.log(getRightAnglePattern(4,true));
console.log(getRightAnglePattern(4,false));
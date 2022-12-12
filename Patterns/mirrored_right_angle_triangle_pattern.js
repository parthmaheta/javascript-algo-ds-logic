/*
 javascript function to get Mirrored Right Angle Triangle In * (STAR) or number pattern

 example :  
        input  getMirroredRightAnglePattern(5),getMirroredRightAnglePattern(5,true)
        output       
                        *
                      * *
                    * * *
                  * * * *
                * * * * *
        
        input  getMirroredRightAnglePattern(5,false)
        output         1
                     1 2
                   1 2 3
                 1 2 3 4
               1 2 3 4 5

        input  getMirroredRightAnglePattern(4),getMirroredRightAnglePattern(4,true)
         output        *           
                     * *
                   * * *
                 * * * *
                 
        input   getMirroredRightAnglePattern(4,false)
        output          1
                      1 2
                    1 2 3
                  1 2 3 4
*/


function getMirroredRightAnglePattern(row,isStar=true){
    let answer="";
    for(let currentRow=0;currentRow<row;currentRow++){
        let count=isStar ? "*": 1;
        for(let space=currentRow;space<row;space++){
          answer+="  ";
        }
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



console.log(getMirroredRightAnglePattern(5));
console.log(getMirroredRightAnglePattern(5,false));
console.log(getMirroredRightAnglePattern(4,true));
console.log(getMirroredRightAnglePattern(4,false));
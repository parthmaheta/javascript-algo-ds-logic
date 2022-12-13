/*
 javascript function to get combined inverted and mirrored right angle Pattern In * (STAR) or number pattern

 example :  
        input  getButterflyPattern(5),getButterflyPattern(5,true)
        output       
                        ***** *****
                         **** ****
                          *** *** 
                           ** **
                            * * 
        
        input  getButterflyPattern(5,false)
        output        1 2 3 4 5 26 27 28 29 30
                        6 7 8 9 22 23 24 25
                       10 11 12 19 20 21
                          13 14 17 18
                             15 16                       

        input  getButterflyPattern(4),getButterflyPattern(4,true)
         output        
                       ****** ******
                        ***** *****
                         **** ****
                          *** *** 
                           ** **
                            * * 
        input   getButterflyPattern(4,false)
        output          
                        1 2 3 4  17 18 19 20
                          5 6 7  14 15 16
                            8 9  12 13   
                             10  11  
                                   
*/

function getButterflyPattern(row, isStar = true) {
    let answer="";
    let count=isStar?"*":1;
    for(let currentRow=0;currentRow<row;currentRow++){
        for (let space = 0; space < currentRow; space++) {
            answer+="  "
         }
        for (let currentCol = 0; currentCol < row-currentRow; currentCol++) {
            answer+=" "+count
            if(!isStar)
            count++;
        }
        answer+=" ";
        for (let currentCol = 0; currentCol < row-currentRow; currentCol++) {
            if(!isStar)
           answer+=" "+(((row*(row+1))-(count-2))+currentCol)
           else
           answer+=" *";
        }
        answer+="\n";
    }

    return answer;
}

console.log(getButterflyPattern(5));
console.log(getButterflyPattern(5, false));
console.log(getButterflyPattern(4, true));
console.log(getButterflyPattern(4, false));
console.log(getButterflyPattern(3, false));
console.log(getButterflyPattern(8, false));

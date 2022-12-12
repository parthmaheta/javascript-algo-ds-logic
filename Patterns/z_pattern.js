/*  return String in Z Pattern
    1 2 3 4 5  
          6
        7
      8  
    9 10 11 12 13    

  example 
     1.
      input ZPattern(5),ZPattern(5,true)
      output   1 2 3 4 5
                     6
                   7
                 8
               9 10 11 12 13

     2.
       input      ZPattern(5,false)
       output    * * * * *
                       *
                     *
                   *
                 * * * * *

                  

*/
function ZPattern(col,isStar=true) {
  let answer = "";
  count = isStar ? "*" :1;
  for (let row = 1; row <= col; row++) {
    //if row is first or last print without space
    if (row == 1 || row == col) {
      for (let i = 0; i < col; i++) {
        answer += " " + count;
        if(!isStar)
        count++;
      }
    }
    else{
      for(let i=0;i<col-row;i++){
        answer+="  ";
      }
      answer+=" "+count;
      if(!isStar)
      count++;
    }
    answer+="\n"
  }
  return answer;
}

console.log(ZPattern(5));
console.log(ZPattern(3));
console.log(ZPattern(8));
console.log(ZPattern(4,false));

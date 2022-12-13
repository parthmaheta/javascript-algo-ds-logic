/*
 javascript function to get Pascal's Triangle

 example :  
        input  getPascalTrianglePattern(5)
        output         1                     
                      1 1
                     1 2 1
                    1 3 3 1
                   1 4 6 4 1
                  1 5 10 10 5 1
        
        
        input  getPascalTrianglePattern(6)
        output         1                     
                      1 1
                     1 2 1
                    1 3 3 1
                   1 4 6 4 1
                  1 5 10 10 5 1
                 1 6 15 20 15 6 1
       

*/


function getPascalTrianglePattern(row){
    let answer="";
    for(let currentRow=0;currentRow<=row;currentRow++){
        
        for(let space=0;space<row-currentRow;space++){
          answer+=" ";
        }
        for(let col=0;col<=currentRow;col++){
            answer+=" "+getNcR(currentRow,col)
        }
        
        answer+="\n"
    }
   return answer;
}

function getNcR(n,r){
   

   let nFact=factorial(n)
   let rFact=factorial(r)
   return nFact/(factorial(n-r)*rFact);
}

function factorial(n){
    if(n<=1)
    return 1;
    return n*factorial(n-1);
}

console.log(getPascalTrianglePattern(5));
console.log(getPascalTrianglePattern(4));
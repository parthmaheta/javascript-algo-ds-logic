/*
 javascript function to get Spiral Pattern  

 example :  
        input  getSpiralPattern(5)
        output 
                  1  2  3  4 5
                 16 17 18  19 6
                 15 24 25  20 7     
                 14 23 22 21 8
                 13 12 11 10 9           
                        
                        
*/
function isSafe(top, left, bottom, right) {
  if (left > right) return false;
  if (top > bottom) return false;

  return true;
}

function isSafe(top,  bottom,left,right) {
  if (top > bottom || left > right) return false;
  return true;
}

function getSpiralPattern(row) {
  let left = 0;
  let right = row - 1;
  let top = 0;
  let bottom = row - 1;
  let answer = Array(row)
    .fill(0)
    .map((x) => Array(row).fill(0));
  let count = 1;
  while (isSafe(top,bottom,left,right)) {
    for (let i = top; i <= right&&(isSafe(top,bottom,left,right)); i++) {
      answer[top][i] = count;
      count++;
    }
    top++;
    for (let i = top; i <= bottom&&(isSafe(top,bottom,left,right)); i++) {
      answer[i][right] = count;
      count++;
    }
    right--;

    for (let i = right; i >= left&&(isSafe(top,bottom,left,right)); i--) {
      answer[bottom][i] = count;
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top&&(isSafe(top,bottom,left,right)); i--) {
      answer[i][left] = count;
      count++;
    }
    left++;
  }

  return answer;
}

console.log(getSpiralPattern(5));
console.log(getSpiralPattern(4));

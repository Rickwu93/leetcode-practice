/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0


*/

var countNegatives = function (grid) {
  let negativeNum = 0; //add a counter to count the negatives

  for (let i = 0; i < grid.length; i++) {
    let currentNum = 0;
    while (currentNum < grid[i].length) {
      if (grid[i][currentNum] < 0) {
        negativeNum++;
      }
      currentNum++;
    }
  }
  return negativeNum;
};


const countNegatives = (grid) => {
    let negativeNum = 0
    for(let i of grid){
        for(let j of i){
            if(j<0)negativeNum++
        }
    }
    return negativeNum
    
    };
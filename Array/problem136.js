/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. 

eg1. 
Input: nums = [2,2,1]
Output: 1

eg2.
Input: nums = [4,1,2,1,2]
Output: 4

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

var singleNumber = function(nums) {
    //start with counter to keep track of instances
    let counter = 0;
    
    //iterate through the entire array of i
    for(let i = 0; i < nums.length; i++) {
        counter = nums[i]
    }
    return counter
};
/* 
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

eg1. 
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

eg2.
Input: nums = [2,3]
Output: [2,3]

*/

var sortArrayByParityII = function(nums) {
    let even = [];
    let odd = [];
    let output = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            even.push(num)
        }
        else {
            odd.push(num)
        }
    }

    for (let i = 0; i < even.length; i++) {
        output.push(even[i], odd[i]);
    }
    return output
};



/* 
LeetCode 58. Length of Last Word

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

eg1. 
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

eg2. 
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

*/

var plusOne = function(digits) {
    //basic iteration backward for the array 
    //add 1 for digits [1 - 8]
    //if digit is 9 we incremeant 9 + 1 and return [1, 0]
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }
    }
    //return back destructured array with 1, rest of the integer value
    return [1, ...digits];
};
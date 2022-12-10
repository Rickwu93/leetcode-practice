/*
https://leetcode.com/problems/maximum-product-of-three-numbers/
628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

eg1.  Input: nums = [1,2,3]
Output: 6

eg2. Input: nums = [1,2,3,4]
Output: 24

eg3.
Input: nums = [-1,-2,-3]
Output: -6
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const maximumProduct = (nums) => {
    //sort out the numbers from high to low
	nums.sort((a, b) => b - a);
    //multiply the three values
	return Math.max(
		nums[0] * nums[1] * nums[2],
		nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
	);
};
/* 
https://leetcode.com/problems/same-tree/
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

eg1.
Input: p = [1,2,3], q = [1,2,3]
Output: true

eg2.
Input: p = [1,2], q = [1,null,2]
Output: false

eg3.
Input: p = [1,2,1], q = [1,1,2]
Output: false

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    //edge cases
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    //checks both sides of the trees are equal
    return isSameTree(p.left, q.left) && isSameTree(p.right,q.right);
};
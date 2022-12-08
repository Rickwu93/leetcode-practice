/*
404. Sum of Left Leaves
Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

eg1.
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

eg2.
Input: root = [1]
Output: 0
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
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    //create a sum variable for the counter
    let sum = 0;
    //make a helper function to search left nodes and add them 
    function search(root) {
        if(!root) { //base case
            return;
        }
        if (root.left) {
            if(!root.left.left && !root.left.right) { //isolate left ends then we want to add the left val
                sum += root.left.val;
            }
        }
        //using search helper function to go through the left and right root as part of helper
        search(root.left);
        search(root.right);
    }
    search(root); //search helper through entire root
    return sum;
};
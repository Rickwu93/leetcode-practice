/*
https://leetcode.com/problems/increasing-order-search-tree/
897. Increasing Order Search Tree

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

eg1.
Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

eg2.
Input: root = [5,1,7]
Output: [1,null,5,null,7]
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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    //create empty array 
    let arr = []
    //push values left/right root into array
    const getVal = (root) => {
        if(!root) return
        if(root.left) getVal(root.left)
        arr.push(root.val)
        if(root.right) getVal(root.right)
    }
    getVal(root)

    const buildTree = (arr) => {
        if (arr.length === 0) return null
        let tree = new TreeNode()
        tree.val = arr.shift()
        tree.right = buildTree(arr)
        return tree
    }
    return buildTree(arr)
};
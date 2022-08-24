/* 
Given the root of a binary tree, return the inorder traversal of its nodes' values.
eg1. 
Input: root = [1,null,2,3]
Output: [1,3,2]

eg2. 
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var inorderTraversal = function(root) {
    let tree = [];
    let res = [];
    
    while(tree.length !== 0 || root !== null) {
        while(root !== null) {
            tree.push(root);
            root = root.left
        }
        root = tree.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
"""
965. Univalued Binary Tree
https://leetcode.com/problems/univalued-binary-tree/

A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

Input: root = [1,1,1,1,1,null,1]
Output: true

Input: root = [2,2,2,5,2]
Output: false
"""

class Solution:
    def isUnivalTree(self, tree):
        if not tree:
            return True
        
        if tree.right: # checks right tree to compare root value is not the same as the right child
            if tree.val != tree.right.val:
                return False
        
        if tree.left: # checks left tree to compare root value is not the same as the right child
            if tree.val != tree.left.val:
                return False

        return self.isUnivalTree(tree.right) and self.isUniversalTree(tree.left)
  
"""
144. Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' values.


eg1. Input: root = [1,null,2,3]
Output: [1,2,3]

eg2. Input: root = []
Output: []

eg3. Input: root = [1]
Output: [1]

https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/855339177/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        return [] if not root else [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right)
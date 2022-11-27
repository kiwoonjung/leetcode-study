# 104. Maximum Depth of Binary Tree

>Problem link: https://leetcode.com/problems/maximum-depth-of-binary-tree/  
>submission detail: https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/847191775/  

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```
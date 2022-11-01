"""
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
"""

class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p1=head
        p2=head
        print('before',p1)
        print('before', p2)
        while p2!=None and p2.next!=None:
            p1=p1.next
            p2=p2.next.next
            print('after', p1)
            print('after', p2)
        return p1
        
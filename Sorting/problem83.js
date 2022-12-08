/*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

eg1. Input: head = [1,1,2]
Output: [1,2]

eg2. Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    //base case
    if(!head) return head
    //variable for changing head value to next if value in list the same
    let current = head
    //always runs unless  null
    while(current != null && current.next != null) {
        //if first value is the same as next value, we want to skip that value and go next-next, else we keep the next value(only if different)
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
};
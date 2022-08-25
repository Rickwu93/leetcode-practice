/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

eg1. 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

eg2. 
Input: head = [1,2]
Output: [2,1]
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
 var reverseList = function(head) {
    //starting at null value
    let prev = null
    //switching positions
    while(head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
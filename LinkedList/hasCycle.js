/*
 Given a linked list, determine if it has a cycle in it.

 Follow up:
 Can you solve it without using extra space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//this is a CAR solution
//FASTER and SLOWER cars
let hasCycle = function(head) {
    if(head == null) return false;
    let fast = head.next;
    let slow = head;
    while(fast != null && slow != null && fast.next != null)
    {
        if(fast == slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};
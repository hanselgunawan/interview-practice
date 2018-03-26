/*
 Given a singly linked list, determine if it is a palindrome.

 Follow up:
 Could you do it in O(n) time and O(1) space?
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

function findMiddlePalindrome(fast,slow)
{
    while(fast != null && fast.next != null)
    {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast != null) slow = slow.next;
    return {fast,slow};
}

function reverseList(midHead,slow)
{
    let temp;
    midHead = slow;//treat slow as a 'curr' variable
    while(slow.next!=null)
    {
        //change the direction of the right-half list
        temp = slow.next.next;
        slow.next.next = midHead;
        midHead = slow.next;
        slow.next = temp;
    }
    return midHead;
}

function compareTwoSubList(head, midHead)
{
    while(midHead != null && head != null)
    {
        if(head.val != midHead.val) return false;
        head = head.next;
        midHead = midHead.next;
    }
    return true;
}

let isPalindrome = function(head) {
    let fast_ = head;
    let slow_ = head;
    let midHead;

    if(head == null) return true;//if there's NO node
    if(head.next == null) return true;//if there's only ONE node

    //find the middle of the palindrome
    let {fast,slow} = findMiddlePalindrome(fast_,slow_);

    //reverse the right half
    midHead = reverseList(midHead,slow);

    //compare two sub-list, should be the same!
    return compareTwoSubList(head, midHead);
};
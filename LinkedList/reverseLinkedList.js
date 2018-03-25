/**
 * Created by hansel.tritama on 3/24/18.
 */
//Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    let curr = head;
    while(curr !== null && curr.next !== null)
    {
        let temp = curr.next.next;//we store the arrow of the next object. For example: A -> B -> C, we store A -> B (->) C this arrow
        curr.next.next = head;//B doesn't have the arrow anymore, make it points to A (the head)
        head = curr.next;//move A to the middle (the B)
        curr.next = temp;//curr in this context = the head (si A)
    }
    return head;
};
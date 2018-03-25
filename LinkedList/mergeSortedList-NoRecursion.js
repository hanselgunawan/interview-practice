/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let head;
    let newList;

    if(list1==null) return list2;
    if(list2==null) return list1;

    if(list1 && list2)
    {
        if(list1.val <= list2.data)
        {
            head = list1;
            list1 = head.next;
        }
        else
        {
            head = list2;
            list2 = head.next;
        }
    }
    newList = head;//to find the starting point. List1 ato List2 dulu ya?

    while(list1 && list2)
    {
        if(list1.val <= list2.val)
        {
            head.next = list1;
            head = list1;
            list1 = head.next;
        }
        else
        {
            head.next = list2;
            head = list2;
            list2 = head.next;
        }
    }
    if(list1==null) head.next = list2;
    if(list2==null) head.next = list1;

    return newList;
};
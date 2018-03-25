/**
 * Created by hansel.tritama on 3/24/18.
 */
function midLinkedList(head)
{
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null)
    {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast == null)//EVEN Linked List
    {
        slow = slow.next;
        return slow;
    }
    else//ODD Linked List
    {
        return slow;//when FAST reach the end of the linked list, SLOW will be at the MIDDLE of LINKED LIST
    }
}
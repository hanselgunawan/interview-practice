/* Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space? */

// SOLUTION 1

class Solution {
    public boolean isPalindrome(ListNode head) {
        
        List<Integer> myList = new ArrayList<Integer>();
        int count = 0;
        int tail = 0;
        
        while(head != null) {
            
            myList.add(head.val);
            head = head.next;
            count++;
            
        }
        
        tail = count;
        
        for(int i = 0; i < count / 2; i++) {
            
            if(!myList.get(i).equals(myList.get(tail - 1))) return false;
            tail--;
            
        }
        
        return true;
        
    }
}

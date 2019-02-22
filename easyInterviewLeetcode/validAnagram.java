// SOLUTION 1: Char Elimination

class Solution {
    public boolean isAnagram(String s, String t) {
        
        if(s.length() != t.length()) return false;
        
        StringBuilder sb = new StringBuilder(t);
        
        for(int i = 0; i < s.length(); i++) {
            
            if(sb.indexOf(String.valueOf(s.charAt(i))) != -1) {
                
                sb.deleteCharAt(sb.indexOf(String.valueOf(s.charAt(i))));
                
                
            } else {
                
                return false;
                
            }
            
        }
        
        return true;
    }
}

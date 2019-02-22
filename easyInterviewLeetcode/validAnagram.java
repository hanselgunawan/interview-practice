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

// SOLUTION 2: HashMap

class Solution {
    public boolean isAnagram(String s, String t) {
        
        if(s.length() != t.length()) return false;
        
        Map<Character, Integer> map1 = new HashMap<Character, Integer>();
        Map<Character, Integer> map2 = new HashMap<Character, Integer>();
        
        for(int i = 0; i < s.length(); i++) {
            
            if(!map1.containsKey(s.charAt(i))) {
                
                map1.put(s.charAt(i), 1);
                
            } else {
                
                int count = map1.get(s.charAt(i));
                map1.put(s.charAt(i), count + 1);
                
            }
            
        }
        
        for(int j = 0; j < t.length(); j++) {
            
            if(!map2.containsKey(t.charAt(j))) {
                
                map2.put(t.charAt(j), 1);
                
            } else {
                
                int count = map2.get(t.charAt(j));
                map2.put(t.charAt(j), count + 1);
                
            }
            
        }
        
        for(Map.Entry<Character, Integer> entry : map1.entrySet()) {
            
            if(map2.containsKey(entry.getKey())) {
                
                if(map2.get(entry.getKey()) != entry.getValue()) return false;
                
            } else {
                
                return false;
                
            }
            
        }
        
        return true;
    }
}

// SOLUTION 3: Sort

class Solution {
    public boolean isAnagram(String s, String t) {
        
        if(s.length() != t.length()) return false;
        
        // convert String to Char array
        char[] s2 = s.toCharArray();
        char[] t2 = t.toCharArray();
        
        // sort the array
        Arrays.sort(s2);
        Arrays.sort(t2);
        
        // compare if 2 arrays are equal
        return Arrays.equals(s2,t2);
        
    }
}

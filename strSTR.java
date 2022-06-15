class Solution {
    public int strStr(String haystack, String needle) {
        if (!haystack.contains(needle)) {
            return -1;
        }
        else {
            for(int i=0; i<haystack.length(); i++) {
                return haystack.indexOf(needle);
            }
            return -1;
        }
    }
}
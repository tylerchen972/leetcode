class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 1) {
            return strs[0];
        }
        String common = strs[0];
        String sol = "";
        int j = 0;
        for(int i=1; i<strs.length; i++) {
            while(j<strs[i].length() && j< common.length() && common.charAt(j) == strs[i].charAt(j)) {
                sol += strs[i].charAt(j);
                    j++;
            }
            common=sol;
            sol ="";
            j=0;
        }
        return common;
    }
}
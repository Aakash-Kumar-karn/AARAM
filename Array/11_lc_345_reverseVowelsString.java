class Solution {
    public String reverseVowels(String s) {
          
        StringBuilder sb = new StringBuilder(s);
        int i = 0 ; 
        int j = sb.length()-1;
        String check = "aeiouAEIOU";
        while(i<j){
            while(i<j && check.indexOf(sb.charAt(i))==-1){
                i++;
            }
             while(i<j && check.indexOf(sb.charAt(j))==-1){
                j--;
            }
            char temp = sb.charAt(i);
            sb.setCharAt(i,sb.charAt(j));
            sb.setCharAt(j,temp);
            i++;
            j--;
        }
        return sb.toString();
    }
}
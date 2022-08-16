
class Solution {
    public List<Integer> partitionLabels(String s) {
        int []map = new int[26];
        Arrays.fill(map,-1);
        for(int i = 0 ; i< s.length() ; i++){
          char ch = s.charAt(i);
            map[ch-'a']=i;
        }
        
        int st  =0 ;
        int ed  =0;
        
        ArrayList<Integer> ans = new ArrayList<>();
         for(int i = 0 ; i< s.length() ; i++){
          char ch = s.charAt(i);
            ed  = Math.max(ed, map[ch-'a']);
        
        if(i==ed){
            int len  = ed-st+1;
            ans.add(len);
            ed = st = i+1;
        }
    }
        return ans;
}
}
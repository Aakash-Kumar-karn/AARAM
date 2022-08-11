class Solution {
    public int[] sortedSquares(int[] nums) {
        
        int []ans = new int[nums.length];
        int i = 0 ;
        int j = nums.length-1;
        int k = nums.length-1;
        while(i<=j){
            int a = nums[i];
            int b = nums[j];
            
            int c = Math.max(a*a ,b*b);
            
            ans[k]=c;
            k--;
            if(a*a>=b*b){
                i++;
            }else{
                j--;
            }
        }
        return ans;
    }
}
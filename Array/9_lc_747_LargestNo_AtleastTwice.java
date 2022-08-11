class Solution {
    public int dominantIndex(int[] nums) {
      
        int max = Integer.MIN_VALUE;
       
        for(int i = 0 ; i< nums.length ; i++){
            max= Math.max(max,nums[i]);
        }
        
        int smax =  Integer.MIN_VALUE;
        for(int i = 0 ; i< nums.length ; i++){
            
            if(nums[i] != max){
                 smax= Math.max(smax,nums[i]);
            }
           
        }
        
        int ans = 0;
        if(2*smax<=max){
            for(int i = 0 ; i < nums.length ; i++){
                if(max==nums[i]){
                    ans= i;
                }
            }
        }else{
            ans =-1;
        }
            return ans;
        
    }
}
/*
  class Solution {
    public int dominantIndex(int[] nums) {
        int idx1 = -1;
        int idx2 = -1;
        
        for(int i = 0; i < nums.length; i++){
            if(idx1 == -1 || nums[i] >= nums[idx1]){
                idx2 = idx1;
                idx1 = i;
            } else if(idx2 == -1 || nums[i] >= nums[idx2]){
                 idx2 = i;
            }
        }
        
        if(nums[idx1] >= 2 * nums[idx2]){
            return idx1;
        } else {
            return -1;
        } 
    }
}
 */
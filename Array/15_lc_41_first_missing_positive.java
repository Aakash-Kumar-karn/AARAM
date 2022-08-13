class Solution {
    public int firstMissingPositive(int[] nums) {
   int j=0;
    while(j<nums.length){
        if(nums[j]<=0 || nums[j]>nums.length){
            nums[j]=nums.length+1;
        }
         j++;;
    }
        
        for(int i=0;i<nums.length ; i++){
            int val = Math.abs(nums[i]);
            if(val<=nums.length){
            int idx = val-1;
            
            if(nums[idx]>0){
                nums[idx]= -1*nums[idx];
            }
        }
        }
        
            for(int i=0;i<nums.length ;i++){
                if(nums[i]>0){
                    return i+1;
                }
            }
        return nums.length+1;
    }
}

/*
 * class Solution {
    public int firstMissingPositive(int[] nums) {
    boolean []arr = new boolean[nums.length];
        int i = 0 ;
        
        while(i<nums.length){
            if(nums[i]<=0 || nums[i]>nums.length){
                i++;
            }else{
                arr[nums[i]-1]= true;
                i++;
            }
        }
        int ans=0;
        int c=0;
        for(int j = 0; j< arr.length ; j++){
            if(arr[j]!=true){
                ans=j;
                c++;
                break;
            }
            if(c==0){
                ans=arr.length;
            }
        }
        return ans+1;
    }
}
 */
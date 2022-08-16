// class Solution {
//     public int partitionDisjoint(int[] nums) {
//         int n = nums.length ;
//         int []left = new int[nums.length];
//         int []right = new int[nums.length];
        
//         for(int i = 0 ; i< n ; i++){
//             if(i==0){
//                 left[i]=nums[i];
//             }else{
//                   left[i] = Math.max(nums[i],left[i-1]);
//             } 
//         }
        
//         for(int i = n-1 ; i>=0 ; i--){
//             if(i==n-1){
//                 right[i]=nums[i];
//             }else{
//                 right[i]=Math.min(nums[i],right[i+1]);
//             }
//         }
//         int ans = 0;
//         for(int i = 0 ;i<n ;i++){
//             if(left[i]<=right[i+1]){
//                 ans=i+1;
//                 break;
//             }
//         }
//         return ans;
//     }
// }

class Solution {
    public int partitionDisjoint(int[] nums) {
        int n = nums.length ;
       
        int pi = 0;
        int mts = nums[0];
        int mtp = nums[0];
        
        for(int i = 0 ; i< n ; i++){
            mts = Math.max(mts,nums[i]);
            
            if(nums[i]<mtp){
                pi=i;
                mtp=mts;
            }
        }
        return pi+1;
    }
}
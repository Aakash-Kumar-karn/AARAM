class Solution {
    public void swap(int [] arr , int i, int j){
        int temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    public int[] sortArrayByParity(int[] nums) {
        //int []ans = new int[nums.length];
        int j = 0 ;
        int i = 0;
         while(i<nums.length){
             if(nums[i]%2!=0){
                 i++;
             }else{
                 swap(nums,i,j);
                 i++;
                 j++;
             }
         }
        return nums;
        
    }
}
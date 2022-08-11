class Solution {
    public int minMoves2(int[] nums) {
        int i = 0 ;
        int j = nums.length-1;
        Arrays.sort(nums);
        int sum = 0;
        while(i<=j){
         sum += nums[j]-nums[i];
            i++;
            j--;
        }
        return sum;
    }
}
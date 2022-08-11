class Solution {
    public int maxChunksToSorted(int[] arr) {
        
        int []mfr = new int[arr.length];
        mfr[arr.length-1] = arr[arr.length-1];
        
        for(int i = arr.length-2 ; i>=0 ; i--){
            mfr[i]=Math.min(mfr[i+1],arr[i]);
        }
        int res = 0 ;
        int max = Integer.MIN_VALUE;
        
        for(int i = 0  ; i< arr.length -1; i++){
            max=Math.max(max,arr[i]);
            if(max<=mfr[i+1]){
                res++;
            }
        }
        return res+1;
    }
}
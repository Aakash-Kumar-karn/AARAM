
class Solution {
    boolean hasArrayTwoCandidates(int arr[], int n, int x) {
       Arrays.sort(arr);
       
       int i = 0;
       int j = arr.length -1;
       
       while(i<j){
           int val = arr[i]+arr[j];
           
           if(val>x){
               j--;
           }else if(val<x){
               i++;
           }else if(val==x){
               return true;
           }
       }
       return false;
    }
}
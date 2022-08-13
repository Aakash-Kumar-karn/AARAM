class Solution
{
    public boolean findPair(int arr[], int size, int tar)
    {
         Arrays.sort(arr);
       
       int j = 0;
       int i = j+1 ;
       
       while(j<arr.length && i<arr.length){
           if(arr[i]-arr[j]<tar){
               i++;
           }else if(arr[i]-arr[j] > tar){
               j++;
           }
          else if(i==j){
              i++;
           }
           else if(arr[i]-arr[j]==tar){
               return true;
           }
       }
       return false;
    }
}
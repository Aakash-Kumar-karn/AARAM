class Solution {
    public int numRescueBoats(int[] people, int limit) {
        
        Arrays.sort(people);
        int i =0;
        int j = people.length -1 ; 
        int count = 0;
        while(i<=j){
            int val=people[i]+people[j] ;
            if(val > limit){
                j--;
                count++;
            }else if(people[i]+people[j] <= limit){
                i++;
                j--;
                count++;
            }
        }
        return count;
    }
}
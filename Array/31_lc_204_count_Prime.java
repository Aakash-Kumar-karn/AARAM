class Solution {
    public int countPrimes(int N) {
      if(N<2){
            return 0;
        }
        int ans = 0;
        Boolean []Prime = new Boolean[N+1];
        
        Arrays.fill(Prime, true);
        Prime[0]=false;
        Prime[1]=false;
        
        
        for(int tbl=2 ; tbl*tbl<=N ; tbl++){
            if(Prime[tbl]==false){
                continue;
            }
            
            for(int ja = tbl; tbl * ja <= N; ja++){
                Prime[tbl * ja] = false;
            }
        }
        int count =0 ;
        for(int i =0 ; i< Prime.length -1; i++){
            if(Prime[i]==true){
               ans++;
            }
        }
        
        
        return ans;
    }
}
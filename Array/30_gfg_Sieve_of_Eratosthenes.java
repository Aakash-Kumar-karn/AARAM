class Solution{
    static ArrayList<Integer> sieveOfEratosthenes(int N){
        // code here
        
        if(N<2){
            ArrayList<Integer> ans = new ArrayList<Integer>();
            return ans;
        }
        ArrayList<Integer> Rans = new ArrayList<Integer>();
        Boolean []Prime = new Boolean[N+1];
        // for(int i=0; i< Prime.length ;i++){
        //     Prime[i]=true;
        // }
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
        for(int i =0 ; i< Prime.length ; i++){
            if(Prime[i]==true){
               Rans.add(i);
            }
        }
        
        
        return Rans;
    }
}
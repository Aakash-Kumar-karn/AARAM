import java.io.*;
import java.util.*;

public class Main {

	public static int solution(int []price , int []cont ,int k){
		int max=0;
	for(int i = 0; i< price.length ; i++){
	    for(int j = i+1 ; j < cont.length ; j++){
	        int sum =0 ;
	   
	        if(price[i]+price[j]<k || price[i] ){
	            sum += cont[i]+cont[j];
	            max = Math.max(sum,max);
	        }
	    }
	}
	return max;
	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		int k = scn.nextInt();
	    int []price = new int[n];
	    
	    for(int i = 0 ; i< n ; i++){
	        price[i] =scn.nextInt();
	    }
	    int []cont = new int[n];
	    for(int i = 0 ; i< n ; i++){
	        cont[i] =scn.nextInt();
	    }
	    int ans  = solution(price , cont ,k);
	    System.out.println(ans);
	}

}
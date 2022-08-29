import java.io.*;
import java.util.*;

public class Main {

	public static int solution(int []arr , int k){
		
	int sum = 0; 
	int c= 0;
	int maxC=0 ;
	for(int i = 0 ; i< arr.length ; i++){
	    
	    sum += arr[i] ;
	    
	    if(sum<k){
	      c++;
	      maxC= Math.max(c,maxC);
	    }else if(sum >=k){
	        sum=arr[i];
	        c=1;
	    }
	}
	return maxC;
	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		int k = scn.nextInt();
	    int []arr = new int[n];
	    for(int i = 0 ; i< n ; i++){
	        arr[i] =scn.nextInt();
	    }
	    
	    int ans  = solution(arr , k);
	    System.out.println(ans);
	}

}
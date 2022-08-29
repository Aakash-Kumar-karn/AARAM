import java.io.*;
import java.util.*;

public class Main {

	public static void solution(String str1 , String str2 ){
		
		if(str1.length() != str2.length()){
		    System.out.println("No");
		    return;
		}
		
		int cs1 =0 ;
		int cs0 =0 ;
		 for(int i =0 ; i< str1.length() ; i++){
		     if(str1.charAt(i)=='1'){
		         cs1++;
		     }else{
		         cs0++;
		     }
		 }
		int cs1n =0 ;
		int cs0n =0 ;
		 for(int i =0 ; i< str2.length() ; i++){
		     if(str2.charAt(i)=='1'){
		         cs1n++;
		     }else{
		         cs0n++;
		     }
		 }
		 
		 if(cs0 == cs0n && cs1 == cs1n){
		     System.out.println("yes");
		 }else{
		      System.out.println("No");
		 }
	}

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		String str1 = scn.next();
		String str2 = scn.next();
		
		solution(str1 , str2 );
	}

}
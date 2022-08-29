import java.io.*;
import java.util.*;

public class Main {

	public static void solution(int []arr){
        import java.io.*;
        import java.util.*;
        
        public class Main {
        
            public static void solution(int []arr){
                
             int a = arr[0];
             int c=0;
             
             if(arr[0]==arr[arr.length-1]){
                 System.out.println(c);
                 return;
             }
             
             for(int i = 1 ; i< arr.length ; i++){
                  if(arr[i]!=a){
                     c++;
                 }
             }
             System.out.println(c);
            }
        
            public static void main(String[] args) {
                Scanner scn = new Scanner(System.in);
                int n = scn.nextInt();
                
                int []arr = new int[n];
                for(int i = 0 ; i< n ; i++){
                    arr[i] =scn.nextInt();
                }
                
                solution(arr);
            }
        
        }

function countVowel(s){
 var count = 0 ;
 var str = s.toString();
 for(var i = 0; i< str.length ; i++){
     if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u" || str.charAt(i)=="A" || str.charAt(i)=="E" || str.charAt(i)=="I" || str.charAt(i)=="O" || str.charAt(i)=="U"){
        count++;
     } 
    }
     return count;
}

console.log(countVowel("Countvowelsinastring"));

// var s = "habibi this is dubai";
// for(var i = 0; i< s.length ; i++)
// console.log(s.charAt(i))
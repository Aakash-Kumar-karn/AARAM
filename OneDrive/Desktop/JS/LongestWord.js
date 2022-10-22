//  //my way
//  var LongWord = (str)=>{
//     var count  = 0 ;
//     var max=0;
//     for(var i = 0 ; i< str.length ; i++){
//         if(str.charAt(i)== " "){
//             count=0;
//         }
//         count++;
//         max= Math.max(max,count);
//     }
//     return max;
//  }

//  console.log(LongWord("This is my firsti code JhoontTuosxm"));

// second way

function LongWord (str){
    var strsplit = str.split(" ");
    var lonword = 0;
    for(var i = 0 ; i< strsplit.length  ; i++){
        if(strsplit[i].length>lonword){
            lonword=strsplit[i].length;
        }
    }
    return lonword;
}

console.log(LongWord("This is my firsti code JhoontTuosxm"));
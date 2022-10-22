
// var countWord = (str) =>{
//     var count  = 0;
//     var s = str.split(" ");
//    for(var i = 0 ; i< s.length ; i++){
//     count++;
//    }
//    return count;
// }

// console.log(countWord("Aaaksh is my name and want to be devloper"));


var countWord = (str) =>{
    var count  = 1;
   // var s = str.split(" ");
   for(var i = 0 ; i< str.length ; i++){
    if(str[i] == " ")
    count++;
   }
   return count;
}

console.log(countWord("Aaaksh is my name and want to be devloper"));


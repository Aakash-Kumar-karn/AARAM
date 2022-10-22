//predefined method
// var a = "aaksh";
// console.log(a.length);
var countString = (str) =>{
     var count =0;
    for(var i= 0 ; i< str.length ; i++){
            count++;
    }
    return count;
}

console.log(countString("Aaaksh"));

console.log(countString("Aaaksh is good person"));
//1 way
// var str = "Jhonny";
// var s = str.split("");
// var r = s.reverse();
// var j = r.join("");
// console.log(j);

//2 way

// function revStr(str){
//     var s = str.split("");
//     var r = s.reverse();
//     var j = r.join("") ; 
//     return j;
// }

// console.log(revStr("myNameIsPAll"));

// 3way

// var revStr = (str) => {
//     var newStr = "";
//     for(var i = str.length-1 ; i>=0 ; i--){
//       newStr += str[i];
//     }
//     return newStr;
// }
// console.log(revStr("myNameIsPAll"));

function myFun(){
    location.href("https://www.youtube.com/watch?v=w_JJPt6wzJE&list=PL98MbIu3NiM2XZHdROMjfnJj_EW50EuXp&index=10");
}
<button onClick="myFun()"> Click here</button>
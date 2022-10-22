//recursion
// var fac = (n) => {
//     if(n==0){
//         return 1;
//     }
//     return n*fac(n-1);
// }

// console.log(fac(10));

//for loop

var fac = (n) =>{
    if(n==0 || n ==1){
        return 1;
    }
    for(var i = n-1 ; i>=1 ; i--){
        n *= i;
    }
    return n;
}
console.log(fac(10));
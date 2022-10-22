// sum of squar - squar of sum ;
function Result(n){
var sumOfsquare=()=>{
    var sum = 0;
    for(var i = 0 ; i<=n ; i++){
      sum += (i**2);
      //sum += Math.pow(i,2);
    }
    return sum;
}
var sqauareOfsum=()=>{
    var sum = 0;
    for(var i = 1; i<=n ; i++){
    sum += i;
    }
    return sum**2;
}
const ans = sqauareOfsum()-sumOfsquare();
return ans;
}
console.log(Result(10))
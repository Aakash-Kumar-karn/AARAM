
var alternatecaps=(str)=>{
    var s= str.toLowerCase().split("");
    for(var i= 0 ; i<str.length ; i=i+2){
       
        s[i]=s[i].toUpperCase();
    }
    return s.join("");
}

console.log(alternatecaps("jhoony"));
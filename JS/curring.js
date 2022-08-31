function add(x){
    return function (y){
        console.log(x+y)
    }
}

let addwith = add(2)
console.log(addwith);
addwith(3);
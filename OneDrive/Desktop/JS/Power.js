function Powerof(x){
    if(typeof x !== 'number'){
        return "not a number";
    }
    return x && (x & (x-1)) === 0;
}

console.log(Powerof(16));
console.log(Powerof(12));
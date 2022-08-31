//bind 

// let person1 = {
//     name : 'akash',
//     age : '45'
// }

// let showDetails = function(){
//     console.log(this.name + " " + this.age);
// }

// let showDetailsbind = showDetails.bind(person1);
// showDetailsbind();

//mybind made 
let person1 = {
    name : 'akash',
    age : '45'
}

let showDetails = function(city,state){
    console.log(this.name + " " + this.age + city + state) ;
}

Function.prototype.mybind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
    obj.apply(args[0],[...params,...args2])
    }
}
 
let showDetailsMybind = showDetails.mybind(person1,' noida')
showDetailsMybind(' up');

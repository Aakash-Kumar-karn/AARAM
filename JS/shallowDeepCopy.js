//shallow copy 
//spread operator

const { stringify } = require("querystring");

// let sports = ['cricket' , 'football' , 'volleyball', { a: 'abc' , b : 'def'}]

// let copysports = [...sports]

// copysports[1] = "baseball"
// copysports[1]['a']='ooo';

// console.log(sports);
// console.log(copysports)


//med-2
// let sports = ['cricket' , 'football' , 'volleyball', { a: 'abc' , b : 'def'}]

// //let copysports = Array.from(sports)
// let copysports = sports.slice(0)
// copysports[1] = "baseball"
// copysports[1]['a']='ooo';

// console.log(sports);
// console.log(copysports)
//deep

// let sports = ['cricket' , 'football' , 'volleyball', { a: 'abc' , b : 'def'}]


// let copysports = JSON.parse(JSON.stringify(sports))
// copysports[1] = "baseball"
// copysports[3]['a']='ooo';

// console.log(sports);
// console.log(copysports)

//shallow for obj 

let obj = {
   name : "akash",
   age : 45,
   hobbies : ["coding" , "books reading " , "dancing"]
}
 
//let obj2 = {...obj };
let obj2  = Object.assign({},obj)
obj2.name = "vikas";
obj2.hobbies[1]= "sleeping";

console.log(obj);
console.log(obj2);
//deep for obj  med-1
// let obj = {
//     name : "akash",
//     age : 45,
//     hobbies : ["coding" , "books reading " , "dancing"]
//  }
  
//  let obj2 = JSON.parse(JSON.stringify(obj))
 
//  obj2.name = "vikas";
//  obj2.hobbies[1]= "sleeping";
 
//  console.log(obj);
//  console.log(obj2);







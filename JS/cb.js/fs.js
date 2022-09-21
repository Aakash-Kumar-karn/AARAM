//const fs = require('fs')

let fs = require("fs")
console.log('Before');
fs.readFile("f1.txt", cb)

function cb(err,data){
if(err){
    console.log(err)
}else{
    console.log('hello' + data)
}
}

console.log('After')


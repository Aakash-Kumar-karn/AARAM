//const fs = require('fs')
const fs = require('fs');
console.log('Before');
fs.readFile('./')

function cb(err,data){
if(err){
    console.log(err)
}else{
    console.log('hello' + data)
}
}

console.log('After')
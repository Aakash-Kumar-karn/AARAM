
let counter = 0 ;
let invlid
function sayHi(){
    counter++
    console.log("hello breader")
    if(counter>=5){
        clearInterval(invlid)
    }
}

 invlid = setInterval(sayHi,2000)


///synchronus callBacks

// function temp(Pname , Page , cb1 ,cb2){

// let name = Pname ;
// let age = Page;

// cb1(Pname);
// cb2(Page);
// }

// function PrintName(Pername){
//     console.log(Pername)
// }
// function Printage(PerAge){
//     console.log(PerAge)
// }
// temp('akash' , 45 , PrintName, Printage)


// Asyn Call back


console.log("hello");

setTimeout(function st1(){
 console.log("hello st1");
},2000)


setTimeout(function st2(){
    console.log("hello st2");
   },1000)

function sayBye(){
    console.log("byee")
}

sayBye()
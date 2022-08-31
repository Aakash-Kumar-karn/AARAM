let person1 = {
    name: 'akash',
    age : 12,


showDetails : function(){
    console.log(this.name + ' is ' + this.age)
}
}

let person2 = {
    name: 'akash',
    age : 18,

}
//person1.showDetails()
//function borrowing
//call
person1.showDetails.call(person2)


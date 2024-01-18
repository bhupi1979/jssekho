const user={name:"bhupi",age:23,date1:new Date()}
console.log(user)
const sym=Symbol("key1")
const user1={
    name:"bhupi",
    "fullname":"bpaliwal",
    age:18,
    email:"bhupi@gmail.com",
    arr:[1,2,3,4],
    [sym]:"mybhupi"
}
console.log(user1.fullname)
//Object.freeze(user1)
user1.name="bhupendra paliwal"
//console.log(use
user1.greeting=function(){
    console.log("hello user")
}
console.log(user1.greeting())
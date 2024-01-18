const user3={
    name:"bbb",
    age:32,
    fullanme:{
        userfullanme:{
            firstname:"bhupi",
            lastname:"paliwal"
        }
    }
}
// console.log(user3.fullanme.userfullanme.lastname)
// console.log(user3.fullanme.userfullanme)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={...obj1,...obj2,...user3}
const obj4=Object.assign({},obj1,obj2)
//console.log(Object.keys(obj4))
//console.log(obj4)
console.log(obj3.fullanme.userfullanme.firstname)
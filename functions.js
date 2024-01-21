function addtwo(num1,num2){
    console.log(num1+parseInt(num2))
}
addtwo(2,"4")
function username(name1="bhupi"){
    
        return `${name1} user logged`
    
    
}
console.log(username("ramesj"))
function shownumber(val1,val2,...num1){
    return num1
}
console.log(shownumber(10,20,30,20,30,40))
const obj={
    name1:"bhupi",
    price:122
}
function showobj(obj={name1:"dddd"}){
console.log(obj)
}
showobj()

function one(){
    const username="bhupi"
     function two(){
        const webs="youtube"
        console.log(username)
     }
     two()
}
one()
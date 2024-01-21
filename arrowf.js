const b=(a,b)=>{
    return a+b
}
const b1=(a,b)=>a+b

console.log(b(4,4));
console.log(b1(8,4));
//immediately invoked  function expression
(function chai(name){
    console.log('db connected')
    console.log(`user name${name}`)
})("bhupi");
((name)=>{
    console.log('db connected')
    console.log(`user name${name}`)
})("bhupi3")
let val1=10
let val2=5
function addnum(n1,n2){
    let total=n1+n2
    return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,2)
//java script execution context
//(1)global execution context
//(2)function execution context
//(3)eval execution context
//memory phase creation
//execution phase
//fist cycle
//first global exectuiont
//this
//second cycle
//memory phase
//val val2 function defination result all are undefined
//third cycle
//execution phase
//val1=10 val2=5,
//addnum make anothe executio context new variable execution context and execution thread
//call stack
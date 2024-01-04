const arr1=[3,1,2,3,4,5]
let str=""
console.log(typeof arr1.join())
arr1.forEach((item)=>{
str+=item
})
console.log(str)
let mfind=arr1.find((item)=>
    (item==9)

         )
console.log(mfind)
//arr1.sort()
console.log(arr1)
console.log(arr1.slice(1,4))
console.log(arr1.splice(1,3))
//splice array changed
console.log(arr1)
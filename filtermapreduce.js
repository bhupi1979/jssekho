const arr1=[1,2,3,4,5,6,22,34]
arr1.map((item,key)=>{console.log(item,"-:",key)})
const arr2=arr1.filter((item)=>item<=6)
console.log(arr2)
const itemfind=arr1.find((item)=>(item===5))
console.log(itemfind)
let a={name1:"bhupendra",id:111}
const obj={
    "name":"bhupendra",
   ["price"]:222,
    [a.id]:234
}
console.log(obj[111])
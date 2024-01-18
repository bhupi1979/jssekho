const arr1=[1.2,3,4,5,6]
const arr2=[5,7.78,3,6]
//console.log(arr1.push(arr2))
//console.log(arr1[5][1])
let arr3=arr1.concat(arr2)
let arr4=[...arr1,...arr2]
// console.log(arr3)
// console.log(arr4)
const another_arr=[1,2,3,[2,3,4],5,6,[4,3,4,[5,6]],6,8]
const realarr=another_arr.flat(Infinity)
console.log(realarr)
console.log(Array.from("hitesh234$#"))
let score1=100
let score2=200
let name1="bhupi"
console.log(Array.of(score1,score2,name1))
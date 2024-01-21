const arr1=[1,2,3,4,5]
for (const iterator of arr1) {
    console.log(iterator)
}
const myobj={
    product:"pizza",
    price:233
}
for (const key in myobj) {
    if (Object.hasOwnProperty.call(myobj, key)) {
        const element = myobj[key];
        console.log(element)
    }
}
for (const key in arr1) {
    if (Object.hasOwnProperty.call(arr1, key)) {
        const element = arr1[key];
        console.log(element)
    }
}
const map=new Map()
map.set("in","india")
map.set("Us","united state of america")
// for (const [i,v] of map) {
//     console.log(i,v)
// }
arr1.forEach((item)=>
 console.log("foreach:-",item)
)
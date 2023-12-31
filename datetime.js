const d1=new Date()
console.log(d1.toJSON())
const options = { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const indianDate = new Intl.DateTimeFormat('en-IN', options).format(d1);

console.log(indianDate);
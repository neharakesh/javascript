const date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(typeof date) //it is an object
//let myCreatedDate=new Date(2024,0,23)
//console.log(myCreatedDate)
let myCreatedDate=new Date("01-14-2024")
console.log(myCreatedDate)

let myTimeStamp=Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime());

let newdate=new Date()
console.log(newdate.getMonth())
newDate.toLocaleString('default',{
    weekday:"long"
})
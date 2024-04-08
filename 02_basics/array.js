/*const arr=Array[0,1,2,3,4,5]
console.log(arr)
const myarr=new Array(1,2,3,4,5)
console.log(myarr[1])

//Array Methods
myarr.push(6)
myarr.pop()
myarr.unshift(9)
myarr.shift()
console.log(myarr)


const newarr=myarr.join()
console.log(newarr)
console.log(typeof newarr)

//slice and splice

console.log("A",myarr);
const myn1=myarr.slice(1,3)//does not manipulate array and does not includes last  value
console.log(myn1)

console.log("B",myarr)
const myn2=myarr.splice(1,3)//manipulate original array
console.log(myn2)

console.log("C",myarr)
console.log(myn2)
*/
//part 2
const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel.push(dc);
const allhero=marvel.concat(dc)
//console.log(allhero) 
const allnewhero=[...marvel,...dc]
//console.log(allnewhero)
const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another.flat(Infinity)
console.log(real)

console.log(Array.isArray("neha"))
console.log(Array.from("neha"))
console.log(Array.from({name:"neha"}))//intersting returns an empty array when it is not specified that the key must be converted to array aur value must be converted to array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
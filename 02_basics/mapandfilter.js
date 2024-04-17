//filter method
/*
const coding=["js","ruby","java","python","cpp"]

//coding.forEach((item) => {
//    console.log(item);
//    return item
//})

const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums= mynums.filter( (num) => {
    num>4
})
console.log(newnums)


const books=[
    {
        tittle:'book one',genre:'fiction',publish:1991,
        edition:2004
    },
    {
        tittle:'book one',genre:'fiction',publish:1991,
        edition:2004
    },
    {
        tittle:'book two',genre:'non-fiction',publish:1992,
        edition:2005
    },
    {
        tittle:'book three',genre:'extra-fiction',publish:2001,
        edition:2006
    },
    {
        tittle:'book four',genre:'history',publish:1998,
        edition:2007
    },
]
//const userbooks=books.filter((bk) => bk.genre==='history')
const userbooks=books.filter((bk) => bk.publish>=2000 && bk.genre==='extra-fiction')
console.log(userbooks);
*/

//map
/*
const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.map( (num) => num+10) //agr ye scope {} lga diye to return krna padega
console.log(newnums)
*/
const mynums=[1,2,3,4,5,6,7,8,9,10]
//const newnums=mynums.map( (num) => {return num+10}) //agr ye scope {} lga diye to return krna padega
//console.log(newnums)

const newnums=mynums.map((num) => num*10)
                    .map((num) =>num+10)//this is called chaining we can use differnrt methods such as map and filters an airthmatic expressions and maps
console.log(newnums)
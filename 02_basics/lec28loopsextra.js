//for of loop
const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const greetings="hello world!"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}

//map

const map=new Map()
map.set('In',"India")
map.set('As',"Australia")
console.log(map);
//map does not store duplicate values

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key,value)
}

//for in loop
const myobject={
    js:'javascript',
    cpp:'cpp',
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myobject){
    console.log(myobject[key]);
}

const prog=["js","rb","py","java","cpp"]
//for in me hamrae pass keys aati hai array ki
for(const key in prog){
    console.log(prog[key]);
}

//for each loop

const coding=["js","ruby","java","python","cpp"]
/*coding.forEach(  function (item) {

}  )
*/
/*
coding.forEach( (item) =>{
    console.log(item);
})
*/


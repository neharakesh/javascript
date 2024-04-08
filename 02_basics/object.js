//oibject literals
/*
const mysm= Symbol("key1")
const jsUser={
    name:"hitesh",
    "full name":"neha rajpoot",
    [mysm]:"mykey1",//symbol ke liye bracket use krna hota hai ,access krte time bhi or decleration ke time bhi
    age:20,
    location:"banda",
    email:"neha@gmail.com",
    lastLoginDays:["monday","tuesday"]
}
//console.log(jsUser.email)
//console.log(jsUser["full name"])
//console.log(jsUser[mysm])

jsUser.email="asajdjd"
//Object.freeze(jsUser)
//freeze ke baad changes nhi honge
jsUser.email="hii@mail"
//console.log(jsUser.email)

jsUser.greeting=function(){
    console.log("hii user")
}
jsUser.greeting2=function(){
    console.log(`hii user,${this.name}`)
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

*/
/*
//objects part2
//const tinder=new Object()//singleton object
const tinder={
    email:"neha@mail.com",
    name:"neha"
} //non singleton object
//console.log(tinder)

const regularUser={
    email:"neha@mail.com",
    fullName:{
        name:"neha",
        lastName:"Rajpoot"
    }
}
//console.log(regularUser.fullName.name)

const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2)
//console.log(obj3)
const obj4={...obj1,...obj2}
console.log(obj4)

const users=[
    {
        id:1,
        email:"neha@mail.com"
    },
    {
        id:2,
        email:"mm@gmail.com"
    }
]
console.log(users[1].email)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

*/

//object Destructure

const course={
    courseName:"js",
    price:"565",
    courseInstructor:"hitesh"
}
const {courseInstructor:Instructor}=course

console.log(Instructor)
//json
/*
{
    "name":"neha",
    "courseNmae::"js",
    "price":"free"
}
*/
//api can be array also
/*
[
    {

    },
    {}
]
*/
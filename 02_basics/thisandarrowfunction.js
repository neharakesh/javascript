//this and arrow function
/*
const user={
    username:"neha",
    price:990,
//this is used to refers current context
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
//user.welcomeMsg()
//user.username="sam"
//user.welcomeMsg()

//console.log(this)//in node environment this has empty value,bcz it has no global refrence


function chai(){
    console.log(this)
}
chai()
*/

//arrow functon

//const 
//const chai=function(){
//    let username="neha"
//    console.log(this.username)
//}

const chai= ()=>{ //() => ,this is arrow function
    let username="neha"
    console.log(this)
}
chai()
/*
//basic arrow function
const add2=(num1,num2) => {
    return num1+num2
}
*/

const add2=(num1,num2) =>  num1+num2
//{} use kiya to return keyword likhna padega hi
//() isme kaam chal jayega
//implicit arrow function
console.log(add2(3,4))

const myarr=[2,3,4,5]
//myarr.forEach(function())
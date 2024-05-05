/*
const promise1= new Promise(function(resolve,reject){
    //do and asyn task
    //DB calls, cryptography,network call
    setTimeout(function(){
        console.log('async task is completed')
        resolve()
    },1000)
});
promise1.then(function(){
    console.log("promise consumed")
})//connected with resolve"
///            or
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("yooo")
        resolve()
    },1000)
}).then(function(){
    console.log("task done")
})
//promise 3

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"yo@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})
//promise 4
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false//reject will execute
        //let error=true//if error is true then resolve will execute
        if(!error){
            resolve({username:"neha",password:"123"})
        }else{
            reject("error come")
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("the promise is either resolved or rejected"))


*/
///promise5
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"neha",password:"123"})
        }else{
            reject("eroor come :js went wrong")
        }
    },1000)
})
async function consumepromise5(){
    try{
        const response=await promise5
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumepromise5()
/*
async function getAllUsers(){
    try{
    const response=await fetch('https://jsonplaceholder.typecode.com/users')
    const data=await response.json()
    console.log(data)
    }catch(error){
        console.log(error)
    }
}
getAllUsers()
*/
fetch('https://jsonplaceholder.typecode.com/users')f
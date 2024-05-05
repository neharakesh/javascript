//object literal
/*
const user={
    name:"neha",
    logincount:8,
    signin:true,
    getuserdetails:function(){
        //console.log("got user details")
        console.log(`${this.name}`)
        console.log(this)
    }
    //this keyword ka mtlb hai current context ki baat kr rhe hai hum ,jo current me activity chal rhi haif
}
console.log(user.name)
console.log(user.getuserdetails())
console.log(this)//empty parenthesis bcz globally me kuch nhi hai abhi lken ye change hota rehta hai
*/

//constructor function
//const promise1=new Promise()
//const date=new Date()//new is constructor function
function user(username,logincount,isloggedin){
    this .username=username;
    return this
}
console.log(user())
//new creates a new object with newer memory locationf
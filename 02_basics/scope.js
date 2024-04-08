function one(){
    const username="neha"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) //not accessible
    two()
}
//one()

if(true){
    const username="neha"
    if(username=="neha"){
        const web="youtube"
        console.log(username+web)
    }
    //console.log(web) outof scope
}
//console.log(username) //out of scope

//==============intersting===============
//console.log(add1(5)) //function decleration matters a lot for printing output also
console.log(add2(5))
function add1(num){
    return num +1
}
console.log(add1(5))
const add2=function(num){
    return num+2
}
console.log(add2(5))
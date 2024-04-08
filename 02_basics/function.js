//function calCartPrice(...num1)
function calCartPrice(val1,val2,...num1){
    return num1
}
console.log(calCartPrice(200,400,500,2000))


const user={
    userName:"neha",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username:"ishan",
    price:234
})

const newarr=[100,200,3]
function returnSecvalue(getArray){
    return getArray[1]
}
//console.log(returnSecvalue(newarr))
console.log(returnSecvalue([100,200,3]))
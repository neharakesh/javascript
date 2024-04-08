//immediately Invoked Function Expressions (IIFE)
//global scope ke pollution ko hatne ke lite iska use krte hai
(function chai(){
    //named iife
    console.log(`Db connected`)
})();
//chai()
/* //it raises error
(  () =>{
    console.log(`hii`)
})()
*/
( () => {
    console.log(`hii`);
})();

( (name) => {
    console.log(`hii ${name}`);
})("neha");
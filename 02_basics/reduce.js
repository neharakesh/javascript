const mynums=[1,2,3]
/*
const mytotal=mynums.reduce(function (acc,curval) {
    console.log(`acc:${acc} and curval:${curval}`);
    return acc +curval

},0)
*/
const mytotal=mynums.reduce((acc,curval)=> acc+curval,0)
console.log(mytotal);

const shoppingcart=[
    {
        itemname:"jscourse",
        price:2999
    },
    {
        itemname:"python",
        price:999
    },
    {
        itemname:"dscourse",
        price:3999
    },
    {
        itemname:"webdev",
        price:5999
    }
] 
const pricetopay=shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(pricetopay)
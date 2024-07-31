const mynums=[1,2,3,4]

// const mytotal=mynums.reduce( function(acc,currval) {
//     console.log(`acc : ${acc} and currvalue : ${currval}`);
//     const t= acc+currval
//     console.log(`value of acc + currval = ${t}`);
//     return t
// },0 ) //u can change the value of acc

// console.log(mytotal);

const mytotal=mynums.reduce( (acc,curr)=>(acc+curr),0 )
//console.log(mytotal);

const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data science course",
        price:12999
    }
]

const ans=shoppingcart.reduce( (acc, item)=>acc+item.price,0 )

console.log(ans);
const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);


console.log(balance.toString().length)
console.log(balance.toFixed(2))

const othernum=123.896
console.log(othernum.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))


///MATHS
console.log(Math);
//abs->MAths.abs()
//round
//ceil
//floor
//min
//max

//random->gives value between 0 n 10 but in decimals
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1) // we are adding 1 to avoid 0.04 random values

//when range is defined
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1) + min))
//to get a number between 10 n 20
// 20-10+1->11*random+10

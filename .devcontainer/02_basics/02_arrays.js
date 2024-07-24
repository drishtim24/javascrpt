const marvel_heros=['thor', 'ironman', 'spiderman']
const dc=['superman', 'flash', 'batsman']

//marvel_heros.push(dc) //array in array is merged
//console.log(marvel_heros)

const allheros=marvel_heros.concat(dc) //returns a new array
console.log(allheros)

const allnewheros=[...marvel_heros,...dc] //spread operator, like glass is broken and spread to every corner of the room 
console.log(allnewheros)

const anotherarray=[1,2,3,[4,5,6],7,[6,7],[4,5]]

const realarray=anotherarray.flat(Infinity)
console.log(realarray)

//to check if it is an array->isArray()
console.log(Array.isArray("Drishti"))
//to make an array
console.log(Array.from("Drishti"))

console.log(Array.from({name:"Drishti"})) //wil return an empty array due to not mentioned keys

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //makes an array
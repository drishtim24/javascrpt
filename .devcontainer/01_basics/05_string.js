const name="drishti"
const repocount=50

console.log(name+" "+repocount+" ")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('drishti-ic')

console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.toUpperCase())

const newstring=gamename.substring(0,4)
console.log(newstring)

const anotherstring=gamename.slice(-8,4)
console.log(anotherstring)


const newstring1="     hitesh     "
console.log(newstring1)
console.log(newstring1.trim())


const url="https://drishti.com/dristi%20middha"
console.log(url.replace('%20','-'))

console.log(url.includes('drishti'))

console.log(gamename.split('-'))
//singleton
Object.create

//object literals
const mysym=Symbol("key1")

const jsuser={
    name:"Hitesh",
    "full name":"hitesh chaudhary",
    age:18,
    //mysym:"mykey1", it is a string here
    [mysym]:"mykey1",
    location:"jaipur",
    email:"hitesh@google.com",
    idloggedin:false,
    lastlogindays:["Monday", "saturday"]
}
console.log(jsuser.email) //wrong way
console.log(jsuser["email"])
console.log(jsuser["full name"])
//console.log(jsuser.mysym)
console.log(jsuser[mysym])

jsuser.email="drishit@google.com"
//Object.freeze(jsuser) //the value will not be changed now
console.log(jsuser.email)

console.log(jsuser)


jsuser.greeting=function(){
    console.log("Hello JS user")
}

jsuser.greetingtwo=function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
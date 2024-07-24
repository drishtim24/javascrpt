//primitive datatype
//7 types : String, number, boolean, null, undefined, symbol BigInt

const score=100  

//Refernce (non primitive)

//Array, objects, functions


//stack(primitve) ->makes a copy, heap(non primitive)->makes a refernce
let myname="drishti"
let anothername=myname
anothername="chaiaurcode"
console.log(myname)
console.log(anothername)

let user={
    email:"user@google.com",
    upi: "user@byl"
}

let usertwo=user
usertwo.email="drishti@google.com"
console.log(user.email); // it will be changed
console.log(usertwo.email) //it will be changed
//const tinderuser=new Object() //singleton object
const tinderuser={} //non singleton object

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false

//console.log(tinderuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chuadhary"
        }
    }
}

// console.log(regularuser.fullname)
// console.log(regularuser.fullname.userfullname)
// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1, obj2}
const obj3=Object.assign({},obj1,obj2) //if we donot mention empty object, all the values will be added in first mentioned object
// console.log(obj1)
// console.log(obj3)

const obj6={...obj1,...obj2}
//console.log(obj6)


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
]

//console.log(tinderuser)

//console.log(Object.keys(tinderuser)) //only key values
//console.log(Object.values(tinderuser)) //only values
//console.log(Object.entries(tinderuser)) //both keys and values

console.log(tinderuser.hasOwnProperty('isloggedin'));
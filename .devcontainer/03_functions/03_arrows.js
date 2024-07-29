const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this); 

function chai(){
    let username="hitesh"
    //console.log(this); //this will print the values in the this, it will alsoo print the same in the const declaration of function but not in arrow function
    //console.log(this).username; //this will print undefined
}

chai()

//ecplicity return
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

//implicit return
//const addtwo=(num1,num2)=> num1+num2

//const addtwo=(num1,num2)=> (num1+num2)

//const addtwo=(num1,num2)=> {username:"hitesh"} //it will return undefined

const addtwo=(num1,num2)=>({username:"hitesh"}) //now it will return objects

console.log(addtwo(3,4))

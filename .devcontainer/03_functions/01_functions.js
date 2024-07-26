function saymyname(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
//saymyname()

// function addtwonums(num1, num2){
//     console.log(num1+num2)
// }

//const result=addtwonums(3,4)
//here result has no value

function addtwonums(num1, num2){
    let result=num1+num2
    return result
}
const result=addtwonums(3,5)
//console.log("Result: ",result)


function loginusermessage(username){//username="same" (default value)
    //undefined is false, so we can also write if(!username) if it is undefined it will converted to true
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
//const ans=loginusermessage()
//if we donot pass any value as argument undefined will be printed
//console.log(ans)

function calcartprice(...num1){
    return num1
}
//console.log(calcartprice(200,300,500))

function calcartprice2(val1, val2,...num1){
    return num1
}
//console.log(calcartprice2(200,300,500,2000))

const user={
    username:"hitesh",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username:"sam",
    price:"399"
})

const mynewarray=[200,400,100,600]

function returnsecondarray(array){
    return array[1]
}
//const second=returnsecondarray(mynewarray)
//console.log(second);

console.log(returnsecondarray([200,400,100,600]));
const useremail="h@hitesh.ai"

if(useremail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NAN (not a number)


//truthy values
// "0", 'false', " ", [], {}, function(){} (empty function)

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    //console.log("object is empty");
}

//true
//false==0, false='', 0==''


//NULLISH COALESCING OPERATOR(??) :null undefined

let val1;
//val1=5??10 ->5
//val1=null??10 ->10
//val1=undefined??15 ->15
//val1=null??10??20 ->10

//console.log(val1);


//TERNARY OPERATOR
//condition?true:false

const iceTeaPrice=100
iceTeaPrice>=80?console.log("more than 80"):console.log("less than 80");
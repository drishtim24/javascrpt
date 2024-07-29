if(true){
    let a=10
    const b=20
    var c=30
}
//console.log(a);
//console.log(b);
//console.log(c); //c will be printed

function one(){ //parent functions
    const username="hitesh"
    function two(){ //child function
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        //console.log(username+website)
    }
    //console.log(website);
}
//console.log(uername);




//+++++++++++intersting++++++++++
function addone(num){
    return num+1
}
console.log(addone(5)) //it can run without and error if we move it upwards

const addtwo =function(num){
    return num+2;
}
addtwo(5) //it will throw an error if we move it upward
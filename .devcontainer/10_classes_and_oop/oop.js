const user={
    username:"hitesh",
    logincount:8,
    signedin:true,

    getuserdetails:function(){
        //console.log("Got user details from data");
  //      console.log(`Username: ${this.username}`);
    }
}

//console.log(user.username)
//console.log(user.getuserdetails());

//console.log(this);

// const promise1=new Promise()
// const date=new Date()

function userr(username,loginincount,isloggedin){
    this.username=username;
    this.logincount=loginincount;
    this.isloggedin=isloggedin

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this
}

const user1=new userr("hitesh",12,true)
const user2=new userr("Chaiaurcode",10,false)
//if we will not use "new" keyword then it will overwrite the code
console.log(user1);
console.log(user2);


const promise1=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
    },1000)
})


promise1.then(function(){
    console.log("Promise consumed");

})
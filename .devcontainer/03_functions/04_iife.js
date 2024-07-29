//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

//named iife
(function chai(){
    console.log(`DB CONNECTED`)
})();
//this immediately executes the program and also helps in not contributing in thee pollution of the global scope but this doesnt know where to stop, for this we use terminator at the end

//unnamed iife
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

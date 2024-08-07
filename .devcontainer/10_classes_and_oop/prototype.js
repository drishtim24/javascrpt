let myname="hitesh"
console.log(myname.length);

let myname2="hitesh      "
console.log(myname2.trim().length);

let myheroes=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


heropower.hitesh()
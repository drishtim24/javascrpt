function mul5(num){
    return num*5
}

mul5.power=2

console.log(mul5(5));
console.log(mul5.power);
console.log(mul5.prototype);



function createuser(username,score){
    this.username=username
    this.score=score
}


createuser.prototype.increment=function(){
    this.score++
}

createuser.prototype.printme=function(){
    console.log(`price is ${this.score}`);
    
}

const chai=new createuser("chai",25)
const tea=new createuser("tea",250)

chai.printme()
tea.printme()

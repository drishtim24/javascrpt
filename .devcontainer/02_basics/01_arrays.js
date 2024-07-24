//array

const myarr=[0,1,2,3,4,5]
const myheros=['shaktiman', 'naagraj']
const myarr2=new Array(0,1,2,3,4)

//console.log(myarr[0])
myarr.push(6);//comes at last
myarr.push(7);
myarr.pop()//removes from last
myarr.unshift(9)//comes at front
myarr.shift();//removes from front
//console.log(myarr)

//console.log(myarr.includes(9))

const newarr=myarr.join() //string is made
//console.log(myarr)
//console.log(typeof newarr)


console.log("A",myarr)
const myn1=myarr.slice(1,3) //3 is not included and it doesnt make any change to the original array
console.log(myn1)
console.log("B",myarr)

const myn2=myarr.splice(1,3) // 3 is included and it make changes in the original array
console.log("C",myarr)
console.log(myn2)
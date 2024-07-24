//dates
let mydate = new Date()
console.log(mydate.toString())

// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

console.log(typeof mydate)

//let mycreateddata=new Date(2023,1,23)
//console.log(mycreateddata.toDateString())

let mycreateddata=new Date(2023,1,23,5,3,30)
console.log(mycreateddata.toLocaleString())


let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreateddata.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay()+1)

newdate.toLocaleString('default',{
    weekday:"Long"
})

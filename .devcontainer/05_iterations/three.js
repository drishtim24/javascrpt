//for of

// ["", "", ""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
//    console.log(i);
}

const greetings="hello world!"

for (const i of greetings) {
    //console.log(i);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
}

// const myobj={
//     'Game1':'NFS',
//     'Game2':'Spiderman'
// }//objects are not iterable in forof loop

// for (const [key,value] of myobj) {
//     console.log(key,':-',value);
// }
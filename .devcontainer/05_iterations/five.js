//for each

const coding=["js","ruby", "java","py","cpp"]

coding.forEach(element => {
    //console.log(element);
});

coding.forEach( function (key){
    //console.log(key);
}  )

function printme(item){
    console.log(item);
}

//coding.forEach(printme)

coding.forEach( (item,index,arr) =>{
    //console.log(item,index,arr);
})


const mycoding=[
    {
        languageName:"javascript",
        languagefilename:"js"
    },
    {
        languageName:"java",
        languagefilename:"java"
    },
    {
        languageName:"python",
        languagefilename:"py"
    }
]

mycoding.forEach( (item)=>{
    //console.log(item);
} )
mycoding.forEach( (item)=>{
    console.log(item.languageName);
} )
mycoding.forEach( (item)=>{
    console.log(item.languagefilename);
} )


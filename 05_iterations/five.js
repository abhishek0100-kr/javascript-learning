//forEach

const coding=['js', 'java','ruby','cpp']
/*
coding.forEach(function (item){
    console.log(item);
    
})
    */

//using arrow function

coding.forEach( (item)=>{
    console.log(item);
    
})


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

 
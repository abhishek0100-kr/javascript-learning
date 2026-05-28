const userEmail="abhi@gmail.com"
if(userEmail){
    console.log(("got the email"));
    
} else{
    console.log("did not get");
    
}

//falsy value
// false , 0, -0 , BigInt , "" ,undefined ,NaN   except these all are considered as truthy value 

//truthy values
// "0" acts as string , 'false' , " " , [] , {} , function()

// Nullish coalesing operator (??): null undefined
let val1;
//val1=5 ?? 10
//val1= null ?? 10
//var1= undefined ?? 13
val1= null ?? 10 ?? 30  //takes the first value after null value 

console.log(val1);

//terniart=y operator 

// condition ? true :false

const price=100
price <=80 ? console.log("less then 80") : console.log("more than 80");


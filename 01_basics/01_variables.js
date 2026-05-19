const userId = 12345
let email="abhi@gmail.com"
var name="Abhi"

accountState="Delhi"
// userId=222 (node allowed . you cannot use constant like this )

const userId=9870;// this can be declared once only . constant are not allowed to declare more than once with same name.
email="abc@gmail.com"
name="Rahul"
city="mumbai"

let password;//if you don't assign any value to the assigned variable , you get "undefined" as an output .


console.log(userId);
//instead of writing console.log everytime.
console.table([userId,email,name,city,password])// use this to print all things at once in tabular manner.

/*
Avoid using var. Instead start using let. Although both has same use. 
Because of issue in block scope and functional scope we don't use Var to declare any variable 

*/
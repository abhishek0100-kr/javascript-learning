
//*********Numbers *********

const score =400 //this is by default number
console.log(score);
//but if we want explacetely in number only then

const balance=new Number(100) //this will be in number
console.log(balance);

console.log(balance.toString() ); //this will convert numebr into string and then we can use this string and perforem all the operations availabale on String
console.log(balance.toFixed(2)); //gives precised value with 2 decimal value

const num1= 23.8977
console.log(num1.toPrecision(3));


const num2= 123.8977
console.log(num2.toPrecision(3));// toPrecision() gives priority to the value that is before decimal 

const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN')); 



//***************** Maths **********
console.log(Math);
console.log(Math.abs(-4)); //abs=absolute value means only -ve value will become +ve. But +ve stays the same 

console.log(Math.round(4.6));
console.log(Math.round(4.4));



console.log(Math.ceil(4.6)); //only takes the upper value eg 4.1=5
console.log(Math.floor(4.6)) //only take lower value eg 4.9=4


console.log(Math.min(4,5,9,1,26))
console.log(Math.max(4,5,9,1,26))


//****IMPORTANT ******


//DOT random value always comes between o to 1 
console.log(Math.random())

console.log((Math.random()*10)+1) 

console.log(Math.floor(Math.random()*10)+1) // using floor gives exact value not precised one 

//usually we get value between 0 and 1 . But there is possibility that we might end up getting value like 0.85123456 in thsi case .flor() will give output as 0 . So to avoid this we did +1 .Then we will get value between 1 to 9.
 

//In case if we have to define min anx max too then we do like this
const min=10
const max= 20
console.log(Math.floor(Math.random() * (max - min +1)) +min); //Instead of multipying with 10, we did (max-min) and to avoid the case of 0 we add 1. and Addeed min value to get atleast that minimum value
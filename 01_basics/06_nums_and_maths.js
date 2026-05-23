
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



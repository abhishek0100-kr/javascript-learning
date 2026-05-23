//Date

let myDate=new Date()
console.log(myDate);//Not readable 

console.log(myDate.toString()); //slightly better
console.log(myDate.toISOString);
console.log(myDate.toLocaleDateString);

console.log(typeof myDate); //Date is a object


let date=new Date(2023,0 ,23) // In javascript Months start with 0 value .
console.log(date.toDateString())

 let timeStamp=Date.now()
 console.log(timeStamp);
 console.log(date.getTime());
 //compare this both value in mili seconds 
 
//further keep on exploring  



 
// we won't be doing basic comparison like

/*
console.log(2 > 3)
console.log(2 == 3)
console.log(2 != 3) etc

*/

//in this javascript automatically converted string value into number 
//console.log("2" > 3)
//console.log(2 < "3")

console.log(null >0);
console.log(null <0);
console.log(null == 0);
console.log(null >=0);// this gives true because equality check == and comparison >,<,>=,<= works differently. Comparisons convert null to a number ,treating it as 0.That's why (4) null>=0 is true and rest were false .



// strict check "==="

console.log("2" === 2 );
//let score= 33// number dataype
let score="33" //string
console.log(typeof score);

//if you want your string value as number , then use this ...
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// suppose score="abc" then you will get datatype as number but if you go and print the value inside "valueInNumber" you will get NaN(Not a Number) in output....
  
//"33"= 33
//"33abc"= NaN
// true= 1; false= 0
// null= 0
 
// and similarly we can convert into boolean or in string......



//********* Operations *****************

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%3); //modulus

*/

console.log("2" +2 +2 );// 222 would be output 
console.log(2+2+ "2"); // 42 would  be output

//**** Rule in javascript *****
// if string is in first then all the literals will be considered as string that's why we got 222 as output
// if string is in the last then beginning would be normal addition and then string part will come at the end as it is, that's why we got 42 as output (2+2= 4 then "2" => 42)


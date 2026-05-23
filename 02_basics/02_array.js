const marvel=["thor", "ironman", "spiderman"]
const dc=["superman","flash", "batman"]

//marvel.push(dc)
//console.log(marvel); // we got array inside array so total length would be 4 only,which we don't want

//console.log(marvel[3][1]);// we are trying to access the value from array inside an array


//new way to add both array

const new_heros=marvel.concat(dc)
console.log(new_heros);  //now we will get combined array


//one more of combining an array i.e spreading method

const new_all_heros=[ ...marvel , ...dc ]
console.log(new_all_heros);


console.log(Array.isArray("Abhishek"))//this will ask if Abhishek is an array or not
console.log(Array.from("Abhishek")) //this is convert "Abhishek" into an Array 

//key value pair in array
console.log(Array.from({name: "Abhishek"})) //this will give an empty array because we are unsure whether you want "key" or "value" to convert into array 

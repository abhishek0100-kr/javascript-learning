//Array

const arr= [0,1,2,3,4,5]
console.log(arr[0]);

arr.push(6)
console.log(arr); //add an element at the end

arr.pop(6)
console.log(arr);//pop element 6 from array

arr.unshift(3); // element at the begining and it will shift the rest of the elements
console.log(arr);

arr.shift() //it removes the element u put by using unshift
console.log(arr);

//Slice

console.log("A ",arr);

const myn1=arr.slice(1,3) //strt from index 1 and go upto 2

console.log(myn1);
console.log("B ",arr);

const myn2=arr.splice(1,3) //this splice manipulates the original array but slice keeps the same 
console.log("C ",arr);
console.log(myn2);



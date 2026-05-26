
function name(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    
}
name() //call the function

function sum(num1,num2){
    console.log(num1+num2);
    
}
sum(2,4) //6 has output
sum( 2, "3") // 23 output
sum( 3,null)


//another way 
function sums(num3,num4){
    let result =num3+num4 
    return result
}
const result=sums(3,5)
console.log("Result: ",result) 

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Abhishek"));
//console.log(loginUserMessage);


//when you don't know how many items are going to come then

function calculateCartPrice(...num){ // tripplpe dot means ,it returns an array
    return num
}
//console.log(calculateCartPrice(200,300,400));

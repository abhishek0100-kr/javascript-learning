//singleton - something that is NOT declared in literals are called singleton, 
//Singleton are made from Constructor


 //object literals

const jsUser={  
    name:"Abhishek",
    "full name": "Abhishek kumar",
    age:19,
    location:"delhi",
    email:"abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "saturday"]
}             //object created in keys and values pair

//how to access object

console.log(jsUser.email); //normal way of accessing value from object
//or
console.log(jsUser["email"]); //since we can't acess "full name" using dot (.) method, so we need this new method to acces data

console.log(jsUser["full name"]);

jsUser.email="abc@gmail.com" //email changed 
//Object.freeze(jsUser)
jsUser.email="emailChanged@gmail.com" //this won't change ,as we have already freezed the object , means object can't be changed

console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello abhishek");
    
}
jsUser.greeting2=function(){
    console.log(`hello abhishek , ${this.age}`); //way of extracting values from object
    
}

console.log(jsUser.greeting); //got undefined as an output
console.log(jsUser.greeting()); //if we simply run this we get error , coz earlier we have freezed the object . so make sure to unfreez
console.log(jsUser.greeting2()); 
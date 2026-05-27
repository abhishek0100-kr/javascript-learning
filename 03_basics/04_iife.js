//Immediate Invoked Function Expressions (IIFE)


function chai(){
    console.log(`DB CONNECTED`);
    
}
chai();



//      OR
//this is named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})() ;

// OR 
//using arrow function
( () => {
    console.log(`DB CONNNECTED TWO`);
    
}) () ;

//or

( (name) => {
    console.log(`DB CONNNECTED TWO ${name}`);
    
}) ("Abhishek") ;


// this is iife

//TO AVOID THE POLLUTION CAUSED FROM GLOBAL SCOPE,WE USE IIFE


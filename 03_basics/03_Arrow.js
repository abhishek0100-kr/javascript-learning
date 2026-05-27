const user= {
    username: "Abhishek",
    price: "999",
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this); //talks about current context
        
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage() //name changed Abhishek to Sam
//console.log(this) //it returns the empty curly braces 

/*
function chai(){
    let username="Abhishek"
    console.log(this.username);
    
}
chai() //you will get undefined as an output 
*/

// *******Arrow function *********

/*
const chai = () => {
    let username= "Abhihsek"
    console.log(this);
}
chai()
*/


/* 
const sum =(num1,num2) => {
    return num1+num2
}

*/

const sum =(num1,num2) => (num1+num2) //we can write like this , this act same as above function
console.log(sum(2,3))

// in short if you use curly braces then you have to write return statement, but if you use parenthesis the no need to use return statement 


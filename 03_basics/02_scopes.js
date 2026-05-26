
let a =300
if(true){
    let a=10
    const b=20
    var c=30 //do not ever use var
    console.log("INNER: ",a);
    
}
//console.log(a); //error
//console.log(b); //error
console.log(c); //but this will give output ,that's why we do not use var

 console.log(a); //takes global scope value ,which is not inside the scope 

 // nested scope

 function one(){
    const username=" Abhishek"

    function two(){
        const website ="github"
        console.log(username);
        
    }
//console.log(website);
two()

 }
 one()
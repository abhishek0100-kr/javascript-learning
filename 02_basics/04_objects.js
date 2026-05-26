//const tinderUser= new object() //singleton object

const tinderUser={} //non singleton object , here both single and non singleton object will give the same output

tinderUser.id="123abc"
tinderUser.name= "Sam"
tinderUser.isLoggedIn= false

console.log(tinderUser);

const regularUser= {
    email: "Sam@gmail.com",
    fullname: {                 //nested object
        firstname: "Sam",
        lastname: "altman"
    }
}

console.log(regularUser.fullname.firstname); //acess that nested value


const obj1={ 1: "a" ,2: "b"}
const obj2={ 3: "a" ,4: "b"}
//combine both object

//const obj3={obj1 , obj2} //don't do directly this
//const obj3= Object.assign({}, obj1,obj2)

const obj3={...obj1, ...obj2} //modern way of combining 
//console.log(obj3);


//this is how you will data in array form 
const users=[
    {
        id: 1,
        email:"abc@gmail.com"
    },
    {
        id: 2,
        email:"a@gmail.com"
    },{
        id: 3,
        email:"b@gmail.com"
    },{
        id: 4,
        email:"c@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ask if any property exist in that array we created 



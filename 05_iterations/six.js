
/*
const coding=['js', 'java','ruby','cpp']

const value= coding.forEach( (item)=>{
    //console.log(item);
    return item
    
} )
console.log(value);
// we conclude that forEach does not return any value


*/

/*
const mynum=[1,2,3,4,5,6,7,8]

const newNum= mynum.filter( (num) => num > 4)
console.log(newNum);
*/
/*
const mynum=[1,2,3,4,5,6,7,8]
const newNum=[]
mynum.forEach( (num) =>{
    if(num>4){
        newNum.push(num)
    }
} )
console.log(newNum);
*/



const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011 },
];

let userBooks= books.filter((bk) => bk.genre==='History')
userBooks= books.filter( (bk) => bk.publish>=1995)
console.log(userBooks);

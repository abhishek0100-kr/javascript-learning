const mynums=[1,2,3]
/*
const myTotal= mynums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return  acc + currval
}, 0)
*/
            //or

const myTotal = mynums.reduce( (acc,curr)=> acc+curr , 0)

console.log(myTotal);

const cart=[

    {itemName: "js course",
    price:999
    },
     {itemName: "py course",
    price:899
    },
     {itemName: "DS course",
    price:9999
    },
    
]
const price= cart.reduce( (acc,item)=> acc+ item.price ,0)
console.log(price);

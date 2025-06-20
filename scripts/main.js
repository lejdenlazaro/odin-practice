function getAverageAge(arr){
    let sum=0;
    let count=0;
    for(let person of arr){
        sum+=person.age;
        count++;
    }
    return sum/count;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
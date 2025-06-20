function sortByAge(arr){
    arr.sort((a,b)=>a.age-b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

//descending [pete,mary,john]
//ascending [john,mary,pete]

let arr = [ pete, john, mary ];

sortByAge(arr);

arr.forEach(element=>console.log(element.name));
"use strict";

const header = document.querySelector("h1");
header.textContent = "Fuck JavaScript";

const div = document.querySelector("div");
div.textContent = "🖕🏻";
div.style.fontSize = "150px";

const veggies = ["kangkong", "malunggay", "okra", "talong"];
const veggiesSize = veggies.length;
console.log(veggiesSize);

console.log(veggies.toString());

function someFunction() {
  return "return someFunction";
}

const assortedArray = [
  { firstname: "beng", lastname: "bong" },
  someFunction,
  ["array", "array1"],
  null,
  NaN,
];

const array = assortedArray.sort();
console.log(assortedArray.length);
console.log(array);

array.push({ firstname: "ded", lastname: "bol" });

console.log(array);

array.forEach((element) => {
  let count = 0;
  console.log(`${element}+${count}`);
  count++;
  console.log(count);
});

let thisArray = [];
console.log(`previous thisArray.length: ${thisArray.length}`);

for (let i = 0; i < 10; i++) {
  thisArray.push(i);
}

console.log(`thisArray.length: ${thisArray.length}`);
for (let i = 0; i < thisArray.length; i++) {
  console.log(thisArray[i]);
}

//array methods
console.log(thisArray.toString());
console.log(typeof thisArray.join(""));

//add elements to pop using array.prototype.pop() method
for (let i = 0; i < 5; i++) {
  thisArray.push("pop");
  console.log(`string: ${thisArray.toString()} length: ${thisArray.length}`);
}

//pop elements
for (let i = 0; i < 5; i++) {
  thisArray.pop();
  console.log(`string: ${thisArray.toString()} length: ${thisArray.length}`);
}

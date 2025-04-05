"use strict";

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

console.log(`thisArray.length: ${array.length}`);
for (let i = 0; i < array.length; i++) {
  console.log(thisArray[i]);
}

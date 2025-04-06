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

const thisArray = [];
console.log(`previous thisArray.length: ${thisArray.length}`);

for (let i = 0; i < 10; i++) {
  thisArray.push(i);
}

console.log(`thisArray.length: ${thisArray.length}`);
for (let i = 0; i < thisArray.length; i++) {
  console.log(thisArray[i]);
}

console.log(thisArray.toString());
console.log(typeof thisArray.join(""));

for (let i = 0; i < 5; i++) {
  thisArray.push("pop");
  console.log(`string: ${thisArray.toString()} length: ${thisArray.length}`);
}

for (let i = 0; i < 5; i++) {
  thisArray.pop();
  console.log(`string: ${thisArray.toString()} length: ${thisArray.length}`);
}

console.log(`thisArray: ${thisArray.toString()}`);
for (let i = 0; i < 5; i++) {
  console.log(
    `removed: ${thisArray.shift()} thisArray: ${thisArray.toString()}`
  );
}
console.log(`thisArray.shift() 5: ${thisArray.toString()}`);

for (let i = 4; i >= 0; i--) {
  console.log(
    `output: ${thisArray.unshift(i)} thisArray: ${thisArray.toString()}`
  );
}

const thisArray2 = ["this", "is", "a", "random", "array", null];
console.log(`thisArray: ${thisArray.toString()}`);
console.log(`thisArray2: ${thisArray2.toString()}`);
console.log(`thisArray+thisArray2: ${thisArray.concat(thisArray2).toString()}`);
console.log(`thisArray2+thisArray: ${thisArray2.concat(thisArray).toString()}`);

const tempArray = thisArray;
console.log(`tempArray: ${tempArray.toString()}`);
console.log(
  `tempArray.copyWithin(): ${tempArray.copyWithin(1, 4, 6).toString()}`
);
console.log(`tempArray.copyWithin(): ${tempArray.toString()}`);

const tempArray1 = thisArray;

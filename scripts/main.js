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
];

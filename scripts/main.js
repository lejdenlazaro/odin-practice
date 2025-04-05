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

const i = 0;
veggies[i] = "impostor veggie";
console.log(veggies[i]);

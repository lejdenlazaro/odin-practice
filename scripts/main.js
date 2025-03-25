"use strict";

const stringOne = "one";
const stringTwo = "two";
const stringThree = "three";
const total = `${stringOne}+${stringTwo}=${stringThree}`;
console.log(total);

const button = document.querySelector(".press-2");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello, ${name}`;
}

button.addEventListener("click", greet);

const someString = "Lejden\nC.\nLazaro";
console.log(someString);

const nestedQuotes = 'Lejden "lej" Lazaro';
console.log(nestedQuotes);

const stringNum = "123";
const stringNumConverted = Number(stringNum);
console.log(`stringNum default: ${typeof stringNum}`);
console.log(`stringNum Number conversion: ${typeof Number(stringNum)}`);

console.log(stringNum == stringNumConverted);
console.log(stringNum === stringNumConverted);

console.log(typeof stringThree.charAt(0));
console.log();
console.log(
  `charAt(0): ${typeof stringThree.charAt(0)}\nat(0): ${typeof stringThree.at(
    0
  )}`
);

const none = "";
console.log(`length: ${none.length}`);
console.log(`charAt(x): ${none.charAt(-1)}`);
console.log(`at(x): ${none.at(-1)}`);
console.log(`property access: ${none[-1]}`);
console.log(`charCodeAt(x): ${none.charCodeAt(0)}`);

const num = "0123456789";

console.log(`length of c: ${num.length}`);
console.log(`slice(0,5): ${num.slice(0, 5)}`);
console.log(`slice(): ${num.slice()}`);
console.log(`slice(-4): ${num.slice(-4)}`);
console.log(`slice(-2,-4): ${num.slice(-4, -2)}`);

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

const c =
  'C is a general-purpose programming language featuring economy of expression, modern control flow and data structures, and a rich set of operators. C is not a "very high level" language, nor a "big" one, and is not specialized to any particular area of application. But its absence of restrictions and its generality make it more convenient and effective for many tasks than supposedly more powerful languages. Originally designed for and implemented on the UNIX operating system on the DEC PDP-11 by Dennis Ritchie, C has since been used on a variety of other systems.';

console.log(`slice(0,44): ${c.slice(0, 43)}`);
console.log(`slice(44): ${c.slice(0)}`);

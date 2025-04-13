"use strict";

// function sayHi(){
//     const input = prompt("Enter your name: ");
// if (input !== null) {
//   if (input === "") alert("You entered nothing!");
//   else {
//     alert(`Hi ${input}!`);
//   }
// } else {
//   alert("Cancelled.");
// }
// }

const div = document.createElement("div");
div.textContent = "Added some div element from script!";
div.style.fontSize = "2em";
div.style.fontWeight = "900";
div.style.color = "white";
div.style.backgroundColor = "black";

const main = document.querySelector("main");
main.appendChild(div);

const articles = document.querySelectorAll("article");
const articleArray = Array.from(articles);

articleArray.forEach((x) => console.log(x.textContent));

const string = "The quick brown fox jumps over the lazy dog";
console.log(`string: ${string}`);
console.log(`array: ${Array.from(string).toString()}`);

const newDivELement = document.createElement("div");
newDivELement.textContent = "This is a div added to the newly appended child.";
newDivELement.style.fontSize = "3em";
main.insertBefore(newDivELement, div);

const footer = document.querySelector("footer");
const body = document.querySelector("body");

body.removeChild(footer);

newDivELement.setAttribute(
  "style",
  `
  color: red; 
  background-color: green; 
  font-size: 3rem;
  text-align: center;
  `
);

newDivELement.style.cssText = "";
newDivELement.style["fontSize"] = "3rem";
newDivELement.setAttribute("class", "box");

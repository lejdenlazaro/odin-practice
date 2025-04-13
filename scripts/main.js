"use strict";

const body = document.querySelector("body");

//inside body
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "3px solid black";
div.style.backgroundColor = "pink";

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);

// inside body div
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p1);

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

const button = document.createElement("button");
button.textContent = "Enter";
button.addEventListener("click", function (e) {
  e.target.style.display = "block";
  e.target.style.backgroundColor = "palegreen";
  e.target.style.border = "3px solid forestgreen";
  console.log("You made me a green button!");
});

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);
body.appendChild(button);

// inside body div
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p1);

//test

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.innerHTML = `Button${i + 1}`;
  button.style.display = "block";
  button.addEventListener("click", () => {
    button.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(
      255
    )})`;
    button.style.border = `3px solid rgb(${random(255)} ${random(255)} ${random(
      255
    )})`;
  });
  body.appendChild(button);
}

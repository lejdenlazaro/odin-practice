"use strict";

const number = "0123456789";
const alphabet = "ABCDEFGHIJKLMnopqrstuvwxyz";
const name = "        myName        mySurname        ";
const phone = "9162024972";

console.log(`number: ${number}`);
console.log(`number.length: ${number.length} type: ${typeof number.length}`);
console.log(
  `number.sliced(): ${number.slice(5)} type: ${typeof number.slice(5)}`
);
console.log(
  `number.substring(): ${number.substring(8, 9)} type: ${typeof number.slice(
    5
  )}`
);

console.log(`alphabet: ${alphabet}`);
console.log(alphabet.toUpperCase());
console.log(alphabet.toLowerCase());

console.log(number.concat(alphabet, alphabet, alphabet));

console.log(`name: ${name}`);
console.log(`name.trim(): ${name.trim()}`);
console.log(`name.trimStart(): ${name.trimStart()}`);
console.log(`name.trimEnd(): ${name.trimEnd()}`);

console.log(`phone: ${phone}`);
console.log(`phone.padStart(): ${phone.padStart(phone.length + 5 * 3, "+63")}`);
console.log(`phone.padEnd(): ${phone.padEnd(100, "foo")}`);

const pingpong = "pingpong";
console.log(`pingpong.repeat(): ${pingpong.repeat(4)}`);

const string = "The quick brown fox jumps over the lazy fox.";

function animal() {
  return "cat";
}

const regex = /fox/g;
console.log(string.replaceAll(regex, animal()));

const pangram = "The quick brown fox jumps over the lazy dog.";

let splitPangram = pangram.split(" ", 5);
console.log(typeof splitPangram);

for (const word in splitPangram) {
  console.log(splitPangram[word]);
}

console.log(number.codePointAt(1));
console.log(typeof String(1));

console.log("z".codePointAt(0));

console.log(true == 2);
console.log(Number(undefined));

function someFunction() {
  return true;
}

console.log(someFunction() ?? "brent" ? "true" : "false");
console.log(Boolean(-1));

// const visitor = String(prompt("Who's there?"));
// if (visitor === "Admin") {
//   const password = prompt("Password");
//   if (password === "TheMaster") alert("Welcome!");
//   else if (password === "" || password === null) alert("Cancelled.");
//   else alert("Wrong password.");
// } else if (visitor === "" || visitor === null) alert("Cancelled");
// else alert("I don't know you.");

// const regEx = /abba*a/;
// const myName = "myNameabbamySurname";
// const separated = myName.split(regEx);
// for (const someName in separated) console.log(separated[someName]);

// const loremString =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias atque, harum explicabo repellat dicta, possimus laudantium doloribus consequatur nulla deserunt fuga magnam, cumque est sint enim tempore quidem. Adipisci incidunt magni sapiente ipsam vero impedit veniam quod quo facilis qui excepturi ea, voluptatibus iure? Suscipit vero at voluptatum error iusto veritatis, illum pariatur porro, laborum, enim dignissimos. Obcaecati qui eum nisi quam aliquam veniam numquam, placeat perferendis quis nemo neque quae et cumque? Nobis sequi aut eos id expedita aliquam, est quo harum commodi dolorum itaque! Minus voluptas veniam molestias!";

// const h = " ";
// const asd = /$a/;
// const matches = loremString.split(h);
// for (const match in matches) console.log(asd[match]);

const myDictionary = [
  { fName: "Lejden", lName: "Lazaro", age: 20 },
  { fName: "Anshiera", lName: "Delna", age: 22 },
];

const div = document.querySelector("div");
div.textContent = "🖕🏻";
div.style.fontSize = "150px";

const header = document.querySelector("h1");
header.textContent = "Fuck JavaScript";

function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

(function () {
  console.log("ang init!");
})();

const result = (param) => {
  return `This is the parameter ${param} value.`;
};

console.log(result("blenbong"));

const animals = ["Dog", "Cat", "Frog", "Fish", "Rabbit"];
const animalPlural = animals.map((animal) => {
  return `${animal}s`;
});

console.log(animalPlural.join(" | "));

const input = document.querySelector("input");

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

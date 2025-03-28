"use strict";

const number = "0123456789";
const alphabet = "ABCDEFGHIJKLMnopqrstuvwxyz";
const name = "        Lejden        Lazaro        ";
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

const visitor = String(prompt("Who's there?"));

if (visitor === "Admin") {
  const password = prompt("Password");
  if (password === "TheMaster") alert("Welcome!");
  else if (password === "" || password === null) alert("Cancelled.");
  else alert("Wrong password.");
} else if (visitor === "" || visitor === null) alert("Cancelled");
else alert("I don't know you.");


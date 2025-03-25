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

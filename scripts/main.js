"use strict";

const number = "0123456789";
const alphabet = "ABCDEFGHIJKLMnopqrstuvwxyz";

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

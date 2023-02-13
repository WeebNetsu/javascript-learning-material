/**
 * JS has a couple of empty data types that you should know about.
 * 
 * undefined, null, NaN
 * 
 * undefined is when a value is not defined, undefined is usually set
 * by JavaScript itself as an example:
 */

let x; // x has no value in it, so JS will set it to undefined

console.log(x) // undefined

// will not produce expected result, since undefined is an empty value
console.log(x + 1);  // NaN

// next up we have null. null is the same as undefined, however, null is
// usually set by the developer instead of JavaScript. As an example:

let y = null; // undefined, but we as developer know that and has manually set it to be empty, so it is null

console.log(y)

// unlike undefined, JS will think this is expected.
// that means we will get a number result instead of NaN
console.log(y + 1) // 1

// Finally NaN, which means Not a Number. It is self explanatory
// it is when something is not a number, as an example

console.log(undefined + 1) // NaN
// it did not produce a number, so instead of getting an error, we
// instead get a NaN value
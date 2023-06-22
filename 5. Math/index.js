// you have 2 types of numbers, integers and floating point values. Note that
// in JavaScript, they are merged and both known as a `number`

let a = 10;
let b = 10.9;

// if you want to know if a number is an integer or a float, you can do this:
console.log(Number.isInteger(a)) // true = yes
console.log(Number.isInteger(b)) // false = no

let c = "10.9"; // note that this is a string (text) and not a number
// you can declare a number like this as well, however, note that the type
// of d is not the same as a or b, d is an object. We'll learn more about
// objects in a later tutorial, but just know that d might return unexpected
// results if you use it. It is advised not to use the below, unless you
// know what you're doing
let d = new Number(5);

// you can also use scientific notation
// the e says generate 0s, the number after e says how many, so this will be 25000
console.log(25e3);
// you can also do the opposite, now this will be 0.025 (note we have 1 less 0)
console.log(25e-3);

// note that whole numbers in JS is accurate until the 15th digit
let e = 999999999999999;
let f = 9999999999999999;
console.log(e); //  999999999999999
console.log(f); // 10000000000000000

// get the largest safe integer in JS
console.log(Number.MAX_SAFE_INTEGER)
// get the largest number in JS
console.log(Number.MAX_VALUE)

// if you want to know if an integer is safe, then we can use this:
console.log(Number.isSafeInteger(e)) // true
console.log(Number.isSafeInteger(f)) // false

// to fix this, we can create a big int
console.log(9999999999999999n);
// note that a big int is not the same type as a number, so might yield
// unexpected results

// you can change how many decimals a float should have
let g = 3.14159;
console.log(g.toFixed(2));
console.log(g.toFixed(4));

// you have your regular math operations
console.log(10 + 5) // add
console.log(10 - 5) // subtract
console.log(10 / 5) // divide
console.log(10 * 5) // multiply
console.log(10 % 5) // modulo
console.log(10 ** 5) // of (10^5)
// alternatively to the above you can do:
console.log(Math.pow(10, 5))

/* 
    Modulo gives the "remainder" of the division between two numbers.
    10 % 5 = 0 -> 10 / 5 = 2 remainder 0
    10 % 3 - 1 -> 10 / 3 = 3 remainder 1 (3.33) since 3+3+3 = 9, 1 leftover
*/

// you can also do math with variables
let x = 10;
let y = 3;
let z = x + y;

console.log(z)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

// you can add to a variable in multiple ways:
x = x + 1;
// or
x += 1; // same as x = x + 1
// or
x++; // same as x += 1, but unlike it, it will only ever add 1 to the value
x--; // same as x -= 1

console.log(x)

// you can use other operators with it as well
y *= 2;
y -= 3;
y %= 5;
y **= 5;
y /= 3;

console.log(y)

// Note the order of operations is important

console.log(10 + 5 * 9) // will result in 55
// it will result to that because * has a higher order of operation
// than +
// BODMAS and PEMDAS are both good ways to remember the order of operations

// BODMAS = Brackets, Of, Division, Multiplication, Addition, Subtraction
// PEMDAS = Parentheses, Exponents, Multiplication and Division, Addition and Subtraction

// Do not be confused however, multiplication does not have a higher sequence than division
// same with addition and subtraction, it is always from left to right
// in those cases, so both PEMDAS and BODMAS looks better written as:
// BO(DM)(AS)
// PE(MD)(AS)
// those in brackets go from left to right and has no higher sequence than the other value in the same bracket

// so to break it down the console log executed like this:
// 10 + 5 * 9
// 10 + 45
// we can change that by using brackets
console.log((10 + 5) * 9) // 135

// since brackets have no higher order of precedence than multiplication
// it will first do the brackets then the multiplication

// note that floating point values in JS is not always accurate
console.log(0.2 + 0.1);
// the solution to this issue is to always times floating point values by 10
// then divide it by 10
console.log((0.2 * 10 + 0.1 * 10) / 10);

// Note with adding strings together:
console.log("I am " + "cool")

// strings and numbers in JS are not the same, but JS will do its best
// to not throw an error when you mess up, so be careful when doing this
console.log("10" + 1) // "101"
console.log("10" - 1) // 9

// it is good to know this, because that means we can understand why
// the below will not give us the value we expect
console.log("The answer: " + 5 + 6)
// but this will
console.log("The answer: " + (5 + 6))

// you can convert a string (and other data types) to a number with ease:
let h = "502.33"

console.log(Number(h))
console.log(typeof Number(h))
console.log(parseInt(h))
console.log(typeof parseInt(h))
console.log(parseFloat(h))
console.log(typeof parseFloat(h))
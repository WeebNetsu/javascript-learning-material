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

// Note with adding strings together:
console.log("I am " + "cool")

// strings and numbers in JS are not the same, but JS will do its best
// to not throw an error when you mess up, so be careful when doing this
console.log("10" + 1) // "101"
console.log("10" - 1) // 9
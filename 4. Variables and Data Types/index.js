/* There are mi
A data type is a form of data we can use! In programming (specifically JavaScript), there are quite a few data types we can work with. You don't have to remember them all right now, but knowing about them can be very helpful in the future! Here are a few:

## Boolean

This is a true or false value, where true = on/yes and false = off/no. Think of it as someone asking you a yes/no question, like: 
*Do you like animals? - yes or no*
Or stating a fact:
*You are hungry - this fact is either **true** (yes I am hungry) or **false** (no I am not)*

## Number

The number data type can be split into 2 other data types, an *integer* and a *float*.

### Integer

This is any whole number, examples can be: -1, 55, 99999, -32, 0

### Float

This is any decimal number, such as: 3.1415, 6.0, -9.998, 0.01

## String

This is a piece of text, a word or sentence, this is anything between double quotes ("), single quotes (') and a backtick (`). Like when we covered using console.log, we passed in strings, as such:
*/

console.log("string") // valid string
console.log('another string')
console.log(`I am cool`)
console.log("10")

/*
Take note of the last example, `console.log("10")`, this is a string, even though it may look like a number type, it is a string, mainly because it is between quotes, anything between quotes are considered strings, that includes numbers.

There are more data types, like `objects` and `arrays`, but they are more complex and will be lessons on their own ;)

*Fun fact! You can check what the data type of something is by using typeof*
*/

console.log(typeof 3) // number
console.log(typeof "true") // string
console.log(typeof true) // boolean

// VARIABLES
/* 
A variable is a container, a piece of text (not a string) that can hold data (such as a string or number). There a 3 ways to declare a variable in JavaScript, `var`, `let` and `const`.

## Var
*/
var userName = "jack" // declare a string variable
/*
Var is an old way of declaring a variable, the reasoning is outside the scope of this tutorial, but just know that it exists

## Let
`let` is the new `var` that we use, `let` is a **keyword**, a keyword is a special word in JS (JavaScript) that we are not allowed to use *as* a variable. Some examples are `let`, `const`, `if`, `while`. Now let's declare our first variable!
*/
let userAge = 20

// We can now use these variables in our code
console.log(userName)
console.log(userAge)

console.log(userAge + 2) // 22 - we can do this because userAge is just a container, it just holds a value for us

let y = userAge // we have declared another variable called `y` and made it equal to *the value* in `x`
console.log(y) // 20

let hello = "Hello " // store a string in this variable
let world = "world"
console.log(hello + world + "!") // add the 2 variables together to create "Hello world!"

let num = 10
num = 5 // reassign the value inside num
console.log(num) // 5

let val // declare a variable, but leave it undefined
val = true // give it a value later
// You may have noticed that I used the word `undefined`... This is a special `type` in JS that basically means empty. There are multiple of its kind, such as `NaN` (Not a Number), `null` (empty), `undefined` (empty). `NaN` is returned when a value is not a number, but was expected to be, such as the square root of -1. Trying to get this value will return `NaN`, since it is not "allowed" in math (will usually return an Unit Imaginary Number). `null` is when you specifically set something as an empty value

let lol = null // You are intentionally setting the value as an empty value.

// `undefined` is when the computer sets a value as empty, such as:
let momo
// We did not set momo, so it is undefined, not null, since we did not explicitly set it to null. `null` and `undefined` are basically the same, but one is provided by the developer (you!) and the other by the computer.

// you can also specify undefined if you want
let a = undefined

/*
## Const

`const` is used to declare a **constant variable**, a variable that will never change. An example would be:
*/

let myVariable = 5
myVariable = 10 // myVariable was changed

const MY_CONSTANT = 9
MY_CONSTANT = 1 // NOT allowed, this will crash your program

/*
A constant is useful when you just want a variable to reference something, but that something will never change throughout your program. NOTE that some constants can still be changed (such as constants that holds objects data types), we'll cover them more in the future.

You may have noticed how I name my variables, non-constant variables were named using pascalCase (CammelCase), where each word is split by a capital letter. This is a commonly used naming convension in programming, where all non-constant variables are namedLikeThis. You also have snake_case, which uses underscores ( _ ) to seperate characters, however the use of them in JavaScript is not recommended, rather use pascalCase.

With constant variables, you may have noticed THIS_NAMING_CONVENTION, this is usually used for constant variables to help remind the developer that it's a constant, so it's in all caps and words are split using snake_case, since we cannot use a uppercase letter to split them. Not all constants use THIS_CASE, but we'll discuss it more in a future lesson.

*NOTE: thisVariable and thisvariable and this_variable and THIS_VARIABLE and thisVaRiAbLe are NOT the same!*
*/
/**
 * A function is a piece of code that can be used to abstract
 * your code, making it easier to read and understand as well
 * as decreasing the amount of times you need to repeat your code
 * 
 * Remember to write DRY code!
 * DRY - Don't Repeat Yourself
 */

// a basic function, will just console log to the screen
function sayHello() {
    console.log("Hello")
}

// simply call the function like so:
sayHello()

// functions can take parameters
function sayHi(name, age) {
    console.log("Hi, " + name + "!")

    if (age !== undefined) { // make sure the parameter exists
        console.log("You are now " + age)
    }
}

sayHi("Nick")
sayHi("Mike", 29)

// y is an optional parameter that has a default value of 10
function sum(x, y = 10) {
    // return will return a value so you can use it outside the function
    return x + y;

    // nothing after return will be executed
}

// return stores the value in this variable
const num = sum(80)
console.log(num)

console.log(sum(90, 50)) // or console.log it immediately

// es6 syntax for a function
// no return is required in this case
const subtract = (x, y) => x - y;

console.log(subtract(90, 50))

// when only passing in one parameter, you do not need brackets
const isDanger = animal => {
    // in this case since we are doing more than just returning a value
    // we need to specify the return statement
    switch (animal) {
        // no break required when using return
        case "tiger": return true

        case "lion": return true

        default:
            return false;
    }
}

if (isDanger("tiger")) {
    console.log("RUN!!!")
}

/* 
    Just take note that es6 function syntax has one gotcha! The "this"
    keyword means something different. When working with "this", I recommend to just use a normal function.
    But these days this is considered bad practice in JavaScript,
    so I recommend to trying to avoid using it entirely.

    Whichever syntax you use does not matter. Some like the es6 function syntax, whilst others likes the old school function syntax.
    Both accomplish the same thing on the end of the day.
*/

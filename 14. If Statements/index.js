// a boolean is a true or false (yes or no) value

console.log(1 > 2) // false
console.log(1 < 2) // true

/* 
    Comparison operators
    >
    <
    >=
    >=
    ==
    ===
    !=
    !==
*/

// if statements allows you to run code to do specific things

const age = 21;

// if age is 21 or more, console log
if (age >= 21) {
    console.log("You may enter")
}

if (age <= 12) {
    console.log("The party is down the street")
} else { // allows you to specify something that runs if the upper statement was false
    console.log("What is your business here?")
}

const customer = "Jack";

if (customer === "Jack") {
    console.log("Everything is off by 20% for you!")
}

// NOTE that == and === are NOT the same

console.log(1 == '1') // true
console.log(1 === '1') // false

// always try to use === instead of ==
// same with != and !==

const birthday = true;

if (birthday !== true) {
    console.log("You get normal prices")
}

// the above can become this
if (!birthday) { // ! means not, so if !true you would get not true (false)
    console.log("You get normal prices")
}

if (customer === "Mike") {
    console.log("30% off!")
} else if (customer === "Nick") {
    console.log('20% off')
} else if (customer === "Luke") {
    console.log('10% off')
} else {
    console.log("Normal prices")
}

/*
    ands and ors
    && and
    || or
*/

if (customer === "Mike" && birthday) { // no need to specify birthday === true
    console.log("All drinks are free")
}

if (customer === "Mike" || birthday) {
    console.log("All drinks are free")
}

// if you're only using ONE statement after the if
if (birthday) console.log("Happy Birthday")

// simmilarly you can also add an else
if (birthday) console.log("Happy Birthday")
else console.log("Not birthday")

// you can use if statements to set values
let salary = 0;

if(age > 20){
    salary += 5000;
}else if(birthday){
    salary == 100;
}

console.log(salary)

// NOTE: Don't overuse above, most people mess it up when they use it because they forget the ONE statement rule

const number = Number("jack")
if(isNaN(number)){ // do NOT use number === NaN!
    console.log("Is not a number")
}

// Ternary opperator
const welcomeText = birthday ? "Happy birthday!" : "Welcome!"
console.log(welcomeText)

console.log(age < 18 ? "You are too young" : "You may enter")

const nullVal = null;
const undefVal = undefined;

// null check opperator
const a = nullVal ?? 10;
const b = undefVal ?? 'jack'
const c = age ?? 90;

console.log(a)
console.log(b)
console.log(c)
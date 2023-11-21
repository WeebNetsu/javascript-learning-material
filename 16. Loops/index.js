// (new variable; while true; run after loop)
for (let index = 0; index < 10; index++) {
    console.log(index)
}

// same as above but split up
let index = 0;

for (; index < 5;) {
    console.log(index)
    index++;
}

// NOTE: never use `var` with for loops, always use `let`
var x = 0;

for (var x = 5; x < 10; x++) {
    console.log(x)
}

console.log(x) // x is 10 - was modified by for loop

let y = 0;

for (let y = 5; y < 10; y++) {
    console.log(y)
}

console.log(y) // y is still 0, because let has better scoping mechanics

// you can loop through arrays
const friends = ["Mark", "Tom", "Jesse", "Luke"]

for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    console.log(`Friend ${i + 1} is ${friend}`)
}

// for in loops can be used instead of for loops

for (let i in friends) {
    console.log(friends[i]);
}

// can also be used to go through objects
const user = {
    username: "Mark",
    age: 27,
    email: "mark@gmail.com"
}

for (let i in user) {
    console.log(`${i}: ${user[i]}`)
}

// you can use for of instead of for in if you want to get the values and not indexes of an array
for (let friend of friends) {
    console.log(friend)
}

// while loops

// infinite loop
// while(true){
// console.log("running")
// }

let number = 10;

// basically a for loop in while loop form
while (number < 15) {
    console.log(number)
    number++;
}

while (true) {
    number++

    // skip even numbers
    if (number % 2 === 0) continue;

    // stop loop if condition is true
    if (number > 25) break;

    console.log(number)
}

do {
    console.log("This will run at least once")
} while (false)

while (false) {
    console.log("Will not run unless while is true")
}

do {
    number++

    // skip even numbers
    if (number % 2 === 0) continue;

    console.log(number)
} while (number < 35)

let friendIndex = 0;

// undefined is a falsy value, so will break this loop if provided
while (friends[friendIndex]) {
    console.log(friends[friendIndex])
    friendIndex++;
}
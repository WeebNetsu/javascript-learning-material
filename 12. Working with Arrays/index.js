let a = "I am very cool"
// below will convert the string to text, wherever it finds a space
console.log(a.split(" "))
// below will also generate a new array (via each character)
console.log(Array.from(a))

const friends = ["Jack", "Sarah", "Mike", "Amy"]
const friends2 = new Array("Luke", "Jimmy", "Tom")

// below will convert an array to a string, adding XD between each value
console.log(friends.join(" XD "))

// get index in array based on value
console.log(friends.indexOf("Sarah"))
// returns the last index of a value (if there are duplicates, then
// this is a useful function)
console.log([1, 2, 1, 12, 3, 4, 1, 5].lastIndexOf(1))
console.log(friends.includes("Sarah")) // true if item found in array

// finds a value in an array, if it was found, it will return the value
// you can use findIndex as well, if you just want the index to be returned
const g = friends.find((val, _index, _arr) => {
    return val === "Sarah"
})

console.log(g)

// sort an array, note that it modifies the original array
friends.sort()
console.log(friends) // get array length

const numbers = [3, 5, 19, 88, 27]
numbers.sort() // sorting however doesn't work very well on numbers
console.log(numbers)
// adding a function telling JS how to sort it, will fix it
numbers.sort(function (a, b) { return a - b });
// or
// numbers.sort((a, b) => a - b);
console.log(numbers)

// get largest and smallest values in array
// the ... spreads an array into multiple parameters
// so the below will then be converted to this:
// Math.min(3, 5, 19, 27, 88)
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

// example of spreading array
console.log(...numbers)
console.log(...friends)

friends.push("Josh") // add item to end of the array, returns array length
// same as friends[friends.length] = "Amy"
friends.unshift("Henry") // add item to start of the array, returns array length

// inserts these values at index 1. The 2nd parameter is how many values
// to delete in the array, the rest of the values are what to add to the array
friends.splice(1, 1, "Steve", "Anon")
console.log(friends)

friends.pop() // remove last element from array and returns it
friends.shift() // remove first element from array and returns it
friends.splice(0, 1) // remove 1st element from array

// adds 2 arrays together, does NOT modify the original array
console.log(friends.concat(friends2))
console.log(friends.concat(friends2, ["another", "array"]))
console.log(friends.concat("Add value to end of array"))

const teams = [
    [
        "Jack",
        "Jill"
    ],
    [
        "Mike",
        "Tom"
    ],
    [
        // note that arrays can have multiple nested parts
        [
            "Maggie",
            "Jenny"
        ],
        [
            "Julia",
            "Carly"
        ],
        "Woody"
    ]
]

// converts a multi dimensional array to normal array
console.log(teams.flat())
// any deeper nested arrays will also be converted to a normal array
console.log(teams.flat(2))

// you can use a forEach to go through every item in an array
friends.forEach((friend, index) => {
    // with a for each loop, you pass in an antonymous function
    console.log(`Friend ${index + 1}: ${friend}`)
})

// mostly the same as forEach, however, map also returns a new array
const b = friends.map((friend, index) => {
    // with a for each loop, you pass in an antonymous function
    return `Friend ${index + 1}: ${friend}`
})

console.log(b)

// filter removes elements from an array
const c = friends.filter((friend, _index) => {
    // will only return Mike, if we used !== instead, it would've 
    // returned all the other values except Mike
    return friend === "Mike"
})

console.log(c)

// reduce reduces an array to a single value
const d = numbers.reduce((
    // the value calculated up until this point
    accumulator,
    // the current value in the array
    currentValue) => {
    return accumulator + currentValue
},
    // this is an optional 2nd parameter, which says what
    // reduce accumulator should be when reduce runs for the first time
    0);

console.log(d)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// use reduce to count amount of even numbers in array
const countEven = numbers2.reduce((count, number) => {
    if (number % 2 === 0) {
        return count + 1;
    }

    return count;
});

console.log(countEven);

// checks if every item in the array is larger than 5
const e = numbers2.every(num => num > 5)
console.log(e) // false

// same as above, but if at least 1 value passes, it returns true
const f = numbers2.some(num => num > 5)
console.log(f) // true
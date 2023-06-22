// Arrays are containers used to store multiple items
// let's say we have a couple of friends
const friend1 = "Jack";
const friend2 = "Mike";
const friend3 = "Sarah";

// as you can see, the more friends we have, the more complicated it becomes
// to write our code, since 100 friends will require 100 lines of code, and
// will easily become difficult to keep track of. So we have arrays:

const friends = ["Jack", "Mike", "Sarah"]
// another way to define an array - no different than just using the above example
const friends2 = new Array("Luke", "Jimmy", "Tom")
// HOWEVER - note that [40] and new Array(40) are not the same!
// the 2nd one will create an array with 40 empty indexes

const numbers = [1, 2, 3, 4] // can hold any type
const anyTypes = [true, 1, false, 2.3, "Tom", { name: "Jack" }, undefined, null, NaN]
console.log(anyTypes)

// An array is like a variable that can store multiple values, to access these
// values we can use indexes (which starts at 0)

console.log(friends[0]) // Jack
console.log(friends[1]) // Mike
console.log(friends[2]) // Sarah

// Note that constants are not 100% constant when it comes to arrays and object
friends[1] = "Jill" // change the value at index 1 to be "Jill"
console.log(friends)

friends[3] = "Amy" // add a new value at an empty index
console.log(friends)

// below will convert an array to a string, values separated by commas
console.log(friends.toString())

// notice that arrays are considered of the object type in JS
console.log(typeof friends)
// because of this, to see if something is an array, we can do this
console.log(Array.isArray(friends)) // true

console.log(friends.length) // get array length

friends[friends.length] = "Nicole" // same as the above
console.log(friends)

// this is a nested array
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

console.log(teams)
console.log(teams[0]) // returns an array in the array
console.log(teams[1][1]) // returns a value in nested array
console.log(teams[2][1][0])
console.log(teams[2][2])
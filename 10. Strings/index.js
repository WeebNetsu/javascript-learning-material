// A string, as we know is a piece of text in either " or ' or `
let a = "Jack is cool"
let e = new String("This is also a valid way to declare a string")

// Note that the type of a and e are not the same, e is now an object, and a is now a string
// both are considered strings, but e might provide unexpected behavior, so it is best to stay
// with the a syntax for creating new strings

// to get the length of a string
console.log(a.length)

// repeat a string
console.log(a.repeat(5))

// you can split a string into multiple lines either using a \ or `
let b = "I am \
Mike Kajuba"

console.log(b)

let c = `You are
Nick Lorem`

console.log(c)

let g = 29

// on the subject of ``, we can also use substitutions, so instead of this:
console.log("What is Jack? " + a + ". And he is " + g + " years old. Also, PI times 3 is " + (Math.PI * 3))
// we can do this:
console.log(`What is Jack? ${a}. And he is ${g} years old. Also, PI times 3 is ${Math.PI * 3}`)

// note that indexes starts at 0, not 1
console.log(c[0]) // returns the character at index 1
console.log(c[2]) // returns the character at index 2
console.log(c.charAt(2)) // same as above

// add to a string
console.log(c.concat(". ", "Or are you?"))
console.log(c + ". Or are you?") // same as above

console.log(c.endsWith("Lorem")) // true (yes) if the string ends with lorem
console.log(c.startsWith("You")) // true (yes) if the string ends with You

let d = "    Hello world    ";
console.log(d + "lol")
// remove space before and after string
console.log(d.trim() + "lol")
// remove space before string
console.log(d.trimStart() + "lol")
// remove space after string
console.log(d.trimEnd() + "lol")

// convert string to upper or lowercase
console.log(d.toUpperCase())
console.log(d.toLowerCase())

let f = "My name is Mike and I am very cool. I like your name."
// returns the text between index 5 and 10
console.log(f.substring(5, 10))
// returns the text from index 5
console.log(f.substring(5))
// slice is the same as substring, but it supports negative indexing
console.log(f.slice(5, 10))
console.log(f.slice(-5))

// returns the index where the searched word can be found in the string; -1 if not found
console.log(f.search("Mike"))
// same as above, also -1 if not found
console.log(f.indexOf("I"))
console.log(f.lastIndexOf("I")) // same as above, but starts searching from behind
console.log(f.includes("Mike")) // true (yes) if the string has this word in it

// replace a word with 
console.log(f.replace("Mike", "Jane"))
// same as above, but replaces all occurrences and not just the first
console.log(f.replaceAll("name", "age"))

// adds padding to the front of the string so it takes up at least 70 characters
console.log(f.padStart(70))
console.log(f.padStart(70, "0")) // specify a character to use as padding
console.log(f.padEnd(70) + "lol") // same as above but for the end of a string
console.log(f.padEnd(70, "0"))

// convert a string to an array (note for future tutorial)
console.log(f.split(" "))

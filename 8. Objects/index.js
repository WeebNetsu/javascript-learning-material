// Objects in JS are data structures that allows you to have key
// value pairs as an example:

const jack = {
    name: "Jack", // called a property
    age: 29,
    rich: false,
    accounts: {
        savings: 1900,
        meds: 12800
    },
    sayHello: () => console.log("Hello World!")
}

console.log(jack)

// you can individually access the properties using dot notation

console.log(jack.name)

// or via bracket notation
console.log(jack['age'])

// you can also set it, note that objects, even if constant, is not
// entirely immutable
jack.rich = true

console.log(jack.rich)
console.log(jack.likes[0])
console.log(jack.accounts)
console.log(jack.accounts.meds)
console.log(jack.socialMedia?.nickname)

jack.sayHello()

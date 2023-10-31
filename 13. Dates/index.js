// create a date in js - will choose current date
const a = new Date();
// note that once a date object has been set inside a variable, it
// does not change
console.log(a)

// create a date object with custom date
const b = new Date("2024-03-25");
console.log(b)
// commas are optional, casing is insensitive
const f = new Date("August 5, 2006 14:45:42");
console.log(f)
console.log(new Date("09/21/2011"))
console.log(new Date("Mar 25 2020"))
console.log(new Date("25 Jan 2019"))
// returns milliseconds since Jan 1 1970
const h = Date.parse("Aug 5 2006 19:00:00");
console.log(h)
// can pass in milliseconds to get date
console.log(new Date(h))
console.log(Date.now()) // get milliseconds since 1970 Jan 1 to now


// more ways to create dates
// year, month
const c = new Date(2002, 5);
// year, month, day
// NOTE: JS counts months from 0 to 11, so 0 is january, 11 is December
// so 12 will go over to the next year (same with all other values, it will go to the next hour, minute etc.)
const d = new Date(2002, 8, 9);
// year, month, day, hours, minutes, seconds, ms
const e = new Date(2002, 8, 5, 14, 48, 23, 10);

console.log(c)
console.log(d)
console.log(e)

// note, you need to add a month, if you do not, the number below will be
// seen as milliseconds and not year, so will return 1970-01-01T00:00:02.002Z
const g = new Date(2002);
console.log(g)
// to get only the year, you need to pass in a string
console.log(new Date("2002"))

// convert a date to sting
console.log(g.toString())
// without hours
console.log(g.toDateString())
// in UTC standard format
console.log(g.toUTCString())
// in ISO standard format
console.log(g.toISOString())

// get info about a specific date
console.log(g.getFullYear())
console.log(g.getMonth()) // 0 - 11
console.log(g.getDate()) // day of month (1 - 31)
console.log(g.getDay()) // day of week (0 - 6)
console.log(g.getHours()) // 0 - 23
console.log(g.getMinutes()) // 0 - 59
console.log(g.getSeconds()) // 0 - 59 
console.log(g.getMilliseconds()) // 0 - 999
console.log(g.getTime()) // milliseconds since jan 1 1970
// get the difference in minutes between local and UTC (GMT) time
// since I am in SA, which has +2 hours, the time diff will be -120 min
console.log(g.getTimezoneOffset())

// change the dates
g.setDate(27) // set the day 0 - 31
console.log(g)
g.setFullYear(2023)
console.log(g)
g.setMonth(9)
console.log(g)
g.setHours(10)
console.log(g)
g.setMinutes(6)
console.log(g)
g.setSeconds(38)
console.log(g)
g.setMilliseconds(892)
console.log(g)
g.setTime(Date.now())
console.log(g)

// compare 2 dates
const today = new Date();
const future = new Date(2080, 0, 29)

if (future > today) {
    console.log("It is in the future")
}

// get time difference between dates
const timeDiffMilliseconds = future.getTime() - today.getTime();
const timeDiffMinutes = Math.floor(timeDiffMilliseconds / 60000);
const timeDiffHours = Math.floor(timeDiffMinutes / 60);
const timeDiffDays = Math.floor(timeDiffHours / 24);
const timeDiffWeeks = Math.floor(timeDiffDays / 7);
const timeDiffMonths = Math.floor(timeDiffWeeks / 4);
const timeDiffYears = Math.floor(timeDiffMonths / 12);

console.log(timeDiffMilliseconds)
console.log(timeDiffMinutes)
console.log(timeDiffHours)
console.log(timeDiffDays)
console.log(timeDiffWeeks)
console.log(timeDiffMonths)
console.log(timeDiffYears)
// switch statement is like an alternative to an if statement

const clientName = "Mike";

switch (clientName) {
    case "Jack":
        console.log("Your name is Jack")
        // break stops the codeblock from continuing
        break;
    case "Mike":
        console.log("Your name is Mike")
        break;
    default:
        console.log("Your name is something else")
        break;
}

// the above as an if statement will translate to the below
// Note that a switch statement will always compare using "===" and never with "=="
if (clientName === "Jack") {
    console.log("Your name is Jack")
} else if (clientName === "Mike") {
    console.log("Your name is Mike")
} else {
    console.log("Your name is something else")
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

switch (new Date().getDay()) {
    case 0: // both 0 and 6 will output the same value
    case 6:
        console.log("It is the weekend!")
        break;
    case 1:
    case 2:
    case 3:
        console.log("Start of the week")
        break;
    default:
        console.log("Mid week")
        break;
}

// It is up to you which you prefer using, both if and switch statements are pretty much the same
// I use them depending on which is more comfortable in the scenario
// LET AND CONST //

// *ENTER NOTES HERE*

// ARROW FUNCTIONS //

/* Without Arrow Functions */

// function printMyName(name) {
//     console.log(name);
// }

/* With Arrow Functions */

const printMyName = (name) => {
    console.log(name);
}

printMyName("Max");

/* Another Arrow Function Example */

// const multiply = (number) => {
//     return number * 2;
// }

// ABOVE AND BELOW ARE THE SAME //

const multiply = (number) => number * 2;

console.log(multiply(2));
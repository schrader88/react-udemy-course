// LET AND CONST //

// *ENTER NOTES HERE*


// ================================================================= //


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


// ================================================================= //


// EXPORT AND IMPORT //

/*
 When using 'default' keyword, no name needs to be referenced in the import statement. Without 'default', the import statement must reference the name of the export: import ALIAS from 'JS FILE NAME' vs (import {NAME HERE} from 'JS FILE NAME' OR import {NAME HERE as ALIAS} from 'JS FILE NAME')
*/


// ================================================================= //


// CLASSES //

// class Person {
//     name = "Max"
//     call = () => {}
// }

// const myPerson = new Person();
// myPerson.call();
// console.log(myPerson.name);

// Inheritance:
// class Person extends Master;

/* Example(s) */

// ES6

// class Human {
//     constructor() {
//         this.gender = 'male';
//     }
//     printGender() {
//         console.log(this.gender);
//     }
// }

// ES7

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

// ES6

// class Person extends Human {
//     constructor() {
//         super();
//         this.name = 'Max';
//         // this.gender = 'female';
//     }
//     printMyName() {
//         console.log(this.name);
//     }
// }

// ES7

class Person extends Human {
    name = 'Max';
    // gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

// const person = new Person();
// person.printMyName();
// person.printGender();


// ================================================================= //


// SPREAD & REST OPERATOR(S) //

/*
Spread (...) is used to split up array elements OR object properties

EX:

const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};

Rest (...) is used to merge a list of function arguments into an array

EX:

function sortArgs(...args) {
    return args.sort();
}
*/

/* Example(s) */



/* SPREAD (Arrays) */

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

/* SPREAD (Objects) */

// const person = {
//     name: 'Max'
// }
// const newPerson = {
//     ...person,
//     age: 28
// }
// console.log(newPerson);



/* REST */

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));

// Above will return [1]


// ================================================================= //


// DESTRUCTURING //

// const numbers = [1, 2, 3];
// // [num1, num2] = numbers;
// [num1, , num3] = numbers;
// // console.log(num1, num2);
// console.log(num1, num3);


// ================================================================= //


// REFERENCE AND PRIMITIVE TYPES //

/* PRIMITIVE TYPES (Copies value) */
const number = 1;
const num2 = number;
console.log(num2);

/* REFERENCE TYPES (Copies pointer, not value). To copy the values, we must use the spread operator. */
// const person = {
//     name: 'Max'
// };
// const secondPerson = person;
// person.name = 'Manu';
// console.log(secondPerson);

/* REFERENCE TYPE Example (w/ Spread Operator) */
const person = {
    name: 'Max'
};
const secondPerson = {
    ...person
};
person.name = 'Manu';
console.log(secondPerson);


// ================================================================= //


// ARRAY FUNCTIONS //

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});
console.log(numbers);
console.log(doubleNumArray);
const user = {
    firstName: 'John',
    lastName: 'Smith',
}
console.log(user.firstName);
console.log(user['firstName']);

function getFullNameFromUser(customer) {
    return customer.firstName + ' ' + customer.lastName;
}

console.log(getFullNameFromUser(user));

// console.log(user.height);

function checkIfPropertyIsDefined(customer, propertyName) {
    return customer[propertyName] !== undefined;
}

console.log('user.firstName', checkIfPropertyIsDefined(user, 'firstName')); // true
console.log('user.height', checkIfPropertyIsDefined(user, 'height')); // false

const name = 'John';
const height = 5;
const isTeacher = true;

const fruit = {
    name: 'apple',
    color: 'red'
}

fruit.color = 'green';
fruit.weightInGrams = 100;
delete fruit.name;

console.log(fruit);

// TypeError: Assignment to constant variable.
// fruit = {
//   name: 'orange',
//   color: 'orange'
// }

function createUser(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

const john = createUser('John', 'Smith'); // { firstName: 'John', lastName: 'Smith' }

const firstUser = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondUser = {
    firstName: 'John',
    lastName: 'Smith'
}

const thirdUser = firstUser;

// console.log(firstUser === secondUser);
console.log(firstUser === firstUser);
console.log(firstUser === thirdUser); // true

thirdUser.firstName = 'Adam';
// console.log(firstUser.firstName)

console.log(firstUser === secondUser);

// console.log({} === {});

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
};
const salarySum = salaries.john + salaries.adam + salaries.katie;

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

isObject({
    firstName: 'John'
}); // true
isObject({}); // true
isObject(null); // false

// const adam = {
//   name: 'Adam'
// }

let firstValue = 10;
let secondValue = 20;
let valueHolder = firstValue;
firstValue = secondValue;
secondValue = valueHolder;

function removeProperty(object, propertyName) {
    const propertyValue = object[propertyName];
    delete object[propertyName];
    return propertyValue !== undefined;
}

removeProperty(user, 'name'); // true
removeProperty(user, 'weight'); // false
removeProperty(user, 'name'); // false

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smithenson'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(firstUser, secondUser) {
    return firstUser.firstName === secondUser.firstName &&
        firstUser.lastName === secondUser.lastName;
}

checkIfUsersHaveTheSameName(firstJohn, secondJohn); // false
checkIfUsersHaveTheSameName(firstJohn, adam); // false
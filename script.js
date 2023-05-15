console.log('hi')

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
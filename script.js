console.log('~~~~~~~~~~Check if users have the same name~~~~~~~~~~')

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(firstUser, secondUser) {
    return firstUser.firstName === secondUser.firstName &&
        firstUser.lastName === secondUser.lastName;
}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false

console.log('~~~~~~~~~~Get vote count~~~~~~~~~~')
function getVoteCount(votesObject) {
    return votesObject.upvotes - votesObject.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

console.log('~~~~~~~~~~Get cube volume~~~~~~~~~~')

function getCubeVolume(cubeDimensions) {
    return cubeDimensions.width * cubeDimensions.length * cubeDimensions.height;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2})); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0})); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5})); // 150

console.log('~~~~~~~~~~Get city information~~~~~~~~~~')

function getCityInformation(cityObject) {
    return `${cityObject.name} is in ${cityObject.country} and has an area of ${cityObject.areaInKilometers} square kilometers`;
}

console.log(getCityInformation({
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
})); // Warsaw is in Poland and has an area of 517 square kilometers

console.log('~~~~~~~~~~Get user copy~~~~~~~~~~')

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

function getUserCopy(userObject) {
    return Object.assign({}, userObject);
}

const newUser = getUserCopy(john);
console.log(newUser.firstName); // John
console.log(newUser.lastName); // John
console.log(newUser === john); // false &lt;-- this is crucial

console.log('~~~~~~~~~~The end~~~~~~~~~~')
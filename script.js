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
function getVoteCount(votesObject){
    return votesObject.upvotes - votesObject.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

console.log('~~~~~~~~~~The end~~~~~~~~~~')
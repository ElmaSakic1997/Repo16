function firstName (firstName) {
    return firstName.toUpperCase();
}

function lastName (lastName) {
    return lastName.toLowerCase();
}

console.log(firstName("Elma"));
console.log(lastName("Sakic"));

module.exports = {
    firstName,
    lastName
}
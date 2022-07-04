
//FUNCTIONS

const formatFirstName = () => {
    //get the first letter
    firstName = firstNameElement.value
    let firstChar = firstName.slice(0, 1)

    //turn the first character to upper case
    firstLetter = firstChar.toUpperCase()

    //isolate the rest of their names
    let restOfChar = firstName.slice(1, firstName.length)

    //turn the rest characters to lower case
    restOfChar = restOfChar.toLowerCase()

    //concatenate the first character with the rest of the characters
    return FirstName = `${firstLetter}${restOfChar}`

    console.log(returnFirstName)

}

$('button.newsButton').on('click', () => {
    $('.newsletter').slideOut();
});



//////////////////////////////////////////////////////
let firstNameElement = document.getElementById('inputFirstName')
let firstName = '';
firstNameElement.addEventListener("keydown", formatFirstName)

//////////////////////////////////////////////////
let lastNameElement = document.getElementById('inputLastName')
let lastName = '';
lastNameElement.addEventListener("keydown", () => {


    lastName = lastNameElement.value
    console.log(lastName)
})

////////////////////////////////////////
let emailElement = $('inputEmail')
let email = '';
emailElement.addEventListener('change', () => {

    email = emailElement.value
    console.log(email)
})

//////////////////////////////////////////
let passwordElement = $('inputPassword')
let password = '';
passwordElement.addEventListener('change', () => {
    password = passwordElement.value

    console.log(password)

})

//////////////////////////////////////////
let buttonElement = $('getStarted')
let button = '';
buttonElement.addEventListener('onsubmit', () => {
    button = buttonElement.value

    console.log(button)
})

/////////////////////////////


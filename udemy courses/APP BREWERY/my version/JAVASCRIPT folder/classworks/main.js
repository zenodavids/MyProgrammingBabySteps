////////////////////////////////////// STRING CLASSWORK

const { application } = require('express')

/////// GETTING OR EXTRACTING A SINGLE CHARACTER FROM A STRING
let firstName = 'Zeno'
// TO GET 'Z' from the firstName variable above;
console.log(firstName[0])

//lets use the TWITTER TWEET minimum words example;
let tweet = 'compose your tweet'
// prompt is a pop - up that has a text area. whatever you type in that textarea becomes your tweet value.
let tweetCount = tweet.length
alert(
  'you have used ' +
    tweetCount +
    ' characters and have ' +
    (20 - tweetCount) +
    ' remaining characters'
)
// to check this;
console.log(tweet)
console.log(20 - tweetCount)

///////////// SECOND TWITTER EXAMPLE
//another typical example is cloning the TWITTER TWEET where it AUTOMATICALLY reduces numbers of typed sentences;
//using the .length example above;

let Tweet = 'compose your tweet'
let tweetUnder20 = Tweet.slice(0, 20)
alert(tweetUnder20)
//lets shorten the code''''
alert(prompt('compose your tweet').slice(0, 20))

///////////////////////////////////////////////////////////////////////////////////////////////////

/////// GETTING A USER TO INPUT THEIR NAME AND TURNING THE FIRST LETTER INTO UPPER CASE AND THE REST TO LOWER CASE.

//create a variable that the user enters their name
let client = prompt('what is your name?')

//isolate the first character of their name
let firstChar = client.slice(0, 1)

//turn the first character to upper case
firstLetter = firstChar.toUpperCase()

//isolate the rest of their names
let restOfChar = client.slice(1, client.length)

//turn the rest characters to lower case
restOfChar = restOfChar.toLowerCase()

//concatenate the first character with the rest of the characters
let FirstName = `${firstLetter}${restOfChar}`
console.log(FirstName)
//////////////////////////////////////////////////////////////////////////

//////////////////////// DOG AGE TO HUMAN AGE FORMULA

//ask the user for the age of their dog and translate the age to a human age
let dogAge = prompt('How old is your dog?')
let humanAge = alert((dogAge - 2) * 4 + 21)
////////////////////////////////////////////////////////////////////////////

//////////////// VARIABLES SWITCH ///////////////////////////////////
let a = '3'
let b = '8'

//to switch them, make a third variable c
let c = a
a = b
b = c
///////////////////////////////////////////////////////////////////////////////

//////////////////////NUMBER INCREMENT
let x = 3
let y = x++
y += 1 //what is y? = 4
console.log(y)
//////////////////////////////////////////////////////////////////////////

///////////////////////////////////////  FUNCTIONS
/*
lets send our robots to buy some bottles of milk for 1.5 dollars each.
build a functions that says how much he buys it and how much balance remains
*/

// //Declaring the function
// function getMilk(money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     let numberOfBottles = Math.floor(money/1.5); //Math.floor rounds up decimal numbers to whole number but Math.round is note mathematically correct
//     console.log(`buy ${numberOfBottles} bottles of milk`)
//     // console.log(`I have ${money%1.5} dollar(s) remaining.`);//this gives the remainder of the balance.
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 1.5;
//   }

//   //calling the function
//   const funds = getMilk(10);
// console.log(funds);

//or

function getCoke(money) {
  console.log('leaveHouse')
  console.log('moveRight')
  console.log('moveRight')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveRight')
  console.log('moveRight')

  console.log(`buy ${calcBottles(money, 1.5)} bottles of coke`)

  console.log('moveLeft')
  console.log('moveLeft')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveLeft')
  console.log('moveLeft')
  console.log('enterHouse')
  return money % 1.5
}

function calcBottles(startingMoney, costPerBottle) {
  let numberOfBottles = Math.floor(money / 1.5)

  return numberOfBottles
}
getCoke(19)
console.log(numberOfBottles)

//////////second type of function - creating an input in the function
// classwork - HOW LONG DO YOU HAVE LEFT TO LIVE Calculator
/*
In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
*/

function lifeInWeeks(ageWish, age) {
  /************Don't change the code above************/
  let daysRemaining = ageWish - age //current age

  let days = daysRemaining * 365 //365 days in a year
  let weeks = daysRemaining * 52 //52 weeks in a year
  let months = daysRemaining * 12 //12 months in a year

  console.log(`I have ${days} days, ${weeks} weeks, and ${months} months left.`)
  /************* Don't change the code below *********/
}

lifeInWeeks(100, 29)

//////////////// third type of function.

function getFish(money) {
  return money % 5 //this delivers an output of whatever is in the function code block
}
const account = getFish(8)
console.log(account)

///////////////////////another example
//Create a BMI (Body Mass Index) Calculator

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2)
  //Math.pow(number, exponent)this method is used for 'raise to power(number, exponent)'
  return Math.round(bmi) //Math.round rounds up decimal numbers to the nearest integer (whole number)
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:



    bmi should equal 20 when it's rounded to the nearest whole number.*/

bmiCalculator(65, 1.8)

//////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////number random generation classwork
//////////////////CREATE A LOVE CALCULATOR

let yourName = prompt("What's your name?")
let partnerName = prompt("What's your partner's name?")
let n = Math.random()
n = Math.floor(n * 9 + 89)

alert(`Congrats! ${yourName} and ${partnerName}, your love is ${n}% Strong! `)

/////////////second classwork
/////////////////////create a single and double dice simulator

// let n = Math.random();
// n = Math.floor((n*6)+1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////// control flow: if and else statement
//give a conditional statement to this love calculator

let theirName = prompt("What's your name?")
let partnerName = prompt("What's your partner's name?")
let n = Math.random()
n = Math.floor(n * 9 + 59)

if ((n) => 70) {
  alert(`Congrats! ${theirName} and ${partnerName}, your love is ${n}% Strong!`)
} else {
  alert(`Congrats! ${theirName} and ${partnerName}, your love is ${n}%.`)
}

///////////////////the leap year calculator challenge

/*
    Leap Year Challenge Exercise
    💪This is a Difficult Challenge 💪

    Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

    This is how to work out whether if a particular year is a leap year:

    A year is a leap year if it is evenly divisible by 4 ;

    except if that year is also evenly divisible by 100;

    unless that year is also evenly divisible by 400.



    e.g. Is the year 2000 a leap year?:

    2000 ÷ 4 = 500 (Leap)

    2000 ÷ 100 = 20 (Not Leap)

    2000 ÷ 400 = 5 (Leap!)



    So the year 2000 is a leap year.

    But the year 2100 is not a leap year because:

    2100 ÷ 4 = 525 (Leap)

    2100 ÷ 100 = 21 (Not Leap)

    2100 ÷ 400 = 5.25 (Not Leap)


    Hint

    Remember that the modulo (%) operator gives you the remainder of a division.

    Try to visualize the rules by creating a flow chart on www.draw.io.

    If you really get stuck, you can see the flow chart I created.

    Try to run your code in this Repl.it playground and check it against the known leap years.

    SOLUTION;
    We will use an if and else statement inside the function where any year imputed must be evenly divisible by 4, 100 and 400 with no remainder.
 */

function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
      } else {
        return 'Not a Leap year.'
      }
    } else {
      return 'Not a Leap year.'
    }
  } else {
    return 'Not a Leap year.'
  }
}

isLeap(2021) //type in the year to find out if its a leap year or not.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// ARRAY CLASSWORK
//////// Create a guest list app that stores guest list names and checks to see if a guest is included or not

let guestList = ['Zeno.d', 'Bee.a', 'Ifeanyi.d', 'Ameanu.e']

let client = prompt('what is your name?')

//isolate the first character of their name
let firstChar = client.slice(0, 1)

//turn the first character to upper case
firstLetter = firstChar.toUpperCase()

//isolate the rest of their names
let restOfChar = client.slice(1, client.length)

//turn the rest characters to lower case
restOfChar = restOfChar.toLowerCase()

//concatenate the first character with the rest of the characters
let guestName = `${firstLetter}${restOfChar}`

if (guestList.includes(guestName)) {
  alert('welcome!')
} else {
  alert('Sorry, next time.')
}

//////////////////////////

///// PROGRAMMERS INTERVIEW QUESTION
/*
Write the program that prints the numbers from "1-100". but for multiples of three, print "fizz" instead of the number and for multiples of five, print "Buzz". for numbers which are multiples of both three and five, print "FizzBuzz".

SOLUTION;
*/

// let output = [];//this is an empty array
// let count = 1;

// function fizzBuzz(){

// if (count % 3 === 0 && count % 5 === 0) {

//     output.push("FizzBuzz");

// } else if (count % 3 === 0) {

//     output.push("Fizz");

// } else if (count % 5 === 0) {

//     output.push("Buzz");

// }else {
//     output.push(count);
// }

// count++;

//     console.log(output);

// }
// fizzBuzz();

// adding while loop to this snippet of code above;

let output = []
let count = 1

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz')
    } else if (count % 3 === 0) {
      output.push('Fizz')
    } else if (count % 5 === 0) {
      output.push('Buzz')
    } else {
      output.push(count)
    }

    count++
  }
  console.log(output)
}
fizzBuzz()
/////////////////////////////////

///// WHO IS BUYING LUNCH?
//lets write a function which will select a random name for a list of names. the person selected will pay for everybody's lunch.

let names = ['angela', 'john', 'chloe', 'jenny', 'joe']

function whoIsPaying(names) {
  const numberOfPeople = names.length
  //this gets the total length of names
  const randomPersonPosition = Math.floor(Math.random() * numberOfPeople)
  const randomPerson = names[randomPersonPosition]

  return `${randomPerson} is going to buy lunch today!`
}

///////////////////////////////

//following the 99 bottles of beer on the wal song;

let numberOfBottles = 99

while (numberOfBottles >= 0) {
  let bottleWord = 'bottle'
  if (numberOfBottles === 1) {
    bottleWord = 'bottles'
  }

  console.log(`${numberOfBottles} ${bottleWord} of beer on the wall. `)
  console.log(`${numberOfBottles} ${bottleWord} of beer,`)
  console.log(`Take one down, pass it round,`)

  numberOfBottles--

  console.log(`${numberOfBottles} ${bottleWord} of beer on the wall.`)
}
///////////////////////////////

////////////////////////////////////////////////LOOPS
/*
 for(let count = 1; count<=100; count++;) {}
this is used to count from 1 t0 100.

///             ///         ///
 for(let count = 100; count => 1; count--;) {}
 this is used to count from 100 t0 1.
 where count starts off being at 100 (let count = 100) and decreases by 1 each time (1--)
*/

/*

///// FOR LOOP EXAMPLE WITH FIZZBUZZ

let output = [];


function fizzBuzz(){

    for(let count = 1; count < 101; count++) {

if (count % 3 === 0 && count % 5 === 0) {

    output.push("FizzBuzz");

} else if (count % 3 === 0) {

    output.push("Fizz");

} else if (count % 5 === 0) {

    output.push("Buzz");

}else {
    output.push(count);
}



    }
    console.log(output);

}

fizzBuzz();

*/

///// WHILE LOOP EXAMPLE WITH FIZZBUZZ

/*
let output = [];
let count = 1;

function fizzBuzz(){

    while(count < 101) {

if (count % 3 === 0 && count % 5 === 0) {

    output.push("FizzBuzz");

} else if (count % 3 === 0) {

    output.push("Fizz");

} else if (count % 5 === 0) {

    output.push("Buzz");

}else {
    output.push(count);
}
 count++;

    }
    console.log(output);

}

fizzBuzz();

*/

///////////// fibonacci Generator

function fibonacciGenerator(n) {
  let output = []
  if (n === 1) {
    output = [0]
  } else if (n === 2) {
    output = [0, 1]
  } else {
    output = [0, 1]

    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1])
    }
  }
  return output
}

output = fibonacciGenerator(100)
console.log(output)

/////////////////////////////////////////////////////////////

///// HIGHER ORDER FUNCTIONS (putting functions into functions)

function multiply(num1, num2) {
  return num1 * num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function modulo(num1, num2) {
  return num1 % num2
}

function divison(num1, num2) {
  return num1 / num2
}

function add(num1, num2) {
  return num1 + num2
}

function calculator(num1, num2, operator) {
  return operator(num1, num2)
}

calculator(37, 6, multiply)

//how to play sounds with buttons in javascript
//we use a FOR LOOP;
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  //the above code explains that since i = 0, as long as 0 is lesser than number of html elements that the class `drum`(.length), then the code in the code block runs since it meets the condition. and for every time the loop runs, it adds 1 to i.

  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let audio = new Audio('sounds/tom-1.mp3')
    audio.play()
  })
  5
}
/////////////////////////////////////////////////////////

////////////////////////// CONSTRUCTOR FUNCTION SYNTAX example

function BellBoy(name, age, expertise) {
  this.name = name
  this.age = age
  this.language = this.language
  this.moveSuitcase = () => {
    pickUpSuitcase()
    move()
  }
}

/////////////////////////////////////////////////////////////////////////////

//////////////////// CALLBACK FUNCTION - what it really does.

//say we want know what key was pressed;
AddEventListener(
  typeOfEvent,
  (callback = () => {
    // all the above code does is detects the type of event and fires it using the callback function that creates an object about the event.

    let eventThatHappened = {
      eventType: 'keypress',
      key: 'p',
      durationOfKeypress: 2,
    }

    if (eventThatHappened.eventType === typeOfEvent) {
      callback(eventThatHappened)
    }
    AddEventListener('keypress', (event) => console.log(event))
  })
)

//////////////////////////////////////////////////////////////////////

//////////////////////////////////// OBJECT LITERALS sample

const person = {
  firstName: 'john',
  lastName: 'Doe',
  age: 30,
  //arrays can be added inside objects
  hobbies: ['music', 'movies', 'sports'],
  //objects can be added inside objects
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA',
  },
}

/*
to call the first name,
person.firstName

to call movies in the hobbies array,
person.hobbies[1]

to call the city in address,
person.address.city
*/

/////////////////////////////////////////////////////////////////////////

///////// test  if the current day of the week happens to be on the weekend or the weekday

//note that in javascript, days of the week starts from 0 - 6; sunday is 0, monday is 1, saturday is 6 etc.

let today = new Date()
today.getDay() === 6 || today.getDay() === 0
  ? console.log('its weekend')
  : console.log('its weekday')

////////

/// to get the current day, month, time

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
}
let day = `${new Date().toLocaleTimeString('en-us', options)}`

console.log(day)
//visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// google how to format a javascript date stackoverflow

////////////////////////

//// get the exact day of the week

switch (currentDay) {
  case 0:
    day = 'sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednessday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
  default:
}

console.log(day)

////////////////////

//// how to make the text color change depending on if its weekday or weekend

/* the ejs side;

<body>
       <% if( kindOfDay === 'Saturday' || kindOfDay === 'Sunday'){%>
        <h1 style="color: #f90f84;"><%= kindOfDay %> Todo List</h1>

    <%} else {%>
        <h1 style="color: #6a63ff;"><%= kindOfDay %> Todo List</h1>
    <%}%>
</body>


on the js file;

app.get('/', (req, res) =>{

    let today = new Date();
    let currentDay = today.getDay();
    let day = '';

switch (currentDay) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednessday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
}

res.render('list', {kindOfDay: day});

 */

/////////////////////////////////////////////

// using ejs, how do we use aninput tag to type and when we click on the button, it keeps adding the names in a role

/* in the ejs file;
<ul>
   <% for (let i = 0; i < newListItems.length; i++) { %>

        <li><%= newListItems %></li>

   <% } %>
</ul>

<form action="/" method="post">
    <input type='text' name='newItem'>
    <button type='submit' name='button'>Add</button>
</form>

////////

in the app.js

let items = ''
app.get('/', (req, res) => res.render('ejs file name', {newListItems: items}))

app.post('/',(req, res) => {
    let item = req.body.newItem
    items.push(item)
    res.redirect()
})


*/

///////////////////////////////////////////////

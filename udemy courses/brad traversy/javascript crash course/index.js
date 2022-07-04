/*
METHODS

stringify(toDos);
//the stringify method converts js files to json

////////////////// Strings method
/substring(start index, end index)
this breaks down strings, depending on the start and end index.

//////////////////ARRay method
/split(',')
splits strings into an array.

/split('')
split strings to letters into an array.

/push('mangoes');
this method adds a value to the end of the array.

/unshift('mangoes');
this method adds a value to the beginning of the array.

/pop()
this takes the last last value of an array off.

/indexOf('oranges');
this checks the index of a value in an array.

//forEach()
//(loops through the array)

//map()
//(creates a new array from an array

//filter()
//(this will create a new array based on a condition)


PROPERTIES

/typeof x
this checks what type of data the variable of x is.

///////////ARray properties
console.log(Array.isArray('fruits'))
this is to check if something is an array.

*/ 
///////////////////////////////////////////////////////////////////

/////////////////////////// ARRAYS - variables that hold multiple values

const numbers = new Array (1,2,3,4,5);
//whenever we see the 'new' keyword, we know its a constructor. hence this is construct the above code into an array.

console.log(numbers);
//////////////////////////
const s = 'Hello World!';

console.log(s.split('')); //this converts a string to an array and the empty parenthesis converts the letters to an array, including the space and the symbols.
/////////////////////////////
let blog = 'computers, IT, coding, Technology';
// to turn these strings into an array, we use a separator, which in this case is a coma and a space that separates the strings.
console.log(blog.split(', ')); 
/*
["computers", "IT", "coding", "Technology"]
0: "computers"
1: "IT"
2: "coding"
3: "Technology"
length: 4
*/

////////////////

let fruits = ["pears", "oranges", "mangoes"];

console.log(fruits[1]); // THIS WILL GIVE US ORANGES. To get a particular string in an array , we use the index of that string. note that arrays are zero-based numbers.

fruits.push('mangoes');
//this method adds a value to the end of the array.

fruits.unshift('mangoes');
//this method adds a value to the beginning of the array.

fruits.pop()
//this takes the last last value of an array off.


/////////////////////////////////////////////////


//////////////////// Object literals - key value pairs

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 30,
    //arrays can be added inside objects
    hobbies: ['music', 'movies', 'sports'],
    //objects can be added inside object
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

/*
we can log more than one thing ie;
console.log(person.firstName, person.lastName)

to access a single value, we use the dot(.) syntax;
--console.log(person.firstName) gives us john
-console.log(person.lastName) gives us doe
--to access the music in hobbies, we use console.log(person.hobbies[0])
--to access the city, we use console.log(person.address.city)
*/

//we can also add properties to the object;
person.email = 'john@gmail.com';
//if we log 'person' in the console, we will see that the email property has been added.
//////////////////////

////// using destructuring

const { firstName, lastName, address: { city } } = person;

console.log(person);
//////////////////////////////////////////////

///////  Arrays of object
const toDos = [
    {
        id: 1,
     text:'take out trash',
     isCompleted: true
    },
    
    {
     id: 2,
     text:'Meeting with Boss',
     isCompleted: true
    },
    
    {
        id: 3,
     text:'Dentist appt',
     isCompleted: false
    }
    
    ]

    /*
    -- say we wanted to grab the text 'meeting with boss';
    */
   console.log(toDos[1].text);
  

//////// json
/*
object syntax is almost identical to that of the json syntax. the only difference is json uses strictly double quotations ("").

when we want to send data to a server, we use the json format to send it to a server.
*/

//say we want to convert the above object value to json within our script, or we want to it to the server, we create a variable;

const toDosJSON = JSON.stringify(toDos);
//the stringify method converts js files to json
console.log(toDosJSON);
    
////////////////////////// LOOP 

/*
LOOP, we pass in three parameters;
-- the variable (let i = 0;)
-- the condition that needs to be met (i < 10),
-- the increment / decrement (i++ / i--). this justs add 1(i++) or subtracts 1 (i--) until the condition no longer meets.

difference between FOR loop and WHILE loop is their syntax.
*/


///////// WHILE LOOP 

let i = 0;
while (i < 10) {
    console.log(`while loop ${i}`);
    i++;
}

/////////FOR LOOP - most recommended

for (let i = 0; i < 10; i++) {
    console.log(`for loop ${i}`);

}

/////// LOOPING THROUGH ARRAYS

//using the toDos array;

for (const anyName of toDos) {
    //we used anyName because it can bear any name.
    console.log(anyName);//this shows the whole values in the array
    console.log(anyName.id);//this shows the whole ids in the array
    console.log(anyName.text);//this shows the texts
    console.log(anyName.isCompleted);//this shows the isCompleted

    //
}

///// HIGH ORDER ARRAY METHODS

//using the toDos array;

//forEach()
//(loops through the array)
toDos.forEach((toDos) => {
  //this takes in a callback function that takes multiple parameters. 
  console.log(toDos);
})


//map()
//(creates a new array from an array)
const todoText = toDos.map((toDos) => {
    //this takes in a callback function that takes multiple parameters.
    return toDos.text;
    //what this will do is create a new array containing just the text objects in the the toDos array.
});
  console.log(todoText);


//filter()
//(this will create a new array based on a condition)
const todoCompleted = toDos.filter((toDos) => {
    //say we want to return toDos that has the object - isCompleted as 'true'
  return toDos.isCompleted === true;
    
});

/* THE ARROW FUNCTION of the above function
 const todoCompleted = toDos.filter((toDos) => toDos.isCompleted === true);
 */

  console.log(todoCompleted);


///////// CHAINING ARRAY METHODS
/*
what this does is it chains more than one array method.
using the just above example;
*/

const todoCompletedText = toDos.filter((toDos) => {
   
  return toDos.isCompleted === true;
    
}).map((toDos) => {
    return toDos.text
})
/*  THE ARROW FUNCTION of the above function
const todoCompletedText = toDos.filter((toDos) => toDos.isCompleted === true).map((toDos) => toDos.text)
*/

  console.log(todoCompletedText);
  /*
  all this did was;
  -- return the object that has isCompleted as 'true'.
  -- and using the result it got, with the map() method it made a new array with the text object.

  */

  ///////////////////////////////////////////////////////

  //////////// CONDITIONAL STATEMENT

  //// IF and ELSE STATEMENTS

  const x = 0;

  if (x === 10) {
//the triple equal sign(===) also check if the datatype are the same.

      console.log('x is 10');
//this logs to the console if the 'if statement' is true and since it isn't, it skips to the next condition.

  } else if (x < 10) {

    console.log('x is less than 10');

  } else{

      console.log('x is greater than 10');
  }

  // SHORT HAND for IF(?) and ELSE(:) STATEMENT
  const y = 11;

  // say we want to create a variable based on a color;
  const color = y > 10 ? 'blue' : 'red';

  console.log(color);
  /*
  the question mark(?) sign stands for 'then'
  the colon(:) sign stands for 'else'

  all these is saying is if x is greater than 10 then (?) this, else (:) that.
  */


 //// SWITCH STATEMENTS
 const v = 11;
 const veggies = v > 10 ? 'pumpkin' : 'scent leaf';
 
switch (veggies) {
    case 'pumpkin':
//if the statement is true, ;
        console.log('veggie is pumpkin');
        break;
    case 'scent leaf':
//else if this is true;
        console.log('veggie is scent leaf');
        break;
    default:
//when the if and else are neither true;
        console.log('veggie is NOT pumpkin or scent leaf');
        break;
}
  
///////////////////////////////////////////////////////////////


//////////////////////////// FUNCTIONS 54.27

//////// declare the function;
function addNum(num1, num2) {
//this function parameters can hold two values; num1, num2
  return num1 + num2;
//this returns the result in the code block
}

/////// call the function;
//best way to call the returned function is to name it as a variable
let add = addNum(5, 2);//
console.log(add);

////// using default values in the parameter,
function timesNum(num1 = 1, num2 = 4) {
  return num1 * num2;
}
console.log(timesNum());

//// overriding the parameters
console.log(timesNum(5, 5));
//once we place values in the console.log, it overrides the default values in the function parameter (num1 = 1, num2 = 4).


//////////////// ARROW FUNCTION

// lets convert the above function to a simple ARROW FUNCTION with a return value;

//with one parameter
const num = number => number%2;
/*
-- the function here is passed as a variable.
-- the function parameter here is the first 'num' and no need for parenthesis since its just one parameter.
-- the return value here is the second 'num'.
*/
console.log(num(5));

//with two parameters
const timeNum = (num1 = 1, num2 = 10) => num1 * num2;
/*
-- the function here is passed as a variable.
-- the function parameter here is (num1 = 1, num2 = 10).
-- the return value here is num1 * num2;
*/
console.log(timeNum());


///////////////////////////////////////////////////////////////////////////



////////////////////// OBJECT ORIENTED PROGRAMMING (OOP)


///////// CONSTRUCTOR FUNCTION

// lets construct object using the CONSTRUCTOR FUNCTION with PROTOTYPES. THIS IS OUTDATED!


//say in a company, we want to store the names of employees;
function Employee(firstName, surName, dateEmployed, language) {
//when creating a constructor function, the function name starts with a capital letter
//in the parameters, we pass in the properties we want to set(firstName, surName, dateOfBirth).
  this.firstName = firstName;
// we use 'this' keyword to set the properties to objects.
  this.surName = surName;
  this.dateEmployed = new Date(dateEmployed);
//when we have a 'date' object, there are bunch of methods we can call on by typing pressing the dot (.) sign just after the date object. (this shortcut applies only to vscode). ie dateEmployed.getFullYear()

//We can add arrays in constructor functions;
  this.language = language;

//we can add methods, which are basically just functions to this 'employee' object
  this.getBirthYear = () => this.getBirthYear();
  this.getFullName = () => `${this.firstName} ${this.surName}`;
  this.job = () => `carry Goods`;
  
}

// instantiate the objects with our constructor function
// using the constructor function above, lets get the full list of our employees
const employee1 = new Employee ('john', 'Doe', '4-3-1980', ['french', 'english']);
const employee2 = new Employee ('steven', 'Doe', '4-3-1980', ['french', 'english']);
const employee3 = new Employee ('mary', 'Doe', '4-3-1980', ['french', 'english']);
const employee4 = new Employee ('mark', 'Doe', '4-3-1980', ['french', 'english']);
const employee5 = new Employee ('joy', 'Doe', '4-3-1980', ['french', 'english']);

console.log(employee1);//the get the full details of the first employee.

console.log(employee3.firstName);//this gets the first name of the third employee

console.log(employee3.dateEmployed.getFullYear());//this gets the year of the third employee.
console.log(employee2.getFullName());//this gets the full name of the second employee.
console.log(employee5.job());


////////////////// CONSTRUCTOR FUNCTIONS with CLASSES - UPDATED!!!

class HouseKeeper {
  constructor(birthName, surName, dateEmployed, language) {
    this.birthName = birthName;
    this.surName = surName;
    this.dateEmployed = new Date(dateEmployed);
    this.language = language;
  }
  getBirthYear = () =>this.BirthYear.getFullYear();
  getFullName = () =>`${this.birthName} ${this.surName}`;
  job = () => `carry Goods`;
}

const houseKeeper1 = new HouseKeeper ('pete', 'Doe', '4-3-1980', ['french', 'english']);
const houseKeeper2 = new HouseKeeper ('steven', 'Doe', '4-3-1980', ['french', 'english']);
const houseKeeper3 = new HouseKeeper ('mary', 'Doe', '4-3-1980', ['french', 'english']);
const houseKeeper4 = new HouseKeeper ('mark', 'Doe', '4-3-1980', ['french', 'english']);
const houseKeeper5 = new HouseKeeper ('joy', 'Doe', '4-3-1980', ['french', 'english']);

console.log(houseKeeper1);//the get the full details of the first housekeeper.

console.log(houseKeeper3.birthName);//this gets the first name of the third housekeeper

console.log(houseKeeper3.dateEmployed.getFullYear());//this gets the year of the third housekeeper.
console.log(houseKeeper2.getFullName());//this gets the full name of the second housekeeper.
console.log(houseKeeper5.job());

/////////////////////////////////////////////////////////////////////////////


//////////////////// DOCUMENT ORIENTED MODEL (DOM) 1.11.07

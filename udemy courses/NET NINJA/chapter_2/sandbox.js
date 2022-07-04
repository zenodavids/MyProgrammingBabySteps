console.log(1)
//  this function above allows whatever is in the bracket to appear on the browser console.

//////////////////////////////////////////////////////////

/////////////// VARIABLES ///////////////

// think of variables as a box that stores Information.
// one of the ways to use this function is to use the keyword (LET or CONST).
/*
anytime we set a variable equals to something, its called an expression ie;
setting a variables equals to a string is called a STRING EXPRESSION,
setting a variable equals to a function is called a FUNCTION EXPRESSION etc and at the end of expressions, we should always have semi colons (;)
*/

/////// LET
let age = 25

// this impLies that anywhere the word "age" is used, 25 appears.

console.log(age)

// the number "25" is what appears on the browser console.

let year = 2019

// means same as the age, the year in ths case represents 2019.

// in one console log statement, we can output several variables.

console.log(age, year)

// we can always change a variable, say we want to change the age variable, we no longer have to use the keyword (LET)

// let age = 25;
age = 30
console.log(age)

////// CONST (CONSTANT)
// say we wanted to create a variable, but we dont want the the value of the variable to Change. we use the (CONST) variable.

const points = 100
console.log(points)
// points = 50;

// observe that when we change the points to 50, it gave an error.
// hence, We use a constant if we dont want this value to be overidden by mistake at any point in the program.

// therefore, we use (LET) when we think we might change the value and (CONST) when we dont want to change the value.

////////////VARIABLES RULES
/*
There are certain rules governing variables names(age, year and points as used in this examples);
there must be no space between the variable names.(thats why we use carmel cases),
the variable names can include words, numbers, underscore and the dollar sign, but can not START with a number.
WE CAN NOT USE some words in variables;words like let, const, var etc.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// DATATYPES AT A GLANCE /////////////////////////

//Variables have seven types of data:-
// Number; 123
// strings; these are words and letters.
// Boolean; this deals with either the TRUE or FALSE factor(this is basically used to evaluate conditions).
// null; this datatype is given to variables that has no value
// undefined; this datatype is given to variables that their values have not yet been defined.
// Object; this are more complex data structures that can perform a couple of different things.
// symbols; this closely linked to objects.

/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////// STRINGS ///////////////////////////////////////////////

let email = 'zenodavids@yahoo.com'
console.log(email)
// this is just like sentences in english language. the only way to tell the browser that this is a string is through the use of quote notations ( ('') or ("") ). in other words, strings are series of letters, numbers and characters in quotes. they have properties (like .length) and we use dot notations(.) to get those properties.

////// STRING CONCATENATION

// this is the joining of two strings together;
let firstName = 'Zeno'
console.log(firstName)
let lastName = 'Davids'
let fullName = firstName + ' ' + lastName
//  space out THE ABOVE VARIABLES WITH A string that is just a space.
console.log(fullName)

/////// GETTING OR EXTRACTING A SINGLE CHARACTER FROM A STRING

// TO GET 'Z' from the firstName variable above;
console.log(firstName[0])
// note that in javascript, numbering starts from 0, 1, 2 etc.

/////// .length (STRING LENGTH - retrieving numbers of characters)

// This is getting the length of a string. in other words, it tells us how many characters are in a string; (variable name).length;
console.log(fullName.length)
//lets use the TWITTER TWEET minimum words example;
// let tweet = prompt("compose your tweet");
//prompt is a pop - up that has a text area. whatever you type in that textarea becomes your tweet value.
// let tweetCount = tweet.length;
// alert('you have used '+tweetCount+ ' characters and have '+(20-tweetCount)+ ' remaining characters');
//to check this;
// console.log(tweet);
// console.log(20-tweetCount);

/////// STRING METHODS()

// strings have different functions associated with it and these functioNs are called METHODS.
// a function is a snippet of code that performs a specific task.
// a method is just a function that is associated with a particular object or datatype. note that ".length" is a property and not a method.
// these can also be referred to as built-in snippets of codes that does things for us and we call them and know them by using brackets() at the end of them.

////.toUpperCase()
// this converts the string to upper case
console.log(fullName.toUpperCase())

////.toLowerCase()
// this converts the string to lower case
let result = fullName.toLowerCase()
console.log(result)
// some methods do alter their original values but these above methods DONT alter the original value.
console.log(result, fullName)

////.indexOf()
// this targets a specific character in a string. ie , using the email variable that is above;
let index = email.indexOf('@')
//when we pass a value into a method like this ('@'), this is called an ARGUMENT.
console.log(index)
//the logged index is the number 10. when we count the email manually, starting from '0', the @ symbol is the 10th index in the string and return the value to us (10) which will be stored inside the variable (index).

/////// COMMON STRING METHODS

//// .lastIndexOf()
//using the same email string;
let lastIndex = email.lastIndexOf('o')
// this is simply asking for the number of the last letter 'o' in the email string.
console.log(lastIndex)
//the logged answer in the console is 18. hence, lastIndex is 18.

//// .slice(x,y)
// this is used to slice a portion of a string and it has two argument; x and y. x is the index you slice FROM, y is the index you slice TO.
let sliceResult = fullName.slice(2, 9)
console.log(sliceResult)
// observe that in the console, sliceResult value started form the "2nd" index to the "9th" index.
//another typical example is cloning the TWITTER TWEET where it AUTOMATICALLY reduces numbers of typed sentences;
//using the .length example above;

// let tweet = prompt("compose your tweet");
// let tweetUnder20 = tweet.slice(0,20);
// alert(tweetUnder20);
//lets shorten the code''''
// alert(prompt("compose your tweet").slice(0,20));

//// .substr(x,y)
//this is similar to .slice but slightly different;
let nickName = fullName.substr(2, 9)
console.log(nickName)
// using this example above, the .substr(2,9) method starts from the "2nd" index and counted nine(9) characters.

//// .replace(x,y)
//like the name implies, it replaces the FIRST 'x' string with the 'y' string. examples;

let junkBox = email.replace('z', 'b')
console.log(junkBox)

/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////  NUMBERS  ////////////////////////////////////////////////////////////////////

let radius = 10
const pi = 3.14

console.log(radius, pi)

//observe that radius is a whole number (10) and pi is a decimal number(3.14) but they are both considered as numbers in javascript.

//we can do typical maths operations with numbers;

//// MATHS OPERATORS: + (addition), - (subtraction), * (multiplication), / (division), ** (raise to power of), % (modulus).

console.log(10 / 2) // this should give us 5.

let mathResult = radius % 3 //what this does is it takes the radius(which is 10), divides it by 3 and gives us the remainder which is 1.
console.log(mathResult) // the answer in the console is 1.

let piResult = pi * radius ** 2 //this is saying let pi (3.14) multiply radius (10) and the answer is the power of(**) 2.
console.log(piResult) // the answer is 314.

//// ORDER OF OPERATIONS - BIDMAS - ( B (brackets()), I (Indices**), D (division/), M (multiplication*), A (addition+), S (subtraction) )
let bidmasResult = 5 * (10 - 3) ** 2
// following the BIDMAS, we solve the brackets first, 10-3 gives us 7. next is the indices(**) and the indices of 7 is 49. last is the multiplication (*), 5 multiplies 49, equals 245.
console.log(bidmasResult) //answer is 245.

//// ++ number variable(adding 1)
let likes = 10
console.log(likes)
//what if we wanted to add one (1) to make it eleven? we can simply say ;
// likes = likes +1;
//but the shortest form or most approved way is;
likes++
console.log(likes)
//what if we wanted to add 10  to the current value of likes(11)?
likes += 10 //this can be done to other maths operators(division, etc) too.
console.log(likes) // the logged value is 21.

////-- number variable(subtracting 1)
likes-- //it brings it back to 20
console.log(likes)
//this subtracts the variable by 1.

///// NaN -Not a Number
//we get this result when we input a gibberish number that does not make sense;
console.log(5 / 'Hello') // when instances like this happens, check to see if you made any mistake in typing.

////// NUMBERS CONCATENATION
let blogResult = 'The blog has ' + likes + ' likes'
console.log(blogResult)
//this is fine, but along the line, it will get messy so instead we will use TEMPLATE STRINGS.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////// TEMPLATE STRING (or template literal) /////////////////////////////////////////

//this is just a better option than the concatenation way.
// using an blogpost for example;
const title = 'Best of the reads 2021'
const author = 'Zeno'
const like = 30

//concatenation way
let blogPost =
  'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes'
//this looks messy, a better way around this is the template string.
console.log(blogPost)

//template string way
let blogPut = `The blog called ${title} by ${author} has ${like} likes`
//notice that this is more neater than the concatenation way.
//we replace quote notations ('') or ("") with batiks (``).
console.log(blogPut)

//creating html templates
// a good case for templates is to create html templates.
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>this blog has ${like} likes</span>
`
console.log(html)

/////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// ARRAYS [] /////////////////////////////////////////////////////////////////////////////

// arrays is a function under the OBJECT datatype and we use arrays to store collections of data like a collection of strings, collection of numbers etc.

//examples

//ARRAY OF STRINGS
let ninjas = ['shaun', 'ryu', 'chun-li'] //this ia an array syntax.
console.log(ninjas)

//what if we wanted to get one of these items?
console.log(ninjas[1])
// this is us saying we want to get the first position in the array and by first, we dont mean the actual 'first' because in javascript, numbering starts from '0'. Hence its saying "get the second element" and that is 'ryu'.

//// OVERRIDING THE ARRAY POSITION
//what if we wanted to change the position '1' with a new value.
ninjas[1] = 'bee'
console.log(ninjas[1])

//ARRAY OF NUMBERS
let ages = [20, 25, 30, 35]
console.log(ages[2]) // should give us '30'

//ARRAYS OF STRINGS AND NUMBERS
// arrays are a collection of alike values of strings or numbers, but mixing strings and numbers in an array still works.
let random = ['shaun', 'crystal', 30, 20]
console.log(random)

//ARRAY OF ARRAYS
let plentyArrays = [ninjas, ages, blogPut]
console.log(plentyArrays)
//This encloses arrays into one array.

////// ARRAYS PROPERTIES

// .length
console.log(ninjas.length)
//unlike strings, .length counts the number of values, not letters in this array. hence the console logged in '3'.

///// ARRAY METHODS()

// .join()
let ninjaSpace = ninjas.join('-')
console.log(ninjaSpace)
//what this does is it joins all the array elements with a string, in the example above, we used a dash (-).

// .indexOf()
let ninjaIndex = ninjas.indexOf('bee')
console.log(ninjaIndex)
//starting from '0', 'bee' is the number '1' index in the array value.

// .concat()
let ninjaConcat = ninjas.concat('zee', 'zeebee')
console.log(ninjaConcat)
//what 'concat' does is concatenate (this is the art of joining things) our array with another array.

///DESTRUCTIVE METHODS
//(methods that alters or changes the original value )

// .push()
let ninjaPush = ninjas.push('zee')
console.log(ninjas)
//this adds a new value into the array.
//NOTE THAT this is one of the methods that alters the original value because 'ninjas' now has a new value 'zee' in its array.

// .pop()
let ninjaPop = ninjas.pop('zee')
console.log(ninjaPop)
//this is the opposite of .push. its takes out a specific value from an array.
console.log(ninjas)
//in this case, it removed 'zee' from the array.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////// NULL and UNDEFINED //////////////////////////////////////////////////

//these two datatypes are quite similar, they are both empty datatypes and hence represent a complete lack of value. only difference is null is an INTENTIONAL lack of value and undefined isnt.

///// UNDEFINED

// let score;
// console.log(score, score + 3, 'the score is ${score}');
//this is undefined because we have not given it a value yet.

///// NULL

let score = null
console.log(score, score + 3, 'the score is ${score}')
//when we output null as a value in a formular (score + 3), it takes on the value of "0".

///////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////// BOOLEANS and COMPARISONS ///////////////////////////////////////

//we use booleans to evaluate conditions in our code and to check whether things are true or false.

///////// Boolean METHODS

//// .includes()
//let email = zenodavids@gmail.com
let emailInclude = email.includes('@')
console.log(emailInclude)
//we use this method to look if a certain character appears in the string. and if it does include the character, it appears as 'true'. if it doesnt, it appears as 'false'.

/// COMPARISON OPERATORS (==) and (===)
//We use comparison operators to compare two things together and they are going to appear a boolean true or false.
//examples:
let height = 25

console.log(height == 25)
//you will notice here that we used double equals(==) instead of single equals(=).
//single equals sets  value to variables, double equals compares two factors and in this case is if height is equals to 25. since height is equals to 25, the console logs true.
console.log(height == 30) // this appears as 'false' since height is equals to 25 and not 30.

//COMPARISON NEGATE (!=)
console.log(height != 30) // this is simply saying height is "NOT" equals to 30, hence it will appear as true.
console.log(height != 25) // this is simply saying height is "NOT" equals to 25, hence it will appear as false.

//GREATER THAN (>)
console.log(height > 20) // this will appear as true because height (which is 25) is greater than 20.

//GREATER THAN or EQUALS (>=)
console.log(height > 25) // this will appear as true .

//LESS THAN (<)
console.log(height < 20) // this will appear as false because height (which is 25) is not less than 20.

//LESS THAN or EQUALS (<=)
console.log(height <= 25) // this will appear as true because height (which is 25) is not less than 25 and it equals 25.

//using strings,
let dogName = 'sean'

console.log(dogName == 'sean') //true
console.log(dogName == 'Sean') //this will appear as false because the case sensitivity.

//is letter "S" greater than letter "C"?
console.log(dogName > 'crystal') //this will appear as true because of their first letters. the letter "S" in sean comes later after the letter "C" in crystal.
// LATER ALPHABETS ARE GREATER THAN EARLIER ALPHABETS.

//lowercase letters is greater than uppercase letter in javascript.
console.log(dogName > 'Sean') //this will appear as true.

/////LOOSE COMPARISON (==)
// here, we check the value and not the type
console.log(height == 25) // this is a number
console.log(height == '25') // this is a string
//even if these are two different datatypes, it will be logged in as true because javascript evaluate the two dataypes and converts the string a number before comparing them.

////// STRICT COMPARISON (===) (MOST RECOMMENDED)
//Here, we check the value and type, hence making the evaluation and comparison stricter.
console.log(height === 25) // this is a number so it appears true
console.log(height === '25') // this is a string si it will be false

console.log(height !== 25) // this is a number, so its false
console.log(height !== '25') // this is a string, then its true

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// TYPE CONVERSION ////////////////////////////

//this simply means turning 0ne datatype into another datatype (ie turning a number into a string.)
//types;
//1-implicit(the behind-the-scene evaluation javascript does)
//2-Explicit (lets discuss this now)

///////// TURNING STRING OF NUMBERS TO NUMBERS

let marks = '100' //this is a string
console.log(marks + 1)
//what this gives is '1001', not '101'because '100' is a string and '1' is a number. we  need to convert the string into a score first before adding it to the number.
// still following the above example, since marks equals to marks,
marks = Number(marks)
//this syntax converts a string to a number datatype.
//this syntax works for only strings of numbers, does not work for strings of words.
console.log(marks + 1)

////typeof
console.log(typeof marks)
//this checks what type of datatype the specific variable holds

///////// TURNING NUMBERS TO STRING
let count = 50 //this is a number
count = String(count)
console.log(typeof count) //the console logs this as a string

///////// TURNING NUMBERS TO BOOLEANS
count = Boolean(50) //remember we can input inside the bracket the variable name or its values.
console.log(count, typeof count) //this will come out as true
//say we put another number in the bracket instead of 50;
count = Boolean(9)
console.log(count, typeof count)
//still get true because positive (1, 2, 3 ...) and negative numbers (-1, -2, -3 ...) are considered true, but only the number zero '0' is considered false.
count = Boolean(0)
console.log(count, typeof count)

//lets try a string of zero
count = Boolean('0')
console.log(count, typeof count)
//this will appear truth because strings at any length are all truth.

//lets try an empty string;
count = Boolean('')
console.log(count, typeof count)
//this appear as false because it is an empty string.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

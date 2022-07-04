///////// CHAPTER 3

///////// CONTROL FLOW



///////////////////////////////////////////// LOOP ////////////////////////////////////////////

//loops repeat instructions
//the job of the loop is to loop through a code over and over, for a certain number of times.


/////////////////// FOR LOOP

//note that there is no semi colon(;) at the end of the curly braces below.
//The opening and closing of a curly brace ( {} ) is called a 'code block'. this is just a section of code that we are trying to section off.

for(let i = 0; i < 5; i++){

}
//we create the for loop by starting with the "for" keyword,
//then we have a bracket, and inside this bracket, we have three different snippets of code; the INITIALIZATION variable( let i =0;) that says "create this variable 'i' and set it equals to '0'". this variable is like a counter and it keeps tracks of how many types we cycle the loop and how many times we run the code through the loop. 

// the next thing in the bracket (i < 5;) is a condition and this evaluates whether true or false - if the condition is true, then we are going to execute the code inside the code block. If it is not, then we wont.

//the last thing in the bracket (i++) is a final expression and this is going to execute every time at the end of the code block. its just saying that every time we loop some code at the end its going to take "i" and add one (++) to it.

//going through the code above;
//let i = 0,
//i < 5; and this is true, i is less than 5, means the code inside the code block can be executed.
//i++ means we take "i" which is "0" and add "1" to it.
// remember that "i" is no longer "0" but "1" since "1" has been added to it (i++), then it loops again.

// since i = 1, 
//means i < 5, again, this is true, i is less than 5, means the code inside the code block can be executed. we add one again to "i" and it becomes "2" and it cycles round (loops) again and again until eventually, "i" is 5, hence its no longer less than 5 then we no longer execute the code in the code block anymore. we have already looped through this enough times based on this condition "i < 5".

//once this is settled, we come out of the loop and carry on the file with the rest of the code.

//EXAMPLE - lets see the above loop in action
for(let i = 0; i < 5; i++){
console.log('in loop:', i)//remember i is 0 to begin with and every time it goes through the loop, it adds one to "i". note that we should see "0 - 4" not "5" because "i" is 5 and not less than 5.
}
console.log('loop finished');//this is only going to run once we have looped the said amount of times.

//UNKNOWN CONDITIONS
//a lot of times, we might not know how many times we want to loop through something - say data of some kind, for example, a list of users or name from a database. we dont know how many people are in that array of names and we want to cycle through them and do a follow up for example for each name and do something with that name. for example;
//lets assume we dont know the number of names that is in the array below;
const databaseNames = ['shaun', 'zeno', 'bee'];
//starting with the 'for' keyword,
//we initialize a variable to be '0' to begin with (let i = 0), thats our counter,
// (i < databaseNames.length) this simply means that whatever length of string is in the array, the "i" ensures that it circles through each one.
for(let i = 0; i < databaseNames.length; i++){
    console.log(i);
}

//lets say we want to view the names, not the numbers,
for(let i = 0; i < databaseNames.length; i++){
    console.log(databaseNames[i]);
}
//every time we go into this loop, it logs out a name in the order that they are saved till every name is out.

////// USING HTML
// Instead of logging it into the console, lets say we wanted to create a little html snippet, say a template string for each name so that we will output it to the browser.
for(let i = 0; i < databaseNames.length; i++){
    let html = `<div>${databaseNames[i]}</div>`;
    console.log(html);
}



/////////////////////////// WHILE LOOPS

// Dont get confused, the FOR LOOP and WHILE LOOP do exactly the same thing. the only difference is how we write them (the syntax).

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i)
// }

// the above syntax is for the FOR LOOP, lets turn it to the WHILE LOOP;
//first, we change the "for" to "while"
//next, we leave only the condition statement inside the parentheses (brackets)

// while(i < 5){
//     console.log('in loop:', i)
// }

//this is saying that while "i" is less than 5, let the code in the code block run.
//this is will give an error because in the this case, "i" is not even known yet.
//hence, our code is not complete. lets complete it;
 // we declare "i" outside of the loop.

//  let i = 0;
// while(i < 5){
//     console.log('in loop:', i)
// }
//running this code will result to an INFINITE LOOP because since "i" is equal to "0", we asked the code to be executed "while" "i" is less than 5... and zero being "i", is less than than 5, this will make the code to run endlessly.
//what we need, is to find a way to increment "i" (i++) every time around.
//unlike the FOR LOOP, (i++) stays in the code block;

//lets use letter "a", instead of "i".

let a = 0;
while(a < 5){
   console.log('in loop:', a)
   a++
}

// this code simply means since "i" is "0" (let i = 0;),
//and zero is less than 5 [while(i < 5)], run it.
//at the end of the code block, it says take "i" and add one to it.
//then it cycles again until it gets to where "i" isnt less than 5, then it stops.

//using names;
const names = ['john', 'zee', 'bee'];

let i = 0;
while(i < names.length){
    console.log(names[i])
    i++
}


////////// DO WHILE LOOP

//this is just an extension of the while loop.
//say we start off with "c" equals to 5, the condition will be false else this code will not run. but say we want this code to run once then dont the loop anymore.
//lets use letter "c" to initialize this code;
let c  = 5;

do{
    console.log('val of c is: ', c);
    c++;
} while(c < 5);
//the above is the do while loop syntax. and it says;
//"do" this code ( console.log('val of c is: ', c); ) once (c++;), regardless of the condition being true or false. at the end of the "do" block, we have our "while" keyword ( while(c < 5); ) and here we do add the semi colon at the end because it is not a code block anymore.

//this is a easy way to execute a code regardless whether the condition is true or false.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////// The CONDITIONAL STATEMENT ////////////////////////////////////////////////////////


//this simply means that if a certain condition is true, the it should execute the code block. unlike loop, we dont use any kind of counter variables because we only execute the code block once or not at all.

/////////// IF STATEMENT
//example;

// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old.')
// }

//say, const age is 20, we make an "if" statement saying if the age is below 20, ( if(age > 20) ), let the code in the code block be executed.
//the code block is only going to execute if the condition is true and since the condition is false (age is not over 20, age is equals 20.), the code doesnt execute.
const age = 25;

if(age > 20){
    console.log('you are over 20 years old.')
}
// now we have changed age to equal 25 and the code runs, because the statement is true.

 // we can also do "if" statements with data.
 // to check if we have a certain amount of items in an array.
 const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas.")// we use double quotes("") here because there is a single quote (') inside the string.
}
//since the strings in the ninjas array are four, the the statement is true and the code in the code block is executed.
//we can use this to check the length of a data, or

//say we want to use this to run a typical sign up password;

// const password = 'password';

// if(password.length >= 8){
//     console.log('oga you wan finish the space?')
// }

// if 'password' is greater than or equals 8, the console gets logged in. if  not it wont show.




/////////// ELSE STATEMENT

/////////////////////// ELSE IF STATEMENT (checking multiple statements)

//using a typical sign up password length;
const password = 'password';
if(password.length >= 12){// this checks if the password's length is greater or equals to 12 characters long.
console.log('password is really strong');//we get this if password's length is 12 or greater than 12.
}else if(password.length >= 8){
    console.log('password is fairly strong')//we get this if password's length is 8 or greater than 8 but less than 12.
}else{
    console.log('password not long enough')//we get this if password's length is less than 8.
}
// we can use more than one "else if" statement in a code by using the SWITCH STATEMENT to make our code look clean.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////// LOGICAL OPERATORS //////////////////////////////////////////////////////

// unlike the if and else if statement, this satisfies a combination of different conditions all at once in one set of bracket.
//there are two types; LOGICAL OR (||) and LOGICAL AND (&&)


////////////LOGICAL OR (||)

//only one of the conditions in the bracket has to be true for it to be served.
/*
const passcode = 'passcode234';
if(passcode.length >= 12 || passcode.includes(234)){
console.log('passcode is really strong');
}else if(passcode.length >= 8 || passcode.includes(234)){
    console.log('passcode is fairly strong')
}else{
    console.log('passcode not long enough')
}
*/
//we get this ( passcode is really strong ) if password's length is 12 or greater than 12, OR include the numbers'234'. even if the passcode is less than 12, so long it has the numbers'234', it will give us this.
//we get this ( passcode is fairly strong ) if password's length is 8 or greater than 8 but less than 12, OR include the numbers'234'.
//we get this if password's length is less than 8, OR include the numbers'234'.


////////////LOGICAL AND (&&)

// All conditions in the bracket has to be true.
//we can use more than one LOGICAL AND in a single bracket.

const passcode = 'passwordcode234';
if(passcode.length >= 12 && passcode.includes(234)){
console.log('passcode is really strong');
}else if(passcode.length >= 8 && passcode.includes(234)){
    console.log('passcode is fairly strong')
}else{
    console.log('passcode not long enough')
}

//we get this ( passcode is really strong ) if password's length is 12 or greater than 12 and MUST include the numbers'234'.
//we get this ( passcode is fairly strong ) if password's length is 8 or greater than 8 but less than 12 and MUST include the numbers'234'.
//we get this if password's length is less than 8 and MUST include the numbers'234'.


/////// HAVING THE LOGICAL OR (||) and AND (&&) in the same bracket

//still working with the above examples;
//const passcode = 'passcode@234';
// if(passcode.length >= 12 || passcode.includes(234) && passcode.includes('@') )
//this simply means that for this bracket of code to get served, EITHER the passcode's length has to be greater than or equals to 12 OR the passcode has to have the numbers '234' AND the '@' symbol. even if the passcode's length is 5, as long has it contains '234' and '@', it will be served.


////////////////// LOGICAL NOT (!)

//when we place an exclamation mark (!) in front of a boolean, it REVERSES the boolean - if its in front of a true value, it will be evaluated as false and vice versa.

let user = false;

if(user){

}
console.log(!true)//the exclamation mark switches this to false
console.log(!false)//the exclamation mark switches this to true

//using the same user variable, say we want this to run if a user is false;
if(!user){
console.log('you must be logged in to continue.')
}
//note that the 'if' statement only runs the code block if the condition is true
//also note that this doesnt change the value of the user( user still remain false ) it just changes the evaluation in the code bracket by switching the outcome, thus making it true.

/////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////// BREAK AND CONTINUE //////////////////////////////////////

////////////////BREAK
// say in a video game, the max score is '100' and following the array below, you want to break out of the loop when the user hits the score '100';


const scores = [50, 25, 0, 30, 100, 20, 10]// the array of scores
//initializing our counter variable to zero, 'i' is less than the length of scores and in each loop, we increment 'i' by one;
for(let i = 0; i < scores.length; i++){

console.log('your score ', scores[i]);

if(scores[i] === 100){
    console.log('Congrats, You hit the highest score');//adding this  just before we break out,
    break;//this breaks the loop, ignoring the other two scores (20 and 10).
}

}


//////////// CONTINUE

//this actually breaks out of the loop completely
//following  the above example, instead of 100, we look for the score of zero.

for(let i = 0; i < scores.length; i++){

    if(scores[i]===0){
        continue;// this breaks actually removes zero from the loop when the user hits the score of zero, this ignores the rest of the code inside the code block for this loop and go back to the top and go to the next iteration (this is the cycling in a loop).
    }

    console.log('your score ', scores[i]);
    
    if(scores[i] === 100){
        console.log('Congrats, You hit the highest score');
        break;
    }
    
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////// SWITCH STATEMENTS //////////////////////////////////////////////////////////



/*
this checks multiple possible values of a single variable;
we do this by first, typing the keyword 'switch',
then inside the bracket, we input our variable which we are evaluating('grade in this example'),
then we open up our code blocks.
*/
const grade = 'D';
switch(grade){}
/* 
next, we check the value of the variable - we will have several different cases what it could be. it could be an 'A' or 'C' or any other letter in the alphabet.
we do that by using the 'case' keyword.
 
switch(grade){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got a B!');
    case 'C':
        console.log('you got a C!');
    case 'D':
        console.log('you got a D!');
    case 'E':
        console.log('you got an E!');
    default:
        console.log('not a valid grade')
}

/*since 'grade' is 'D', the console logs case D, E, and the default.
if grade is A, means it will run the value and every other cases after it.
in other to avoid this, we use the "break" control flow.
*/
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
         break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
    break;
    case 'E':
        console.log('you got an E!');
    break;
    default://this runs when none of the cases above are mentioned.
        console.log('not a valid grade')
    break;
}

//NOTE that this uses strict equality (it takes into consideration the 'type' of datatype and the variable 'value' ) - you cannot use a string variable to get a number case.
//it is also case sensitive

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////// BLOCK LEVEL SCOPE with variables ///////////////////////////////////////////////

/*
////// CODE BLOCKS
code blocks are little sections of codes in curly braces {} that runs when some conditions are met.

///// SCOPE
this is the area in which a variable's value is relevant.


//Global scope (variables outside the code block)

this is global because when a variable (let or const [value] = datatype) is OUTSIDE the code block, it can be accessed from anything in the file, even in the code block 
*/
let screen = 30;//termed global because it is outside the code block.

if(true){

    screen = 50;//with this variable here, it can effect the change of the whole screen variable both inside and outside the code block.
    console.log('inside the code block', screen)
    
}

console.log('outside the code block', screen);
/*we can always change the screen variable inside the code block and it will match the outside console outside*/


//Local scope (variables inside the code block)

//this scope deals with the variables inside the code block. in there, changes can be made. hence the local scope is only valid inside the code block.
if(true){

   let screen = 70;//we are allowed to change the variable inside the code block. this variable changes only codes within this code block, it doesnt affect codes outside the code blocks.
    console.log('inside the code block', screen)
    
}

console.log('outside the code block', screen);
//nested code block takes the most recent variable and works with it.



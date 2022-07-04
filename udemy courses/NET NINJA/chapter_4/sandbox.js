/////////////////////////////////////////////////// FUNCTIONS /////////////////////////////////////////////////

/*
functions allows us to define a block of code which we can call and execute whenever we want. lets say the is a button in our website and we want it to perform a certain action whenever a user clicks on it, no matter how many times it is being clicked on, we use the function method.
*/ 

//////////////////////////////// function declaration (defining a function)
/*
write out the keyword 'function', 
then give the function a name (like in variables),
add a parenthesis (bracket),
and curly braces (this acts as the code block) so whenever we call this function, it executes the codes inside the code block.
*/

function greet(){

    console.log('hello there') //now we have declared a function and we can call it any point later on in our code.
}
 //if we save and check the console, it has not been logged in because we just DEFINED or DECLARED the function, we havent called it.


//////////////// invoking or calling out a function
//to call out the function above;
greet();// activates or invokes the function.
/*
n0te that we can invoke it as many times as possible in our file.
*/


///////////////////////////// function expression (expressing a function)

// this is storing functions in variables 
// we can also store functions in variables and call them in a similar way.
const speak = function(){ 
//we dont give this function a name because Function is already the name of the variable
console.log('good day')

}; //this is one of the rare times we end a code block with a semicolon (;)because this is an expression (remember expressions are variables equals to a method).
speak()//we call the function the same way.

//////////////////// HOISTING FUNCTIOnS (keeping your function expression first at the top of the javascript file)

/*this is simply declaring all the functions to be used in a file at the top, before the rest of our javascript.
at the start of our javascript file, we declare all our functions declarations at the top of the javascript.
even if you invoke the function before your declaration, it still reflects because  javascript automatically hoist the the declaration before the expression.
*/

//MOST RECOMMENDED USE IS THE FUNCTION EXPRESSION.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// RETURNING VALUES

const calcA

//the recommended way to use return values is to assign a variable to it.

//////////////////////////////////////////////////////////////

/////////////////////////// ARGUMENTS and PARAMETERS ///////////////////////////////////////////////

    
/*
we pass values into functions to do something with that value.

first, we name the function a value by putting a name in the parenthesis(we use greet in this example)*/
const talk = function(salute)/*the value in here is called a PARAMETER*/{
//what this ( function(greet) ) is create a local variable called "salute" that we can use inside the code block.
//lets output the "salute" using the console
    console.log(`${salute} Zeno`);
    
    };
    speak('Hello');//the value in here is called an ARGUMENT

////////////////////////////////////////////////////////////////////
    
  /////////////////////// FOR EACH METHOD and CALL BACK FUNCTIONS

  let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

  const logPerson = (person, index) => {
      console.log(`${index}-Hello ${person}`);
  }

  people.forEach(logPerson);
//the forEach method when passed, singles out every value in the array.

  ////////////////////////////////////////////////////////

 






















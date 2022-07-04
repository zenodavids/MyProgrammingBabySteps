// ABOUT JAVASCRIPT
/*
This is a language that powers the web,
javascript was created in ten days,
javascript was originally called LIVE SCRIPT.
it is supported by the top browsers.
*/


/*
Math.floor - rounds up a decimal number to the nearest whole number.

*/

///////////////////////////////////////FUNCTIONS
/*
lets send our robots to buy some bottles of milk for 1.5 dollars.
build a functions that says how much he buys it and how much balance remains
*/

//Declaring the function
function getMilk(money) {  
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    let numberOfBottles = Math.floor(money/1.5); //Math.floor rounds up decimal numbers to whole number
    console.log(`buy ${numberOfBottles} bottles of milk`)
    console.log(`You have ${money%1.5} dollar remaining.`)//this gives the remainder of the balance.
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  //calling the function
  getMilk(10);

  //////////////////////////////////////////////////////////////////////////////////////////////////////
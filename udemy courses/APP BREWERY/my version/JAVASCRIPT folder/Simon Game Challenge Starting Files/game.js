//NOTES

/*
STEP 1 - 6
  CREATE A NEW PATTERN

STEP 7 - 9
  SHOW THE SEQUENCE

STEP 10 - 13


*/


//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
let buttonColors = ['red', 'blue', 'green', 'yellow'];

//5. At the top of the game.js file, create a new empty array called gamePattern.
let gamePattern = [];

//12. At the top of the game.js file, create a new empty array with the name userClickedPattern.
let userClickedPattern = [];

//21. You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
let started = false;

//23. Create a new variable called level and start at level 0.
let level = 0;

//22. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(()=> {
  if (!started) {

    //24. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$('.btn').click(()=>{
    //11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  let userChosenColour = $(this).attr("id");

  //13. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

   //14. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
   playSound(userChosenColour);
   animatePress(userChosenColour);

   //28. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});

//27. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer (currentLevel) {

  //29. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    //30. If the user got the most recent answer right in step 29, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //31. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    //32. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
    playSound("wrong");

    //33. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    
    //34. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    //36. Call startOver() if the user gets the sequence wrong.
    startOver();
  }

}

//1. Inside game.js create a new function called nextSequence()
function nextSequence (){

  //32. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];


   //25. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
   level++;

   //26. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  let randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  let randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //7. Use jQuery to select the button with the same id as the randomChosenColour
  //8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  /*
  //9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
   let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();
*/

 //17. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
 playSound(randomChosenColour);
}

//18. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour){

  //19. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //20. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//15. Create a new function called playSound() that takes a single input parameter called name.
function playSound (name) {

    //16. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//35. Create a new function called startOver().
function startOver() {

  //37. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}


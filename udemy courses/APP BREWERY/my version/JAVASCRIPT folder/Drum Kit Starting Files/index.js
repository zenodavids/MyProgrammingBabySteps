//Detecting button press

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButtons; i++) {

//the above code explains that since i = 0, as long as 0 is lesser than number of html elements that the class `drum`(.length), then the code in the code block runs since it meets the condition. and for every time the loop runs, it adds 1 to i.

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  
let buttonInnerHtml = this.innerHTML;

makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);

});

}

//Detecting Keyboard press

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    
    });
   function makeSound(key) {
    switch (key) {

        case "w":
            let tom1  = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2  = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3  = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4  = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare  = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash  = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick  = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
    }

    }

    //adding animation to the buttons
    buttonAnimation = (currentKey) =>{
        let activeButton = document.querySelector(`.${currentKey}`);
        //this locates the class(ie - .w)
        
        activeButton.classList.add('pressed');
        //this adds the class (pressed) to the activeButton.

        /*say we want this code to run (let activeButton = document.querySelector(`.${currentKey}`) ) and let the class(pressed) be added to it.
        then after like 0.1 second, we need the class to be removed from it.

        we use the SET TIMEOUT FUNCTION.
        */

        // setTimeout(() => {
            
        // }, timeout);

        setTimeout(() => {
            activeButton.classList.remove('pressed');
        }, 100);


    }
    


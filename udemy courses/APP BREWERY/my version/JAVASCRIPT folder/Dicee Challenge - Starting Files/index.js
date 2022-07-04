// let randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
 
let randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png -dice6.png

let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src', randomImageSource);

//second dice
let randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png -dice6.png

let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];


image2.setAttribute('src', randomImageSource2);
// let randomImageSource2 = "images/dice" + randomImageSource2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins...
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
}
//if player 2 wins...
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 wins!";
}
//for in the case the two dices comes out the same number or draws
else if (randomNumber1 == 6 && randomNumber2 == 6) {
    document.querySelector("h1").innerHTML = "🎉 oya!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
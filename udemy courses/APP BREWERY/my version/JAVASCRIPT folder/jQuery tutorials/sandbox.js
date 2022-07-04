// this is to test the jquery file to check if it is in place.
/*
$(document).ready(() =>{
     $("h1").css("color", "green");
 })
 */

///////////////////////////////

// setting the css properties in jquery

// to GET the css property;
$('h1').css('font-size');

//to SET the property;
$('h1').css('font-size', '40px');

// to add css classes;
$('h1').addClass('class');

// to remove classes;
$('h1').removeClass('class');

// to add / remove multiple classes;
$('h1').addClass('class class1 class2');

// to check if an html element has a specific class and this will give us a boolean answer.;
$('h1').hasClass('class');
true

// to detect a keypress in jquery
$('input').keydown((event)=>{ 
    // console.log(event.key);
})


/*
this is for the input tags in the html file. but to get from the entire document, we use;

$('body').keydown((event)=>{ 
    console.log(event.key);
})

or better still;

$(document).keydown((event)=>{ 
    console.log(event.key);
})

*/

//how to show what we type 0n  the website;
$(document).keydown((event)=>{ 
    // $('h1').text(event.key);
    console.log(event.key);
 });

//////////////////////////////////////

$('h1').css('color', 'red')
$('h1').css('font-size', '100px')

//  ADDING EVENT LISTENER

// $('h1').mouseover(()=>{
//     $('h1').css('color', 'white');
//     $('h1').css('transition', '10s ease');
//     $('h1').html('<em>Good Day</em>');

    
// });

// $('h1').mouseout(()=>{
//     $('h1').css('color', 'orange');
//     $('h1').css('background-color', 'gray');
// $('h1').css('transition', '5s ease');
// })

/*
another way of add EVENT LISTENERS is by using the on() method.

$('html element').on('event we are looking to listen for', 'call back function or what we want the event to do

ie;

$('h1').on('mouseover' , ()=>{
    $('h1').css('color', 'white');
    $('h1').css('background-color', 'red');
    $('h1').css('transition', '5s ease');
    $('h1').html('<em>Good Day</em>');
})

*/

//////////////////////////////////////////

// ADDING AND REMOVING ELEMENTS WITH JQUERY

/* 
before();
this adds a new html element in the html file before the specified html tag.
*/
$('h1').before('<button>before()</button>');

/*
after();
this adds a new html element just after the specified element tag.
*/
$('h1').after('<button>after()</button>');

/*
prepend();
this adds a new html element inside the specified html element before the element content.
*/
$('h1').prepend('<button>prepend</button>');

/*
append();
this adds a new html element inside the specified html element after element content.
*/
$('h1').append('<button>append</button>');

/////////////////////////////////////////////////

// WEBSITE ANIMATIONS WITH JQUERY

////// To hide or show document;

/*

//// HIDE / SHOW
hide();
this hides the html document
$('h1').hide()

show();
this shows the hidden document.
$('h1').show()

to toggle between the hide and show ;
toggle();
$('h1').toggle()

ie;

$('button').click(()=>{
    $('h1').toggle()
})
////
issues with the above is this - its hies and shows SUDDENLY. in the case, we try the fade in and out method.


//// FADE
fadeIn();
this shows the html slowly.

fadeOut();
this hides the html element slowly.

fadeToggle();
this toggles between the fade in and fade out methods.

//// SLIDE (best for drop-down)
slideUp();
this hides the html tag in a slide animate way.

slideDown();
this shows the html tag the same slide way.

slideToggle(); 
this toggles between hiding and showing the html element.
////




*/ 

$('button').click(()=>{
    $('h1').slideUp().slideDown();
})
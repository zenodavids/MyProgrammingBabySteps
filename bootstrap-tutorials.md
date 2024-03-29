  <!--
BOOTSTRAP CLASSES;

    fw-bold == font weight is bold.
   bg-light == make the background white.
   text-light == make the text white.
   text-center text-sm-start == align text to the center but on small screens and on other screens, make it left aligned.
   text-center text-sm-end == align text to the center but on small screens and on other screens, make it right aligned.
   p-5 == padding all round size 5(padding has sizes 1 to 5 with   one as the smallest and 5 as the largest).
   pt-# == padding top.
   pb-# == padding bottom.
   py-# == top and bottom padding.
   px-# == left and right padding.
   p-lg-0 == padding on large screen 0.
   pt-lg-5 == padding top on large screens will be 5.
   ms-auto == margin left or right.
   mx - auto == center
   my-# == adds margin to the top and bottom.
   mb-# == margin bottom.
   mb-md-0 == margin bottom on medium screens and lower wil be 0.
   g-4 == this is put together with the row class and what this does is it gives the flex or grid gutter around themselves.
   gy-# == top and bottom spacing.
   gx-# == left and right spacing.
   img-fluid == to keep an image within its container.
   d-flex == to use flexbox.
   d-sm-flex == use flexbox, except on small (sm) screens.
   d-md-flex == use flexbox, except on medium (md) screens and lower ones following it.

   col-md(sm or lg) == this is used to activate the grid system
   w-50 == width of maybe an image should be 50.
   text-color == change the text color.
   lead == makes a text bigger.
   d-none == this means DISPLAY , NONE and this hides the display of what every element holds this class.
   d-none d-sm-block == hides the element on small screens but shows on other screens.
   align-items-center == aligns items to the center.
   justify-content-between == used mainly when flexbox is involved, this is used to justify contents in between
    btn-lg == for large buttons.
    btn-dark == buttons with dark background.
    rounded-circle == to convert a quare image to circle.

    POSITIONING=>
    - position-relative/absolute/fixed/static == same as the CSS position.
    - bottom-#
    - end-# == this means right is 0 in positioning



    NOTES;

    = to use BOOTSTRAP ICONS, google bootstrap icons cdn and copy the link. place the link just under the bootstrap css link.

    = to use the bootstrap icon, use the html tag; <i class="bi bi-(icon name)"></i>

    = to make an icon the size of an 'h1', create a div with the class 'h1'and the icon becomes the size of an h1
-->


<!----------------------------------------------------------------------------->

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

<!-------------------------- USING FONT AWESOME ICONS ----------------------->

<!---- go to fontawesome.com, copy the font awesome free CDN(this allows you to use their icons free of charge!);
<script src="https://kit.fontawesome.com/626d947185.js" crossorigin="anonymous"></script>
add this link just under your css link in the head of your webpage. -->

<!-- --then go search for your prefered icon, copy the icon link(it looks like this{<i class="fab fa-apple"></i>}) -->

<!-- --paste it in your html. lets say we need the icon to be inside a button, together with the text "download", then it should look like this; -->

<button type="button" class="btn btn-dark btn-lg"><i class="fab fa-apple"></i> Download</button>

<!-- --Note;
you can change the <i></i> to <span></span> tag if you so wish -->

<!--------------------------END OF USING FONT AWESOME ICONS ----------------------->
    <!--
    -- sm - small
    -- md - medium
    -- lg - large
     -->


    <!----------- COLLASPSIBLE MOBILE RESPONSIVE HAMBURBER NAVIGATION BAR -------->


1
<nav>
  <ul>
    <li>
      contact
    </li>
  </ul>
</nav>
<!-- lets make a simple navigation bar by creating the structure and adding the default BOOTSTRAP classes for the navbar. -->
2
<nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>
</nav>
      <!--
      Here you will notice three things;
-- the absence of the bulletpoint in the <li>contact</li> when the classes were added.
-- text "Contact" becomes clcikable and when you hover over it, the cursor hand changed when the <a></a> tag was added.
-- from the above, you will notice the following html elements have their own specific classes relating to the nav bar;
- the <nav></nav> tag has a default class of navbar,
- the <ul></ul> tag has a default class of navbar-nav,
- the <li></li> tag(s) has a default class of nav-item,
- the <a href="#"></a> tag has a default class of nav-link.
all these basiclly make up a simple navigation bar. -->

<!-------------------------------------------------------------------------->
<!-- lets add two more links; -->
3
<nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!-- as you can see, this as made our navigation bar vertical(from up to down) but we want it to be horinzontal (left to right). because of this, we need a class called the "navbar-expand{-sm]-md]-lg]-xl}" in the <nav></nav> and this will expand the navigation items (the <li></li> tag because it contains the class, "nav-item") depending on how large the screen size is. -->
4
<nav class="navbar navbar-expand-lg">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!-- we used -lg (large) because we want the navbar horinzontal on desktop and a dropdown menu later on.
and this will make it vertical on the other smaller screen devices like the tablet, mobile phones etc -xl (extra large) and -xxl (extra extra large!).
using -md (medium) makes the navbar horinzontal on tablets and above. this includes desktops. and makes vertical on smaller screens i.e mobile phones.
while-sm (small) makes it horinzontal on small screen sizes . -->

<!----------------------------------------------------------------------->
<!-- at the moment, our navigation bar isnt looking obvious yet because all there is now is just three links(Contact, Downloads and Pricing) so lets add styles to it. -->
5
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!--
--adding the bg[-light[-dark[-white[-transparent[-info, etc class on our <nav></nav> tag gives our navbar background color and our nav bar now has a light background.
--adding the navbar-light class changes our link fonts color from blue to gray.
-->

<!----------------------------------------------------------------------->
<!-- what if we wanted our brand logo or name?
we will add a class called navbar-brand on a new <a href="logo location here">brand name here</a> tag, just under the <nav></nav> and on top the <ul></ul> if we want the brand name/logo on the left. because HTML follows the order in which tags are placed-->

<!-- For Brand name -->
6
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand name here</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!-- For logo -->
7
<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="#">
    <img src="logo.png" alt="logo">
    Brand name here</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!-- lets say we want to move our navbar links to the right, and leve our logo/ brand name on the left, we need to first i dentify the html tag or container that holds all the links at here, it happens to be the <ul></ul> tag.
aso we use a class named ms-auto to move them to the right. -->
8
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand name here</a>
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</nav>

<!-- ms-auto(m is for margin, start is for left or right[this moves items on the left to the right and vice versa], auto mens to automatically adjust to any screen size to fit it) -->

<!------------------------------------------------------------------------------------------------------------------------------------------->
<!--
to make this MOBILE RESPONSIVE, let us make it have HAMBURGER dropdown menu for smaller screen sizes and what we need in this case is called the TOGGLER.
--go to getbootstrap.com and copy the button tag under the navigation bar and paste it just above the brand name link.
--then create a <div class=""></div> with a class of collapse navbar-collapse and house our brand name link and the <ul></ul> with its children.
--lastly, we need to add the same id that is on the button (in its  data-target id that in the case data-target="#navbarSupportedContent" on the button) to the div in step two. so we add it on the div in this format; id="navbarSupportedContent".
 -->

9
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Brand name here</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Downloads</a>
    </li>
  </ul>
</div>
</nav>
<!--
you will notice doing thesev hides both the brand name. this is because we have enclose all of the elements inside the COLLASPSIBLE div.
to make the brand name show in small sizes, cut it out of the div and note that where you paste the brsnd name matters a lot;
-- if it is below the <button></button> tag, the brand name appears on the right and our hamburger appears on the left.
-- if it is above the <button></button> tag, the brand name appears on the left and hamburger on the right.
this is because the html elements are displayed in the order in which they are placed.
-->

<!------------------------------------------------------------------>

other nav bar types are:

<!-- -- BRAND NAME ans SEARCH -->
10
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

<!-- --FIXED TOP -->
11
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>



  <!--------- END OF COLLASPSIBLE MOBILE RESPONSIVE HAMBURBER NAV BAR ------->


<!--------------------- BOOTSTRAP CONTAINERS -------------------->

<!-- using a container, most often a <div class=""></div> is essential in html because it allows you to horinzontally center or pad out your content.
it is also used mostly to differently style a webpage.

To make a container fluid by using bootstrap, add a class of container-fluid and it adapts to the width of any screen size by making a 100% width automatically-->


<!---------------------END OF BOOTSTRAP CONTAINERS -------------------->




  <!--------------------------- BOOTSTRAP BUTTONS ------------------------>

  <!-- the following buttons are the basic buttons bootstrap has; -->
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>

  <button type="button" class="btn btn-link">Link</button>

  <br>
  <br>

  <!-- --next is the outlined buttons;
once hovered over, expose the color of the outline in the button background-->
  <button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>

<br>
<br>
<!--------------------------------------------------------------------------->

<!-- BUTTON SIZES -->

<!-- -- large buttons -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>

<br>
<br>
<!-- -- small buttons -->
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
<!--------------------------------------------------------------------------->

<br>
<br>
<!-- BLOCK level buttons -->
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>

<br>
<br>
<!--------------------------------------------------------------------------->

<!-- -- button tags -->
<a class="btn btn-primary" href="#" role="button">Link</a>
<!-- we can use role="button" to link to link to the same page rather than linking outside of the page -->
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">

<br>
<br>
<!--------------------------------------------------------------------------->

<!-- active state(this makes the buttons appear clicked, once clicked on.) -->
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>

<br>
<br>
<!--------------------------------------------------------------------------->
<!-- check and radio buttons -->
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>
<!--------------------------------------------------------------------------->
  <!---------------------END OF BOOTSTRAP BUTTONS -------------------->



  <!--------------------------- BOOTSTRAP GRID ------------------------>

  <div class="row">
      <div class="col" style="background-color:red; border:1px solid;">
          col
      </div>
      <div class="col" style="background-color:red; border:1px solid;">
          col
      </div>
  </div>

       <!--the whole idea here is that the more the <div></div> tag with the class="col" , the more it evenly shares
      the width of the screen evenly among them. the only issue here is it wont be mobile responsive-->

  <!---------------------------------------------------------------------------->


      <!--what if we wanted a column that only took up half of the screen?-->
      <div class="row">
        <div class="col-6" style="background-color:green; border:1px solid;">
          col-6
        </div>


      <!--notice that the column took only 50% of the screen, because the total unit of rows in bootstrap can -->
      <!--take is 12. another wonderful part about this is we can use numbers to determine how many rows and the sizes-->
      <!--they can take-->

      <!--lets add another <div> class of column 3 (col-3)-->
        <div class="col-3" style="background-color:cyan; border:1px solid;">
          col-3
      </div>
      <!--you notice that this only took the quater of the page because 3 + 3 + 3 + 3 is 12-->
      <div class="col-2" style="background-color:cyan; border:1px solid;">
        col-2
    </div>
    <div class="col-1" style="background-color:cyan; border:1px solid;">
      col-1
  </div>
  </div>
<!-- you can also use other numbers like seen above to make up the 12 rows => 6 + 3 + 2 + 1 = 12.
the problem with this is as the size of the screen reduces, the columns dont change in width, thus it is not mobile responsive-->

<!----------------------------------------------------------------->

<!-- TO MAKE IT MOBILE RESPONSIVE; -->

<div class="row">
  <div class="col-md-6" style="background-color:gold; border:1px solid;">
    col-md-6
  </div>
  <div class="col-md-6" style="background-color:gold; border:1px solid;">
    col-md-6
  </div>
<!-- this means that we want our column to be 6 units (thats 50% 0f the page),
and it should be responsive to large (lg) and medium (md) size screens like laptops, desktops, ipads and tablets.any screen smaller than these(say iphones and smart phones), each column takes the full width.-->
</div>

<!----------------------------------------------------------------------->

<!-------------------------------------------------------------------
Lets make it more specific:

--four columns for desktop sizes, (12 /4 = 3units) gives us lg-3 and 4 divs with col
--three rows for tablet screen sizes, (12/3 = 4units) gives us md-4 and 3 divs with col
--two rows for mobile scren sizes. (12/2 = 6units) gives us sm-6 and 2 divs with col
------------->

<div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:#6f42c1; border:1px solid;">
    col-md-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:#6f42c1; border:1px solid;">
    col-md-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:#6f42c1; border:1px solid;">
    col-md-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:#6f42c1; border:1px solid;">
    col-md-6
  </div>

</div>

  <!-------------------- END OF BOOTSTRAP GRID---------------------->



  <!--------------------- BOOTSTRAP CAROUSEL -------------------->

  <!-- The following are types of bootstrap carousel;

 ---- the AUTOMATIC carousel (without buttons) -
 (slides by itself, depending on the seconds set by developer.),

---- the AUTOMATIC carousel (with buttons).
(slides by itself, and is still supported with buttons.)

---- the MANUAL carousel.
(this is a static carousel that doesnt autoplay)

---- CAROUSEL with thumbnails
-->



<!--

 ---- the AUTOMATIC CAROUSEL (without buttons).

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active first-slide">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item second-slide">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item third-slide">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div>
-->

<!--

-- MAKE THE CAROUSEL SLIDE

the above carousel SLIDES automatically because class="slide" is added in the <div></div>. if you remove "slide", it stops sliding automatically and just changes.

-- CHANGE THE CAROUSEL SLIDING SPEED

the above carousel slide duration is very slow. although it is not o to make carousel speed very fast, lets change the speed and the default speed is 5000 miliseconds (note that 1000 miliseconds is 1 second).

lets use say 1000 miliseconds;
we will use -data-interval="1000"
-->

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="1000">
  <div class="carousel-inner">
    <div class="carousel-item active first-slide">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item second-slide">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item third-slide">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div>
<!---------------------------------------------------------------->
<br>
<!--
---- AUTOMATIC CAROUSEL with buttons.

the only difference between this and the one above is the presence of the NEXT and  PREVIOUS buttons;

<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>

this is placed just before the last closing </div> element.
-->

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="1000">
  <div class="carousel-inner">
    <div class="carousel-item active first-slide">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item second-slide">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item third-slide">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <!-- the buttons are placed here -->
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!--lets go through the lines of the code above so that we understand what the code is all about;

--- the first line is a parent div that has;
- the carousel id that must match the the buttons href that must start with the # symbol,
- some custom bootstrap classes like carousel(this says that this div is going to be a carousel) and slide(that the animination is going to be slide).
- data-ride - decides whether to autoplay or not.

--- next div contains the carousel inner - this contains all the carousel items.

--- the divs inside carousel inner has a class of;
- "active" - only the first div inside the carousel inner that must contain this class.
- "carousel-item" - this class gives the divs the right to house the actual carousel slides.

the divs inside carousel inner has the slide contents (this can be either pictures or texts or videos etc)
for <img> tags, it must have default classes of "d-block w-100"

--- BUTTONS and there majorly two buttons;(use <a> or <button> tags... <a> tags are much more recommended.)
- the first button has the class "carousel-control-prev" and a class of data-slide="prev" to enable the button to navigate left.
- the second button has the class "carousel-control-next" and a class of data-slide="next" to enable the button to navigate right.
- both buttons has an href that matches the id of the main parent div to know which carousel to target when you have multiple carousels in your html.
- both buttons must have the role="buttons"(when an <a> tag is in use.) or type="button"(when the <button> tag is in use.) to change our <a> tag to a button.

--- <span> tag - there are majorly two spans; one for the button icon, the other for SCREEN READERS.
- the first <span> tag has a class of "carousel-control-prev/next-icon" - this is the bootstrap PREV or NEXT button icon,
- aria-hidden="true" this is an attribute that makes your website user-friendly for people with disabilities.

- the second <span> has a class of;
"sr-only" - this means for screen readers only - also for people with disabilities.
"visually-hidden" this hides the text in the span, leaving just thebuttons to be visible.
(Note that the the second <span> can be removed if you dont want it to be user-friendly to impaired people.)





-->

<!--
lets go through

data- can also be used for other functions. i.e;

-- data-interval="5000"

this works on the sliding speed of the carousel and the default speed is 5000 miliseconds ( that's 5 seconds).

-- data-keyboard="true/false"

if the carousel should react to keyboard values ie going left and right(use of left and right arrow keys).

-- data-pause="hover/false"

if set to "hover", the carousel slide will pause when the mouse is on the center of the carousel and continue sliding when the mouse leaves the carousel.
if set to "false", the mouse wont stop it.

-- data-ride="carousel/false"

if set to carousel, it autoplays the carousel and if set to false, it stops playing the carousel hence it needs buttons to next the carousel manually.

this leads to the MANUAL carousel that deals with buttons.
<!----------------------------------------------------------------->
<br>
<!--
---- MANUAL CAROUSEL

This is a static carousel that doesnt autoplay and is manually slided with buttons.

in order to achieve this;

-- data-ride="false" (data-ride will be set to false)
 because it will be manually riden with buttons.

-- data-interval will be absent.
since it will be manual, there will be no need for THE ANIMIATION  of auto-scrolling.

w-100

-- the absence of the "ride" class in the parent div.

-- Notice that the buttons in the above carousel dont work?
because the buttons have a href="" that needs to target the id in the carousel housing <div></div>
-->

<div id="carouselExampleButtons" class="carousel" data-ride="false">
<!-- targets the id in this div above -->
  <div class="carousel-inner">
    <div class="carousel-item active first-slide">
      <img class="d-block" src="..." alt="First slide">
    </div>
    <div class="carousel-item second-slide">
      <img class="d-block" src="..." alt="Second slide">
    </div>
    <div class="carousel-item third-slide">
      <img class="d-block" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <!-- and the href in this anchor tag -->
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleButtons" role="button" data-slide="next">
    <!-- and the href in this anchor tag too! -->
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!------------------------------------------------------------------>
<br>

<!-- MOST RECOMMENDED FOR SLIDES WITH PICTURES ----------------->

<!--

---- CAROUSEL WITH PICTURE THUMBNAILS

-->
<!-- carousel wrapper -->
<div
id="carouselExampleIndicators"
class="carousel slide carousel-fade"
data-ride="carousel"
>
<!-- slides -->
  <div class="carousel-inner mb-5">
    <div class="carousel-item active">
      <img
      class="d-block w-100"
      src="images/first-slide.jpg"
      alt="First slide"
      >
    </div>
    <div class="carousel-item">
      <img
      class="d-block w-100"
      src="images/second-slide.jpg"
      alt="Second slide">
    </div>
    <div class="carousel-item">
      <img
      class="d-block w-100"
      src="images/third-slide.jpg"
      alt="Third slide">
    </div>
  </div>
  <!-- end of slides -->

  <!-- Controls -->
  <a
  class="carousel-control-prev"
  href="#carouselExampleIndicators"
  role="button"
  data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>

  <a
  class="carousel-control-next"
  href="#carouselExampleIndicators"
  role="button"
  data-slide="next">
    <!-- and the href in this anchor tag too! -->
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>

  <!-- end of Controls -->

<!-- THUMBNAILS -->
<div class="carousel-indicators" style="margin-bottom:-20px">

<a
role="button"
href="#carouselExampleIndicators"
data-slide-to="0"
class="active"
aria-current="true"
aria-label="Slide 1"
style="width:100px;"
>
<img
class="d-block w-100"
src="images/first-slide.jpg"
class="img-fluid"
alt="first slide"
>
</a>
<a
role="button"
href="#carouselExampleIndicators"
data-slide-to="1"
class="active"
aria-current="true"
aria-label="Slide 2"
style="width:100px;"
>
<img
class="d-block w-100"
src="images/second-slide.jpg"
class="img-fluid"
alt="first slide"
>
</a>
<a
role="button"
href="#carouselExampleIndicators"
data-slide-to="2"
class="active"
aria-current="true"
aria-label="Slide 3"
style="width:100px;"
>
<img
class="d-block w-100"
src="images/third-slide.jpg"
class="img-fluid"
alt="first slide"
>
</a>

</div>
<!-- end of THUMBNAILS -->
</div>
<!-- end of carousel wrapper -->

<!---------------------END OF BOOTSTRAP CAROUSEL -------------------->


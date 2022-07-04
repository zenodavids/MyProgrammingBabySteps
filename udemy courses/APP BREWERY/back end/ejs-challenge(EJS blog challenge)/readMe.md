best way to install dependencies locally is to use "npm install" and this works only when the dependencies are stated in the package.json file, inside the dependencies object. this is most important when we want to use someone else code.

///////////////////////////////////////////////////////////

\\\\\\\\\\CHALLENGE 1 - make the home page show with just an h1 tag that says 'home'

>>>>in app.js;

app.get('/', (req, res) =>{
  res.render('home');
});

  'home' is the name of the home route.


////////////////////////////////////////////////////////////

\\\\\\\\\\CHALLENGE 2 - make the homeStartingContent thats in the app.js be displayed in the home.ejs in a paragragh tag.

>>>>>>in the homeContent.js(the home module);
exports.homePage = () => {
    const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

    return homeStartingContent;
}

>>>>in the app.js;
const homeWriteUp = require( __dirname +'/homeContent.js');

app.get('/', (req, res) =>{
  const frontPage = homeWriteUp.homePage()
  res.render('home', {homeContent: frontPage});
});

>>>>>in the home.ejs;
<h1>Home</h1>
<p> <%= homeContent %> </p>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 3 - add the header and footer

>>>>in the home.ejs;
<%- include('header') -%>

<%- include('footer') -%>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 4
- create a directory named 'partials'inside the 'views' folder.
- move the header and footer file into the partials directory.
- redirect the header and footer files so they work again.

>>>create the direstory
>>>move the files
>>>in the home.ejs;
add'partials/' and this direct the js engine to look into views and into partials to access the header and footer files
<%- include('partials/header') -%>

<%- include('partials/footer') -%>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 5 - set up the 'about' and 'contact' page
>>>>> same as challenge 2

///// for the about page
>>>>>>in the about.js(the about module);
exports.aboutPage = () => {
    const aboutContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

    return aboutContent;
}

>>>>in the app.js;
const aboutWriteUp = require( __dirname +'/about.js');

app.get('/about', (req, res) =>{
  const frontPage = aboutWriteUp.aboutPage()
  res.render('about', {aboutContent: aboutfrontPage});
});

>>>>>in the about.ejs;
<%- include('partials/header') -%>

<h1>About</h1>
<p> <%= aboutContent %> </p>
<%- include('partials/footer') -%>
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///// for the contact page
>>>>>>in the contact.js(the contact module);
exports.contactPage = () => {
    const contactContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

    return contactContent;
}

>>>>in the app.js;
const contactWriteUp = require( __dirname +'/contact.js');

app.get('/contact', (req, res) =>{
  const contactfrontPage = contactWriteUp.contactPage()
  res.render('contact', {contactContent: contactfrontPage});
});

>>>>>in the contact.ejs;
<%- include('partials/header') -%>

<h1>contact</h1>
<p> <%= contactContent %> </p>

<%- include('partials/footer') -%>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 6 - link the navbar in the header to the current pages

>>>>in the header.ejs;
in the nav tag, inside the anchor tag we add '/' for the homepage route and '/about' and '/contact' to the about and contact page respectively

<li class="nav-item" id="home"><a href="/" class="nav-link" >HOME</a></li>
<li class="nav-item" id="about"><a href="/about" class="nav-link" >ABOUT US</a></li>
<li class="nav-item" id="contact"><a href="/contact" class="nav-link" >CONTACT US</a></li>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 7 - create a compose page that will have an input tag and a button and set up the page in the server

>>>>>>>>>>>>>>>same as challenge 2 and 5

>>>> in the app.js;
app.get('/compose', (req, res) =>{
res.render('compose');
});

>>>> in the compose.ejs;
<%- include('partials/header') -%>

<h1>Compose</h1>
<div class="container">
     <form action="/compose" method="post">
        <input type="text" name="postTitle">
        <button type="submit" value="">Publish</button>
    </form>
</div>

<%- include('partials/footer') -%>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 8 - when we type something in the compose input, it should appear in the terminal

>>>> in the compose.ejs;
give the input tag a name attribute of 'postTitle'
 <input type="text" name="postTitle">

 >>>> in the app.js;
 app.post('/compose', (req, res) => {
console.log(req.body.postTitle);
});

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 9 - using bootstrap, modify the compose.ejs page so it has the title input and text area input

>>>>in the compose.ejs;
<form action="/compose" method="post">
    <div class="form-group">
      <input type="text" name="postTitle" class="form-control" id="title" placeholder="The title of your post goes here...">
      <textarea name="postBody" class="form-control" id="body" cols="5" rows="5" placeholder="The body of your post goes here..."></textarea>
    </div>
      <button type="submit" class="btn btn-primary mt-2">Publish</button>
</form>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 10 - create a javascript OBJECT with the variable name 'post' it has to store the name of both the input and textarea (postTitle and postBody)

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  }
});


/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 11
- create an empty array that is also a global variable and add this new object to that array
- once you are done, we redirect to the root route(the homepage)
- in the root route, we log all the post inside the post array

>>> create an empty array that is also a global variable and add this new object to that array

let posts = []; //line 17

>>>>put the newly created js object in challenge 10 inside the 'posts' array
//compose page
app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  }
  >posts.push(post);
  res.redirect('/') //this redirects us back to the home route.
});

>>>>we redirect to the root route(the homepage)//compose page
app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  }
  posts.push(post);
  >res.redirect('/')
});

>>>>in the root route, we log all the post inside the post array
app.get('/', (req, res) =>{
  const frontPage = homeWriteUp.homePage()
  >console.log(posts);
  res.render('home', {homeContent: frontPage});
});


/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 12
- delete all the console.log statements inside the app.js except the one assciated with our server.
- instead of logging the posts from inside the app.js, we should log it in the home route instead.

>>>app.js
- line 22
add another key and value pair (posts: posts);
 >>>res.render('home', {
    >>>homeContent: frontPage,
    posts: posts
  });

>>>home.ejs
line 5
<% console.log(posts) %>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 13
- create a for loop that logs only the input of the title from the compose.ejs file

>>>home.ejs
   <% for (let i = 0; i < posts.length; i++) { %>

            <% console.log(posts[i].title) %>
    <% } %>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 14
- change the for loop statement in challenge 13 to a forEach method
>>>home.ejs
<% posts.forEach((post)=> console.log(post.title)) %>


the forEach method is used to loop through arrays

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 15
- replace the console log in challenge 14 so that once you type in the title  and content in the compose page, they will show in the home page.

>>>home.ejs
    <% posts.forEach((post)=> { %>
    <h1><%= post.title %></h1>
    <p><%= post.content %></p>
<% }); %>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 16
-create a get request so that when we type '/posts/anything', it should show on the terminal, but nothing changes in the home page

>>>app.js
app.get('/posts/:topic',(req, res)=>{
  console.log(req.params.topic);
});

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 17
go to the compose page and typpe in the title of the post and the content too. and if the title matches the one in the req.params, we console 'match found'

>>>app.js line

app.get('/posts/:topic',(req, res)=>{
  const requestedTitle = req.params.topic;
  posts.forEach((post)=> {
    let storedTitle = post.title
    storedTitle === requestedTitle ? console.log('Match found') :console.log('nope, shit is wrong')
  })

});

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 18

- using lowerCase method in the LODASH (_) library, redo the previous challenge so that when we type a string starting with an upper case and even two words with a space between them, they still give us 'match found'

>>>app.js
app.get('/posts/:topic',(req, res)=>{
  const requestedTitle = _.lowerCase(req.params.topic);
  posts.forEach((post)=> {
    let storedTitle = _.lowerCase(post.title)
    storedTitle === requestedTitle ? console.log('Match found') :console.log('nope, shit gone wrong')
  })

});
/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 19

- make the posts to stand on its single page so that when we input its url (i.e http://localhost:3000/posts/day-1), it opens on its on page

>>>app.js
//posts to appear on single page
app.get('/posts/:topic',(req, res)=>{
  const requestedTitle = _.lowerCase(req.params.topic);

  posts.forEach((post)=> {
    const storedTitle = _.lowerCase(post.title)

   if (storedTitle === requestedTitle){
    res.render('post', {
      title: post.title,
      content: post.content

    });
   }
  });

});

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 20

- reduce the post content to only a 100 characters

>>>home.ejs
 <p><%= post.content.substring(0, 100)%>...</p>

/////////////////////////////////////////////////////////

\\\\\\\\\\\\CHALLENGE 21

- continue from the previous challege and a 'read more' after the end of the first 100 characters. when the read more is clicked on, it opens to a seperate page for only the post

>>>> home.ejs
<h1><%= post.title %></h1>
    <p>
        <%= post.content.substring(0, 100)%>...
        <a href="/posts/<%= post.title %> ">Read more</a>
    </p>

/////////////////////////////////////////////////////////


how to access the header and footer in the partials folder.

'include('partials/header')'

/////////////////////////////////////////////////////////

to make links in the navbar accessible,
we use the header.ejs file;

<!-- <a href="/" --> for the home route,
<!-- <a href="/about" --> for any other route.

///////////////////////////////////////////////////////////
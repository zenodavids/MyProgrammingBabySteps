/////////   CREATING OUR SERVER WITH EXPRESS
/* 1
-- using the command line, we create a new directory.
-- we cd into the directory and create a new file called server.js
-- still in the same folder, we initialize npm using 'npm init' with our new file as the start point.
-- in the same directory, we install express 'npm install express'
*/

// 2 - we require express
const express = require('express')

// 3 - we create a new constant called 'app' and this is simply a function that represent the express module('express()') then go to our hyper to run 'node server.js'.
const app = express();

// 4 - this determines what should happen when a browser gets in touch with our server and makes a get request.
/*
-- the first parameter it takes is the location of the get request which is the root of our website and this is represented by a forward-slash('/'). this is basically our homepage.
-- when the get request happens, we trigger a callback function which have two parameters;  request(req) and response(res).
-- get method(get())defines what happens when someone makes a get request to the home root(homepage)
*/
app.get('/', (req, res) => res.send('<h1>Hello World</h1>'))

app.get('/contact', (req, res) => res.send('contact me asap!'))//these are routes just that redirects our users to the contact page, instead of opening multi-pages on HTML

app.get('/about', (req, res) => res.send('am dance, fashion and web developer'))//to redirect to the About page, instead of opening multi-pages on HTML

app.get('/hobbies', (req, res) => res.send('<ul><li>sew</li></ul>'))
// 6 we then go to our browser and type in 'localhost:4000' and hit ENTER, the browser goes to the location ('/') and sends a request (req) to the server to get some data back and this triggers the callback function who in turn sends a response (res.send [respond.send])

// 5 - we set app to listen for server and give it a callback function that logs 'server has started' and run the server with 'nodemon' instead of node.
app.listen(2000, () => console.log(`server started at port 2000`))

/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
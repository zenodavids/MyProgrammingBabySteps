WORKING WITH WEATHER API.

--- initialise npm on the hyper terminal

- npm init

--- install express on the hyper terminal

- npm install express

--- require express

- const express = require('express');

--- require body-parser

- const bodyParser = require('body-parser');

--- initialise the express module

- const app = express();

---we use this to get the output of the form

- app.use(express.urlencoded({extended: true}));

--- get the callback function of the port that links to the server to listen to and this must be at the bottom of the file.

- app.listen(2000, () => console.log('server is running on port 2000'));

GETTING INFORMATION FROM THE SERVER AND INTERNET
(setting up the API to work)

-- Use the get method to get information from the server or the internet when the user tries to go to the route and a callback function of what will happen.

- app.post('/', (req, res) => {}

-- create a variable (inside the app.post callback function) named 'url' that represents the API url.

- const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=f425a7e0357b8ba6b2af062f94707c1f';
  //make sure to ALWAYS INCLUDE the 'https//:'.

-- use the http module to get a request over the internet and a callback function. (inside the app.get callback function).

- https.get(url, (response) =>{}

-- the 'response.on' method has a string called 'data' and a callback function whose parameter is named 'data' and this houses the following;

- const weatherData = JSON.parse(data);
  //this converts the data from the API to a javascript object

- const temp = weatherData.main.temp
  //this accesses the temperature in the JSON file

- const weatherDescription = weatherData.weather[0].description
  // this accesses the description of the weather in the JSON file

- const icon = weatherData.weather[0].icon
  //this accesses the icon reprenting the weather condition in the JSON file

- const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
  // this is the url for the api icon, and here we inserted the icon variable.

SENDING DATA BACK TO THE USER

-- we use this(res.write and res.send) to send multiple lines of html. this acts as the 'return' keyword in a function.
-- we can only have 0ne res.send, but we can have multiple res.write.
-- to attach an html file;res.write;

- (`<h1>the temperature in Lagos is ${temp} degrees and it there will be ${weatherDescription}</h1>`);
- res.write(`<img src=" ${imageURL} ">`);

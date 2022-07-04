const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()
// this places the express() modus inside a variable and gives it a name (app). then is used all over the code

app.use(express.urlencoded({ extended: true }))
// the uses body parser to grab data from sign up forms

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

app.post('/', (req, res) => {
  // the '.post' must align with the form method attribute and in the home route('/')
  const query = req.body.city
  const unit = Number(req.body.unit)
  const url = `https://api.openweathermap.org/data/2.5/weather?q= ${query} &units= ${unit} &appid=f425a7e0357b8ba6b2af062f94707c1f`
  https.get(url, (response) => {
    // we use this when we want to 'get' 'response' from an external resource
    console.log(response.statusCode)
    // this  confirms the current condition of the code
    response.on('data', (data) => {
      // this is used to get hold of the data that will be shown to the client

      const weatherData = JSON.parse(data)
      // this is usd to convert data from string/buffer to a JSON Format
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description

      console.log(weatherData)
      console.log(temp)

      const icon = weatherData.weather[0].icon
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
      // the open weather map api gives a diiferent url in images wil be used to represent the weather

      res.write(`<h1>the temperature in ${query} is ${temp} degrees</h1>`)
      res.write(`<p>${weatherDescription} today in ${query}</p>`)
      res.write(`<img src=" ${imageURL} ">`)
      res.send()
      // personally, i fill res.send works when the submit button is clicked.

      // we can have multiple res.write, and even enclose an html tag in it. but can have only one res.send
    })
  })
})

app.listen(1000, () => console.log('server is running on port 1000'))

// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', (req, res) => {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=Abuja&units=metric&appid=f425a7e0357b8ba6b2af062f94707c1f';

//     https.get(url, (response) =>{
//         console.log(response.statusCode);
//         response.on('data', (data) => {
//             const weatherData = JSON.parse(data);//JSON.parse   converts data from the API to a javascript object.
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].  description;

//             console.log(weatherData);
//             console.log(temp);

//             // getting  the weather icon.
//             const icon = weatherData.weather[0].icon
//             const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
//             //end of weather icon

//             res.write(`<h1>the temperature in Abuja is ${temp} degrees</h1>`);
//             res.write(`<p>${weatherDescription} today in Abuja</p>`);
//             res.write(`<img src=" ${imageURL} ">`); //shows the weather icon
//             res.send();
//         })
//     })
// });

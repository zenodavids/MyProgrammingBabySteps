const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

//this helps grab data from the signup form
app.use(express.urlencoded({extended: true}));

//to load up static and local files, we put all the local and static files in a folder called 'public' and use this line of code.
app.use(express.static('public'));;

app.get('/bmicalculator', (req, res) => res.sendFile(`${__dirname}/bmiCalculator.html`));
/*
-- using app.get '/"name of the form on the 'action' attribute in the specific html file"' notifies the .get() method of the specific file we would want to use and attached with a callback function whose parameter houses (request, response).
-- the callback function code block uses the response.sendfile method to locate in the directory where the html file in which the form is in.
*/

app.post('/bmiCalculator', (req, res) => {
    let result = (weight = Number(req.body.weight), height = Number(req.body.height)) => {
        let bmi = weight/Math.pow(height, 2);
        return Math.round(bmi);
    }
    result() <= 25 ? res.send(`the result of the calculation is ${result()} and you're ok!`) : res.send(`the result of the calculation is ${result()}, go check yourself!`) //an if or else statement.

});

app.listen(9000, () => console.log('server started on port 9000'))

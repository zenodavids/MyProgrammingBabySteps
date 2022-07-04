const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})); //we use this to get the output of the form

// INDEX CALCULATOR
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
/* when we saving our webpage in the cloud, we us;
res.sendFile(`${__dirname}/index.html`).

__dirname gives the file path of the current folder no matter where(i.e in the cloud, the user computer, etc). this is just a constant that allows us to grab hold of the current file location at any given time then we use that location and attach the location of another file(index.html in this case) to it.
*/

// making our form work;

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);// the num1 here is gotten from the form attribute name
    let num2 =Number(req.body.num2);// the num1 here is gotten from the form attribute name
    let result = num1 + num2;
    res.send(`the result of the calculation is ${result}`); //this is what happens when we press the button.
});

//BMI CALCULATOR


app.listen(9000, () => console.log('server started on port 9000'))

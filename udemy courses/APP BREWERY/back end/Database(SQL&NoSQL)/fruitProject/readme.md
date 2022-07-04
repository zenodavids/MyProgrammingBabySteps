//1.install mongoose via npm in the terminal, then require mongoose
const mongoose = require('mongoose');

//2. connect mongoose to the mongodb database by running it using 'mongod' in the terminal
mongoose.connect('mongodb://localhost:27017/fruitsDB');
// all this is saying is mongoose will make a connection to the mongodb server using the port 27017 and will be storing up data in the fruitsDB database. note that if there is no 'fruitsDB' in the list of databases, this will create one.

//CRUD
//~~~~~~~~~~~~~~~~~~~~~~~~

////////////////////// CREATE

//3 next we create a schema. a schema is lika a guideline or order that all entries for the database will adhere to
const fruitSchema = new mongoose.Schema ({
name: String,
rating: Number,
review: String
});
//this is what our fruit schema will look like and this lays out the foundation for every new fruit document that will be added to our fruitDB database.

//4 we use the above schema to create a model
const Fruit = mongoose.model('Fruit', fruitSchema)
//we pass in two parameters, first is the name of the collection(fruits) that complies with the schema and its best practice to specify the SINGULAR (and first letter in uppercase) name of your schema (since fruit is singular for fruits, we use that.) and mongoose will convert it to plural by default and by doing this we have created a new collection called 'Fruits'. the second parameter will be the schema thats associated with the model(which is the fruitSchema).

//5 lets create our first new document
const fruit = new Fruit ({
name: 'Apple',
rating: 7,
review: 'Pretty solid as a fruit.'
});
// //line 21 means we have the new document 'fruit' (lowercase 'f') from the above model'Fruit' (uppercase 'F') and this will have to stick to the schema.

/////////////////////////////////////////////////////////////

//what if we wanted to add other fruits? then we do this;
const kiwi = new Fruit ({
name: 'kiwi',
rating: 7,
review: 'Pretty solid as a fruit.'
});
const banana = new Fruit ({
name: 'banana',
rating: 7,
review: 'Pretty solid as a fruit.'
});
const orange = new Fruit ({
name: 'orange',
rating: 7,
review: 'Pretty solid as a fruit.'
});

// we insert as much as we can using the keyword 'model.insertMany'(we can get other keywords in mongoose documentation.), then a parenthesis with two parameters. the first parameter houses the array of all the newly added fruits, the second parameter houses a callback function that has a parametter of 'err'(short for error)and houses an ifElse statement that states whether or not the code pulled through.

Fruit.insertMany([kiwi, banana,orange], (err) => (err) ? console.log(err) : console.log('sucessfully saved all the fruit entries.'))

//next we save the fruit document
fruit.save()
//all this does is save our fruit document (in line 21) into our Fruit collection (in line 17) in our fruit database (in line 5)

//we can save more than collections in database.

//lets create a collection of people
const personSchema = new mongoose.Schema ({
name: String,
age: Number
});

const Person = mongoose.model('Person', personSchema)

const person = new Person ({
name: 'John',
age: 54
});

person.save()

//////////////////////////// DATA VALIDATION

say we wanted to give 'rating' a mininum of 1 and maximum of 10
ie

const fruitSchema = new mongoose.Schema ({
name: String,
rating: {
type: Number
min: 1,
max: 10
},
review: String
});

-- what this means is that the minimum rating must not be lesser than 1 or greater than 10 and hence, wont be added into the database

-- one of the validators that be added is the "REQUIRED" validator and this requires a specific field not to be empty or it will give an error.
ie: using our fruit schema again;

const fruitSchema = new mongoose.Schema ({
name: {
type: String,
required: true
},
rating: {
type: Number
min: 1,
max: 10
},
review: String
});

-- here, we set our name's string required to true(or 1) and if its not inputed, it will give an error.
-- we can also attach a message if our validators are not met.

const fruitSchema = new mongoose.Schema ({
name: {
type: String,
required: [true, 'no name specified']
},
rating: {
type: Number,
min: [1, 'why no rating?'],
max: [10, 'nna, reduce this thing jor']
},
review: String
});

//check BUILT IN VALIDATIONS in the mongoose doc

/////////////////////////////////

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//////////////// READ

Fruit.find((err, fruits) =>{
(err) ? console.log(err) : console.log(fruits)

    mongoose.connection.close()
    //we use this to always close the connection once you are done

    //lets loop through the fruits collection and get only the names of the fruits.
    fruits.forEach((fruit) => console.log(fruit.name))

})
//using the fruit model, we use the 'find' method to read our documents. the find method has a callback function with parameters. first parameter is the error parameter(err) just in case of an error, the second parameter is the fruits collection. and the function of this is to list out all our fruits entries.

```


////////////////////// UPDATE

according to the documentation, we can use the keyword'model.updateOne or .update or .updateMany and these has three parameters in their parenthesis;
-- what is it we want to update,
-- what we want to update about it,
-- a callback function the error as its parameter to notify us if this didnt work or if it did.

Fruit.updateOne({_id: '61df758da37f184d33e85755'}, {name: 'peach'}, (err) => (err) ? console.log(err) : console.log('successfully updated'))

so following the above;
-- we wanted to update the entry/record with the id of 61df758da37f184d33e85755,
-- and update the name to 'peach'
-- and a callback function with an if else statement that logs if the change was successful.


```

//////////////////////////// DELETE

Fruit.deleteOne({name: 'peach'}, (err) => (err) ? console.log(err) : console.log('successfully deleted'))

-- this houses two parameters;

- the record you want to delete,
- a callback function with an error parameter

///////////////////////////////////////////

ESTABLISHING RELATIONSHIPS AN EMBEDDING DOCUMENTS IN MONGOOSE

say a person in the people collection has a favourite fruit in the fruits collection. how do we link the two collections?

-- first, if the supposed fruit is'nt listed, we create it;

const pineapple = new Fruit ({
name: 'Pineapple',
rating: 6,
review: 'Pretty fruit.'
});

-- next, we save it
pineapple.save()

-- in the personSchema we add favouriteFruit: fruitSchema. ie;
const personSchema = new mongoose.Schema ({
name: String,
age: Number,
favouriteFruit: fruitSchema
});

-- in the person's record we add the new fruit we just added in the fruitschema;
const person = new Person ({
name: 'Zeno',
age: 30,
favouriteFruit: pineapple
});

C:\Program Files\MongoDB\Server\5.0\data\

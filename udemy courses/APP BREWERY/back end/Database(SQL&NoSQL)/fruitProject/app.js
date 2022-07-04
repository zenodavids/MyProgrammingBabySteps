const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        },
    rating: {
        type: Number,
        min: [0, 'why no rating?'],
        max: [107, 'nna, reduce this thing jor']
        },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema)

const pineapple = new Fruit ({
    name: 'Pineapple',
    rating: 6,
    review: 'Pretty fruit.'
});

// pineapple.save()

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema)

const person = new Person ({
    name: 'John',
    age: 54
});

// person.save()

// Fruit.find((err, fruits) =>{
//     (err) ? console.log(err) : console.log(fruits)

    // mongoose.connection.close()

//     fruits.forEach((fruit) => console.log(fruit.name))
// })

Person.updateOne({_id: '61df84e61a193cb32031baca'}, {favouriteFruit: pineapple}, (err) => (err) ? console.log(err) : console.log('successfully updated'))
// Person.deleteMany({name: 'John'}, (err) => (err) ? console.log(err) : console.log('successfully deleted'))



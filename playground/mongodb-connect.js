// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server. ', err);
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: false}).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(docs);
    // }, err => {
    //     console.log('Unable to fetch todos. ', err);
    // })

    db.collection('Todos').find().count().then(count => {
        console.log('Todos count:', count);
    }, err => {
        console.log('Unable to fetch todos. ', err);
    })

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo. ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: '21 Savage',
    //     age: 28,
    //     location: 'Compton, LA'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo. ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    client.close();
});
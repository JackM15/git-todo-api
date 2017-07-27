//load mongo client
// const MongoClient = require("mongodb").MongoClient;

//destructuring instead of above
const {MongoClient, ObjectID} = require("mongodb");

// //due to above destructuring i can use the ObjectID function.
// var obj = new ObjectID();
// console.log(obj);

//connect to database
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to the MongoDB server! :(");
    }
    console.log("Connected to MongoDB server! :)");

    // //create new todos collection and insert something into it
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert Todo:", err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into Users collection (name, age, location)
    // db.collection("Users").insertOne({
    //     name: "Boo",
    //     age: 4,
    //     location: "Maidstone"
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("unable to insert User:", err);
    //     }
    //     //print with good formatting
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //close connection with mongodb server
    db.close();
});

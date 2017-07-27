//destructuring instead of above
const {MongoClient, ObjectID} = require("mongodb");

//connect to database
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to the MongoDB server! :(");
    }
    console.log("Connected to MongoDB server! :)");

    //find todo documents with a promise at the end
    // db.collection("Todos").find({
    //     _id: new ObjectID("5979a3ac909e3e2080c9f7d4")
    // }).toArray().then((docs) => {
    //     console.log("Todos:");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err)
    // });

    db.collection("Todos").find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log("Unable to count todos", err)
    });

    //users challenge
    db.collection("Users").find({name: "Yeggle"}).toArray().then((users) => {
        console.log(JSON.stringify(users,undefined,2));
    });

    // db.close();
});

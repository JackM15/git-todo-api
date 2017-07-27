//destructuring instead of above
const {MongoClient, ObjectID} = require("mongodb");

//connect to database
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to the MongoDB server! :(");
    }
    console.log("Connected to MongoDB server! :)");

    //findOneAndUpdate
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5979e8514fe6b4375ceb0e51")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});

//destructuring instead of above
const {MongoClient, ObjectID} = require("mongodb");

//connect to database
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to the MongoDB server! :(");
    }
    console.log("Connected to MongoDB server! :)");

    //deleteMany
    // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection("Todos").deleteOne({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete (returns data!.. mega useful!)
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.close();
});

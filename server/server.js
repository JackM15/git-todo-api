//library imports
var express = require("express");
var bodyParser = require("body-parser");

//local imports (es6 destructuring)
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

//create express app
var app = express();
//set express to use bodyparser
app.use(bodyParser.json());

//routes
//post request for todos, send info over to db.
app.post("/todos", (req, res) => {
    //create new Todo object/model from body text
    var todo = new Todo({
        //grab the text data from the parsed body and set the value = text in our model.
        text: req.body.text
    });

    //save the todo to the database
    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

//todos get route
app.get("/todos", (req, res) => {
    //get all todos
    Todo.find().then((todos) => {
        res.send({todos : todos});
    }, (error) => {
        res.status(400).send(error);
    });
});


//start server
app.listen(3000, () => {
    console.log("Started on port 3000.")
});

//export app
module.exports = {app};

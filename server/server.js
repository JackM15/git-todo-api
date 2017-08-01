//library imports
var express = require("express");
var bodyParser = require("body-parser");

//local imports
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

//create express app variable
var app = express();
//set express to use bodyparser which enables it to send json data
app.use(bodyParser.json());

//routes
app.post("/todos", (req, res) => {
    //create new Todo object/model from body text
    var todo = new Todo({
        text: req.body.text
    });

    //save the todo to the database
    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

//start server (so it listens for connections and handles them)
app.listen(3000, () => {
    console.log("Started on port 3000.")
});

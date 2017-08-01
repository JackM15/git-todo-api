//load mongoose
var mongoose = require("mongoose");
//tell mongoose which promise library to use (built in)
mongoose.Promise = global.Promise;
//connect to the db
mongoose.connect("mongodb://localhost:27017/TodoApp", { useMongoClient: true });

module.exports = {
    mongoose: mongoose
};

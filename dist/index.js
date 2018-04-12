"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _MovieIdeasRoutes = require("./routes/MovieIdeasRoutes");

var _MovieIdeasRoutes2 = _interopRequireDefault(_MovieIdeasRoutes);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import movieIdeas from "./movieIdeas";
require("dotenv").config();


_mongoose2.default.set("debug", true);
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://psc478:" + process.env.MLABPW + "@ds113785.mlab.com:13785/final-trading-exchange-clone");

var app = (0, _express2.default)();

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});

app.use(_express2.default.static("public"));

app.use(_bodyParser2.default.json());
app.use(_MovieIdeasRoutes2.default);

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});

app.listen(3002, function (err) {
  if (err) {
    return console.log("Error", err);
  }
});

/*
//server test code
let mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://psc478:psc478@ds131329.mlab.com:31329/advanced-checkpoint-2");

const schema = new mongoose.Schema({
title: {
required:true,
type: String
},
genre: {
type: String
},
logline: {
type: String
},
budget: {
type: String
},
notes: {
type: String
}
});

const MovieIdeaModel = mongoose.model("MovieIdea", schema);

const movieIdea = new MovieIdeaModel({
title: "one",
genre:"test",
logline:"yup",
budget:"small",
notes:"notepad"
});

//movieIdea.save()
//.then(mov => {
//console.log("MovieIdeasController create");
//return response.json(mov);
//});


MovieIdeaModel.findById("5acab16ed341a80600e18fe1").exec()
.then(movieDelete => {
  movieDelete.remove(function (err, movieDelete) {
    if (err) return handleError(err);
  })
  return response.json();
});
*/
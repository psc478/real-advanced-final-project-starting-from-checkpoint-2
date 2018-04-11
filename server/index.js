
//import movieIdeas from "./movieIdeas";
import express from "express";
import bodyParser from "body-parser";
import MovieIdeasRoutes from "./routes/MovieIdeasRoutes"
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://psc478:psc478@ds131329.mlab.com:31329/advanced-checkpoint-2");

const app = express();
app.use(bodyParser.json());
app.use(MovieIdeasRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.listen(3002, (err) => {
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

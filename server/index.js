
//import movieIdeas from "./movieIdeas";
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import BalancesRoutes from "./routes/BalancesRoutes"
import OrdersRoutes from "./routes/OrdersRoutes"
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://psc478:&&VLz5^E0O&B&BNjK9U7R0g!wwRfPPj$%jTwh1&G@ds113785.mlab.com:13785/final-trading-exchange-clone");

const app = express();

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(BalancesRoutes);
app.use(OrdersRoutes);

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

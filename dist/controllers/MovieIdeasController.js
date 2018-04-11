"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.create = create;
exports.show = show;
exports.update = update;
exports.remove = remove;

var _MovieIdeaModel = require("../models/MovieIdeaModel");

var _MovieIdeaModel2 = _interopRequireDefault(_MovieIdeaModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//list is working
function list(request, response) {
  console.log("movieIdeasController list");
  //console.log("movieIdeasController list request",request);
  _MovieIdeaModel2.default.find({}).exec().then(function (movieIdeas) {
    //console.log("movieIdeasController list2");
    return response.json(movieIdeas);
  });
}

//create is not working
function create(request, response) {
  console.log("MovieIdeasController create");
  var movieIdea = new _MovieIdeaModel2.default({
    title: request.body.title,
    genre: request.body.genre,
    logline: request.body.logline,
    budget: request.body.budget,
    notes: request.body.notes
  });
  movieIdea.save().then(function (mov) {
    console.log("MovieIdeasController create OUTPUT");
    return response.json(mov);
  });
}

//show is working
function show(request, response) {
  console.log("MovieIdeasController request params", request.params);
  console.log("MovieIdeasController request.params.id", request.params.id);
  console.log("MovieIdeasController request.params.movieIdeaID", request.params.movieIdeaID);
  _MovieIdeaModel2.default.findById(request.params.movieIdeaID).exec().then(function (movieIdea) {
    return response.json(movieIdea);
  });
}

function update(request, response) {
  _MovieIdeaModel2.default.findById(request.params.id).exec().then(function (movieIdea) {
    movieIdea.title = request.body.title || movieIdea.title;
    movieIdea.genre = request.body.genre || movieIdea.genre;
    movieIdea.logline = request.body.logline || movieIdea.logline;
    movieIdea.budget = request.body.budget || movieIdea.budget;
    movieIdea.notes = request.body.notes || movieIdea.notes;
    return user.save();
  }).then(function (movieIdea) {
    return response.json(movieIdea);
  });
}

function remove(request, response) {
  console.log("Remove request.params.id", request.params.movieIdeaID);
  _MovieIdeaModel2.default.findById(request.params.movieIdeaID).exec().then(function (movieDelete) {
    movieDelete.remove(function (err, movieDelete) {
      if (err) return handleError(err);
    });
    return response.json();
  });
}

/*export function show(request, response) {
  let id = request.params.movieIdeaID; //set id equal to the request in the url
  let movieIdea = movieIdeas.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(movieIdea);
}*/
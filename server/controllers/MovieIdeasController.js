import MovieIdeaModel from "../models/MovieIdeaModel";

//list is working
export function list(request, response) {
  console.log("movieIdeasController list");
  //console.log("movieIdeasController list request",request);
  MovieIdeaModel.find({}).exec()
 .then(movieIdeas => {
   //console.log("movieIdeasController list2");
   return response.json(movieIdeas);
 });
}

//create is not working
export function create(request, response) {
  console.log("MovieIdeasController create");
  const movieIdea = new MovieIdeaModel({
    title: request.body.title,
    genre: request.body.genre,
    logline: request.body.logline,
    budget: request.body.budget,
    notes: request.body.notes
  });
  movieIdea.save()
  .then(mov => {
    console.log("MovieIdeasController create OUTPUT");
    return response.json(mov);
  });
}

//show is working
export function show(request, response) {
  console.log("MovieIdeasController request params",request.params);
  console.log("MovieIdeasController request.params.id",request.params.id);
  console.log("MovieIdeasController request.params.movieIdeaID",request.params.movieIdeaID);
  MovieIdeaModel.findById(request.params.movieIdeaID).exec()
  .then(movieIdea => {
    return response.json(movieIdea);
  });
}

export function update(request, response) {
  MovieIdeaModel.findById(request.params.id).exec()
    .then(movieIdea => {
      movieIdea.title = request.body.title || movieIdea.title;
      movieIdea.genre = request.body.genre || movieIdea.genre;
      movieIdea.logline = request.body.logline || movieIdea.logline;
      movieIdea.budget = request.body.budget || movieIdea.budget;
      movieIdea.notes = request.body.notes || movieIdea.notes;
      return user.save();
    })
    .then(movieIdea => {
      return response.json(movieIdea);
    });
}

export function remove(request, response) {
  console.log("Remove request.params.id",request.params.movieIdeaID);
  MovieIdeaModel.findById(request.params.movieIdeaID).exec()
  .then(movieDelete => {
    movieDelete.remove(function (err, movieDelete) {
      if (err) return handleError(err);
    })
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

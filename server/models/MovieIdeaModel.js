import mongoose from "mongoose";

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
export default MovieIdeaModel;

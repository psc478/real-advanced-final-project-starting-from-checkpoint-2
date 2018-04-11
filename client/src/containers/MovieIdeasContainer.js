import { connect } from "react-redux";
import MovieIdeas from "../components/MovieIdeas";
import {
  deleteMovieIdea
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    deleteMovieIdea: function (mov) {
      dispatch(deleteMovieIdea(mov));
    }
  };
}

function mapStateToProps(state) {
  return {
    movieIdeas: state.movieIdeas
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieIdeas);

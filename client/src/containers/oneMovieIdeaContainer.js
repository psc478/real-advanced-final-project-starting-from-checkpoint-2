import { connect } from "react-redux";
import oneMovieIdea from "../components/oneMovieIdea";
import { getMovieIdea } from "../actions"

function mapStateToProps(state) {
  return {
    movieIdea: state.movieIdea
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieIdea: function (id) {
      dispatch(getMovieIdea(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(oneMovieIdea);

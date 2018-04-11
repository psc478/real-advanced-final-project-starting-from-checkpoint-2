import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMovieIdeas} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadMovieIdeas: function () {
      dispatch(loadMovieIdeas()); //this might need to go on a different Container
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

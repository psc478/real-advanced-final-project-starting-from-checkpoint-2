import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createMovieIdea
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createMovieIdea: function (mov) {
      dispatch(createMovieIdea(mov));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);

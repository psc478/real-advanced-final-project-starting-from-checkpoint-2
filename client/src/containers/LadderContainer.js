import { connect } from "react-redux";
import Ladder from "../components/Ladder";
import {
  createLadder
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createLadder: function (lad) {
      dispatch(createLadder(lad));
    }
  };
}

export default connect(null,mapDispatchToProps)(Ladder);

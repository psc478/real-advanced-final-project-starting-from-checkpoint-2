import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadOrders, loadBalances} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: function () {
      dispatch(loadOrders());
    },
    loadBalances: function () {
      dispatch(loadBalances());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

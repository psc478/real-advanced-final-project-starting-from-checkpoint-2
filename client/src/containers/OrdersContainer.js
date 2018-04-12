import { connect } from "react-redux";
import Orders from "../components/Orders";
import {
  cancelOrder
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    cancelOrder: function (ord) {
      dispatch(cancelOrder(ord));
    }
  };
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);

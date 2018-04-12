import { connect } from "react-redux";
import Balance from "../components/Balance";

function mapStateToProps(state) {
  return {
    usdBalance: state.usdBalance,
    btcBalance: state.btcBalance
  };
}

//export default connect(mapStateToProps,mapDispatchToProps)(Balance);
export default connect(mapStateToProps)(Balance);

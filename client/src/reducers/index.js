import {combineReducers} from "redux";

function balances(state = [], action) {
  if (action.type === "BALANCES_LOADED") {
    return action.value;
  }
  return state;
}

function orders(state = [], action) {
  if (action.type === "ORDERS_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  balances,orders
});
export default rootReducer;

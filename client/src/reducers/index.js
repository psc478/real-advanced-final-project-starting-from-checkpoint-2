import {combineReducers} from "redux";

function movieIdeas(state = [], action) {
  if (action.type === "MOVIEIDEAS_LOADED") {
    return action.value;
  }
  return state;
}

function movieIdea(state = {}, action) {
  if (action.type === "GET_MOVIEIDEA_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  movieIdeas,movieIdea
});
export default rootReducer;

import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

function helloWorld(){
  console.log("Hello index.js");
}

helloWorld();

//Does this go in actions?
//Right now, I'm referencing adv-hw-2 and express practice. Get express practice working first, and then backtrack to get SPA working
/*function changePage(page) {
  state.currentPage = page;
  console.log("currentPage in changePage:",state.currentPage);
  render();
}*/

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);

import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import oneMovieIdeaContainer from "./containers/oneMovieIdeaContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

//Look at early homework to check how to make a single-page app with landing page, "create" link and "list" link
class App extends Component {
  constructor() {
    super();
    this.state = {users: []} //using same line as in express practice, neither has users in final product
  }
  componentDidMount() {
    this.props.loadMovieIdeas();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/movieIdea/:id" component={oneMovieIdeaContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  /*render() {
    return (
      <div>
        <h2>Landing Page</h2>
        <a href="createStuff">Create Item Page</a>
        <a href="listStuff">List Items Page</a>
      </div>
    );
  }*/
}
export default (App);

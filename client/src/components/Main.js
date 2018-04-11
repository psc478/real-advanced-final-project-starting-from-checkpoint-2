import React, { Component } from "react";
import MovieIdeasContainer from "../containers/MovieIdeasContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

class Main extends Component {
  constructor() {
    super();
    this.state = {page: "home"};
  }
  render(){
    if (this.state.page === "home"){
      return(
        <div>
          <h1>Movie Ideas Homepage</h1>
          <button onClick={() => {
            this.setState({
              page: "list"
            });
          }
          }>
            List Movie Ideas
          </button>
          <button onClick={() => {
            this.setState({
              page: "create"
            });
          }
          }>
            Create Movie Idea
          </button>
        </div>
      )
    }else if (this.state.page === "list") {
      return(
        <div>
          <div style={{float: "left", width: "49%"}}>
            <h1>Movie Ideas </h1>
            <MovieIdeasContainer />
          </div>
          <button style={{float: "left", width: "49%"}} onClick={() => {
            this.setState({
              page: "create"
            });
          }
          }>
            Go To Create Movie Idea Page
          </button>
        </div>
      )
    }else if (this.state.page === "create") {
      return(
        <div>
          <button style={{float: "left", width: "49%"}} onClick={() => {
            this.setState({
              page: "list"
            });
          }
          }>
            Go To List Movie Ideas Page
          </button>
          <div style={{float: "left", width: "49%"}}>
            <CreateThingsContainer />
          </div>
        </div>
      )
    }else {
      return (
        <div>
          <div style={{float: "left", width: "49%"}}>
            <h1>Movie Ideas </h1>
            <MovieIdeasContainer />
          </div>
          <div style={{float: "left", width: "49%"}}>
            <CreateThingsContainer />
          </div>
          <p>[Basic page]</p>
        </div>
      );
    }
  }
}
export default Main;

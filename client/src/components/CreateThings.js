import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      movieIdea: {
        title: "",
        genre: "",
        logline: "",
        budget: "",
        notes: ""
      }
    };
  }
  render() {
    return (
      <div>
          <h1>Movie Ideas</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovieIdea) {
              this.props.createMovieIdea(this.state.movieIdea);
            }
          }}>
            <div>
              Title: <input onChange={(e) => {
                const movieIdea = {title: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <div>
              Genre: <input onChange={(e) => {
                const movieIdea = {genre: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <div>
              Logline: <input onChange={(e) => {
                const movieIdea = {logline: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <div>
              Budget: <input onChange={(e) => {
                const movieIdea = {budget: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <div>
              Notes: <input onChange={(e) => {
                const movieIdea = {notes: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
      </div>
    );
  }
}
export default CreateThings;

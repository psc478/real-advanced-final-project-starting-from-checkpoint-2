import React from "react";

class oneMovieIdea extends React.Component {
  componentDidMount() {
    this.props.getMovieIdea(this.props.match.params.id);
  }

  render() {
    let title = "";
    let genre = "";
    let budget = "";
    let notes = "";
    let logline = "";
    console.log("oneMovieIdea this.props:",this.props.match.params.id);
    if(this.props.movieIdea){
      title = this.props.movieIdea.title;
      genre = this.props.movieIdea.genre;
      budget = this.props.movieIdea.budget;
      notes = this.props.movieIdea.notes;
      logline = this.props.movieIdea.logline;
    }
    return (
      <div className="oneMovieIdea">
        <h2>{title}</h2>
        <h3>Logline: {logline}</h3>
        <h4>Genre: {genre}</h4>
        <h4>Budget: {budget}</h4>
        <p>{notes}</p>
      </div>
    );
  }
}
export default oneMovieIdea;

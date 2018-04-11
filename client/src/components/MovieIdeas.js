import React from "react";
import Mapper from "./Mapper";

function MovieIdeas(props){

    //console.log("MovieIdeas component props.movieIdeas:", props.movieIdeas[0]);

    return (
      <div>
      <Mapper deleteMovieIdea={props.deleteMovieIdea} data={props.movieIdeas} path="movieIdea" field="title" field1="budget" field2="genre"/>
      </div>
    );
}

export default MovieIdeas;

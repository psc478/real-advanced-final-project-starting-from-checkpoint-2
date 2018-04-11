import React from "react";
import {Link} from "react-router-dom";

function Mapper(props) {

    let userDivs = "";
      //buttonText = "Hide";
      //console.log("Mapper this.props:",this.props);
      //console.log("Mapper this.props.path:",this.props.path);
      //console.log("Mapper this.props.field:",this.props.field);
      //console.log("Mapper this.props.field1:",this.props.field1);
      //console.log("Mapper this.props.data[0]:",props.data);
      userDivs = props.data.map((d,i) => {
        return (
          <div key={i}>
            <h3>{d[props.field]}</h3>
            <p>{d[props.field1]} {d[props.field2]}</p>
            <Link to={"/" + props.path + "/" + d._id}> View </Link>
            <button onClick={() => {
                  //console.log("Delete Button props.deleteMovieIdea:",props.deleteMovieIdea);
                  props.deleteMovieIdea(d._id);
              }
              }>
               Delete
           </button>
          </div>
        );
      });
    return (
      <div>
        {userDivs}
      </div>);
}


export default Mapper;

import React from "react";

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
            {d[props.field]} BTC |
            {d[props.field1]} | 
            OPEN
            <button onClick={() => {
                  //console.log("Delete Button props.deleteMovieIdea:",props.deleteMovieIdea);
                  props.cancelOrder(d._id);
              }
              }>
               Cancel
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

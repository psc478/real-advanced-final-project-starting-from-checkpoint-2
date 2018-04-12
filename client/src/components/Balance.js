import React from "react";
import BalanceMapper from "./BalanceMapper";

function Balance(props){

    //console.log("MovieIdeas component props.movieIdeas:", props.movieIdeas[0]);

    return (
      <div>
      <BalanceMapper data={props.balances} />
      </div>
    );
}

export default Balance;

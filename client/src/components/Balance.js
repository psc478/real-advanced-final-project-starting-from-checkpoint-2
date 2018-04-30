import React from "react";
import BalanceMapper from "./BalanceMapper";

function Balance(props){

    //console.log("balances component props.balances:", props.balances[0]);

    return (
      <div>
        <BalanceMapper data={props.balances} />
      </div>
    );
}

export default Balance;

import React from "react";
import Mapper from "./Mapper";

function Orders(props){

    //console.log("MovieIdeas component props.movieIdeas:", props.movieIdeas[0]);

    return (
      <div>
      <Mapper cancelOrder={props.cancelOrder} data={props.orders} field="size" field1="price"/>
      </div>
    );
}

export default Orders;

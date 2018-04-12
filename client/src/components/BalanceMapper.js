import React from "react";

function BalanceMapper(props) {

      //buttonText = "Hide";
      //console.log("Mapper this.props:",this.props);
      //console.log("Mapper this.props.path:",this.props.path);
      //console.log("Mapper this.props.field:",this.props.field);
      //console.log("Mapper this.props.field1:",this.props.field1);
      //console.log("Mapper this.props.data[0]:",props.data);

    return (
      <div>
        USD: {props.data.usdBalance}
        BTC: {props.data.btcBalance}
      </div>);
}


export default BalanceMapper;

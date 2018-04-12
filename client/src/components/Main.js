import React, { Component } from "react";
import BalanceContainer from "../containers/BalanceContainer";
import LadderContainer from "../containers/LadderContainer";
import Chart from "./Chart";
import OrdersContainer from "../containers/OrdersContainer";

class Main extends Component {
  constructor() {
    super();
    this.state = {page: "buy"};
  }
  render(){
    return (
      <div>
        <div id="orderForm" style={{float: "left", width: "49%"}}>
          <h1>ORDER FORM</h1>
          <BalanceContainer />
          <LadderContainer />
        </div>
        <div id="chartAndOpenOrders" style={{float: "left", width: "49%"}}>
          <Chart />
          <OrdersContainer />
        </div>
      </div>
    );

    //should put the buy/sell states in a component dedicated to the orderMaking
    /*if (this.state.page === "buy") {
      return(
        <div>
          <div style={{float: "left", width: "49%"}}>
            <h1>Movie Ideas </h1>
            <MovieIdeasContainer />
          </div>
          <button style={{float: "left", width: "49%"}} onClick={() => {
            this.setState({
              page: "sell"
            });
          }
          }>
            Go To Create Movie Idea Page
          </button>
        </div>
      )
    }else if (this.state.page === "sell") {
      return(
        <div>
          <button style={{float: "left", width: "49%"}} onClick={() => {
            this.setState({
              page: "buy"
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
    }*/
  }
}
export default Main;

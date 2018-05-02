import React from "react";
import Chart from "./Chart.js";
import "../index.css";

class Ladder extends React.Component {
  constructor() {
    super();
    this.state = {
      order: {
        ladderSize: 0,
        lowPrice: 0,
        highPrice: 0,
        numberOfOrders: 0
        //price: 0
      },
      page: "BUY",
      usdBalance: 101490.31, //pull from GDAX API
      btcBalance: 5.26, //pull from GDAX API
      orderDivs: [],
      buyToggle: "",
      sellToggle: "",
      placeButton: ""
    };
  }

  //keep changeToBuyButton() in this file
  changeToBuyButton(){
    if(this.state.page === "BUY"){
      this.state.buyToggle = <button className="greenButton" onClick={() => {
        this.setState({
          page: "BUY"
        });
        console.log("Buy Button clicked:",this.state.page);
      }}>BUY</button>
    }else if (this.state.page === "SELL") {
      this.state.buyToggle = <button className="greyButton" onClick={() => {
        this.setState({
          page: "BUY"
        });
        console.log("Buy Button clicked:",this.state.page);
      }}>BUY</button>
    }
  }

  //keep changeToSellButton() in this file
  changeToSellButton(){
    if(this.state.page === "BUY"){
      this.state.sellToggle = <button className="greyButton" onClick={() => {
        this.setState({
          page: "SELL"
        });
        console.log("Sell Button clicked:",this.state.page);
      }}>SELL</button>
    }else if (this.state.page === "SELL") {
      this.state.sellToggle = <button className="redButton" onClick={() => {
        this.setState({
          page: "SELL"
        });
        console.log("Sell Button clicked:",this.state.page);
      }}>SELL</button>
    }
  }

  changePlaceButton(){
    if(this.state.page === "BUY"){
      this.state.placeButton = <button className="greenButton" onClick={() => {
        //console.log("Placing Orders");
        this.makeLadder();
      }}>PLACE {this.state.page} ORDERS</button>
    }else if (this.state.page === "SELL") {
      this.state.placeButton = <button className="redButton" onClick={() => {
        //console.log("Placing Orders");
        this.makeLadder();
      }}>PLACE {this.state.page} ORDERS</button>
    }
  }

  //this should add orders to the database, put it in actions (?) cross reference with advanced checkpoint 2
  makeLadder() {
    let newArr = this.state.orderDivs;
    let size = this.state.order.ladderSize/this.state.order.numberOfOrders;
    let forLoop = Math.random();
    let increment = (this.state.order.highPrice - this.state.order.lowPrice)/(this.state.order.numberOfOrders);
    for (let i=forLoop;i<this.state.order.numberOfOrders;i++){
      //console.log("increment:",increment);
      let orderPrice = Math.round((Math.floor(i)*increment+parseInt(this.state.order.lowPrice))*100)/100;
      if(this.state.page === "BUY"){
        newArr.push(<div className="dottedLine flexIt" key={i}>
          <span className="space green">{this.state.page}</span><span className="space grey">{size}</span><span className="space grey">{orderPrice}</span>
        </div>);
      }else if (this.state.page === "SELL") {
        newArr.push(<div className="dottedLine flexIt" key={i}>
          <span className="space red">{this.state.page}</span><span className="space grey">{size}</span><span className="space grey">{orderPrice}</span>
        </div>);
      }
    }
    this.setState({
      orderDivs: newArr
    })
    if(this.state.page === "SELL"){
      let amountReduced = this.state.order.ladderSize;
      let newBTC = this.state.btcBalance - amountReduced;
      this.setState({
        btcBalance: newBTC
      })
    }else if (this.state.page === "BUY") {
      let amountReduced = ((parseInt(this.state.order.highPrice) + parseInt(this.state.order.lowPrice))/2)*this.state.order.ladderSize;
      console.log("AmountReduced:",amountReduced);
      let newUSD = this.state.usdBalance - amountReduced;
      this.setState({
        usdBalance: newUSD
      })
    }
    this.render();
  }

  render() {
    this.changeToBuyButton();
    this.changeToSellButton();
    this.changePlaceButton();
    //let orderDivs = [];
    //console.log("Ladder page initialized should be buy:",this.state.page);
    //console.log("Ladder Order",this.state.order);
    //console.log("State",this.state);
    return (
      <div id="parentDiv">
        <div id="leftVert">
          <div id="orderFormVert">
            <h1>ORDER FORM</h1>
          </div>
          <div className="majorDiv" id="balanceDiv">
            <h2>BALANCE</h2>
            <div className="flexIt">
              <span className="grey bigFont">USD</span><span className="bigFont">{this.state.usdBalance}</span>
            </div>
            <div className="flexIt">
              <span className="grey bigFont">BTC</span><span className="bigFont">{this.state.btcBalance}</span>
            </div>
          </div>
          <div className="majorDiv" id="placeOrderDiv">
                <h2>LADDER ORDERS</h2>
                {this.state.buyToggle}
                {this.state.sellToggle}


                <div>
                {/*<form onSubmit={(e) => {
                  e.preventDefault();
                  if (this.props.createLadder) {
                    this.props.createLadder(this.state.order);
                  }
                }}*/}
                  <div>
                    BTC Amount: <input onChange={(e) => {
                      const order = {ladderSize: e.target.value};
                      this.setState({
                        order: Object.assign(this.state.order,order)
                      });
                    }} />
                  </div>
                  <div>
                    Limit Low Price: <input onChange={(e) => {
                      const order = {lowPrice: e.target.value};
                      this.setState({
                        order: Object.assign(this.state.order,order)
                      });
                    }} />
                  </div>
                  <div>
                    Limit High Price: <input onChange={(e) => {
                      const order = {highPrice: e.target.value};
                      this.setState({
                        order: Object.assign(this.state.order,order)
                      });
                    }} />
                  </div>
                  <div>
                    Number of Orders: <input onChange={(e) => {
                      const order = {numberOfOrders: e.target.value};
                      this.setState({
                        order: Object.assign(this.state.order,order)
                      });
                    }} />
                  </div>
                  <div>
                    {this.state.placeButton}
                  </div>
                {/*</form>*/}
                </div>


          </div>
          <div className="majorDiv" id="listOrdersDiv">
            <h3>OPEN ORDERS</h3>
            <div id="orderHeadings" className="flexIt grey">
              <span className="space">TYPE</span><span className="space">SIZE</span><span className="space">PRICE (USD)</span>
            </div>
            <div>
              {this.state.orderDivs}
            </div>
          </div>
        </div>
        <div id="rightVert">
          <div className="majorDiv" id="chartDiv">
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}
export default Ladder;

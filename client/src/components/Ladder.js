import React from "react";

class Ladder extends React.Component {
  constructor() {
    super();
    this.state = {
      ladderOrder: {
        ladderSize: 0,
        lowPrice: 0,
        highPrice: 0
      },
      page: "buy"
    };
  }
  render() {
    console.log("Ladder page initialized should be buy:",this.props.page);
    return (
      <div>
          <h1>Ladder Orders</h1>
          <button onClick={() => {
            this.setState({
              page: "buy"
            });
            console.log("Buy Button clicked:",this.props.page);
          }}>BUY</button>
          <button onClick={() => {
            this.setState({
              page: "sell"
            });
            console.log("Sell Button clicked:",this.props.page);
          }}>SELL</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createLadder) {
              this.props.createLadder(this.state.order);
            }
          }}>
            <div>
              BTC Amount: <input onChange={(e) => {
                const order = {size: e.target.value};
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
            <button>Place Orders</button>
          </form>
      </div>
    );
  }
}
export default Ladder;

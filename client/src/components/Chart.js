import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class Chart extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TradingViewWidget
    theme="DARK"
    symbol="COINBASE:BTCUSD"
    width="100%"
    height="750px"
  />
      </div>
    );
  }
}

export default Chart;

/*
<div class="tradingview-widget-container">
  <div id="tradingview_c36a6"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/COINBASE-BTCUSD/" rel="noopener" target="_blank"><span class="blue-text">BTCUSD</span> <span class="blue-text">chart</span> by TradingView</a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
    new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "COINBASE:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "Light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_c36a6"
    }
    );
  </script>
</div>
*/

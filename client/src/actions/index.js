export function loadBalances() {
  return function (dispatch) {
    console.log("loadBalances working");
    fetch("/balances",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
    .then( (response) => {
      return response.json();
    }).then((balances) => {
      let stuff = balancesLoaded(balances);
      console.log("loadBalances dispatched stuff:",stuff);
      dispatch(stuff);
    });
  };
}

function balancesLoaded(balances) {
  return {
    type: "BALANCES_LOADED",
    value: balances
  };
}

export function loadOrders() {
  return function (dispatch) {
    console.log("loadOrders working");
    fetch("/orders",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
    .then( (response) => {
      return response.json();
    }).then((orders) => {
      let stuff = ordersLoaded(orders);
      console.log("loadOrders dispatched stuff:",stuff);
      dispatch(stuff);
    });
  };
}

function ordersLoaded(orders) {
  return {
    type: "ORDERS_LOADED",
    value: orders
  };
}

export function createLadder(v) {
  console.log("createLadder starting");
  return function (dispatch) {
    fetch("/orders", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(v)
    }).then(() => {
      console.log("createLadder dispatching");
      dispatch(loadOrders());
    });
  };
}

export function cancelOrder(id) {
  console.log("cancelOrder id:",id);
  return function (dispatch) {
    fetch("/orders/"+id, {
      method: "DELETE",
      body: JSON.stringify(id)
    }).then(() => {
      console.log("cancelOrder dispatching");
      dispatch(loadOrders());
    });
  };
}

////////////////////////////////////////////////////////////////////
/*//replaced movieIdea with balance, syntax may be wrong if used
export function getbalance(id) {
  return function (dispatch) {
    console.log("getbalance working");
    fetch("/balances/"+id, {
      headers: {
        "Content-Type": "application/json"}
    })
    .then( (response) => {
      return response.json();
    }).then(function(c){
      console.log("getbalance get c:",c);
      dispatch(getbalanceDone(c));
    });
  };
}
function getbalanceDone(balance) {
  return {
    type: "GET_balance_DONE",
    value: balance
  };
}
*/

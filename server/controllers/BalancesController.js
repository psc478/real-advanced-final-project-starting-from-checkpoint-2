import BalanceModel from "../models/BalanceModel";

export function list(request, response) {
  console.log("balancesController list");
  //console.log("balancesController list request",request);
  BalanceModel.find({}).exec()
 .then(balances => {
   //console.log("balancesController list2");
   return response.json(balances);
 });
}
/*
//should not be able to create new balances
export function create(request, response) {
  console.log("balancesController create");
  const balance = new BalanceModel({
    usdBalance: request.body.usdBalance,
    btcBalance: request.body.btcBalance
  });
  balance.save()
  .then(mov => {
    console.log("balancesController create OUTPUT");
    return response.json(mov);
  });
}
*/

export function show(request, response) {
  console.log("balancesController request params",request.params);
  console.log("balancesController request.params.id",request.params.id);
  console.log("balancesController request.params.balanceID",request.params.balanceID);
  balanceModel.findById(request.params.balanceID).exec()
  .then(balance => {
    return response.json(balance);
  });
}

export function update(request, response) {
  BalanceModel.findById(request.params.id).exec()
    .then(balance => {
      balance.usdBalance = request.body.usdBalance || balance.usdBalance;
      balance.btcBalance = request.body.btcBalance || balance.btcBalance;
      return user.save();
    })
    .then(balance => {
      return response.json(balance);
    });
}

/*
//should not be able to remove balances
export function remove(request, response) {
  console.log("Remove request.params.id",request.params.balanceID);
  BalanceModel.findById(request.params.balanceID).exec()
  .then(movieDelete => {
    movieDelete.remove(function (err, movieDelete) {
      if (err) return handleError(err);
    })
    return response.json();
  });
}
*/

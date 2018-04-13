"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.show = show;
exports.update = update;

var _BalanceModel = require("../models/BalanceModel");

var _BalanceModel2 = _interopRequireDefault(_BalanceModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(request, response) {
  console.log("balancesController list");
  //console.log("balancesController list request",request);
  _BalanceModel2.default.find({}).exec().then(function (balances) {
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

function show(request, response) {
  console.log("balancesController request params", request.params);
  console.log("balancesController request.params.id", request.params.id);
  console.log("balancesController request.params.balanceID", request.params.balanceID);
  balanceModel.findById(request.params.balanceID).exec().then(function (balance) {
    return response.json(balance);
  });
}

function update(request, response) {
  _BalanceModel2.default.findById(request.params.id).exec().then(function (balance) {
    balance.usdBalance = request.body.usdBalance || balance.usdBalance;
    balance.btcBalance = request.body.btcBalance || balance.btcBalance;
    return user.save();
  }).then(function (balance) {
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
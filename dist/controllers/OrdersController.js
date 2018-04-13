"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.create = create;
exports.remove = remove;

var _OrderModel = require("../models/OrderModel");

var _OrderModel2 = _interopRequireDefault(_OrderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//list is working
function list(request, response) {
  console.log("OrdersController list");
  //console.log("ordersController list request",request);
  _OrderModel2.default.find({}).exec().then(function (orders) {
    //console.log("ordersController list2");
    return response.json(orders);
  });
}

//create is not working
function create(request, response) {
  console.log("ordersController create");
  var order = new _OrderModel2.default({
    title: request.body.title,
    genre: request.body.genre
  });
  order.save().then(function (ord) {
    console.log("ordersController create OUTPUT");
    return response.json(ord);
  });
}

/*//no need to show a single order
export function show(request, response) {
  console.log("ordersController request params",request.params);
  console.log("ordersController request.params.id",request.params.id);
  console.log("ordersController request.params.orderID",request.params.orderID);
  orderModel.findById(request.params.orderID).exec()
  .then(order => {
    return response.json(order);
  });
}*/

/* //no order update functionality, only list, create, and remove
export function update(request, response) {
  orderModel.findById(request.params.id).exec()
    .then(order => {
      order.title = request.body.title || order.title;
      order.genre = request.body.genre || order.genre;
      order.logline = request.body.logline || order.logline;
      order.budget = request.body.budget || order.budget;
      order.notes = request.body.notes || order.notes;
      return user.save();
    })
    .then(order => {
      return response.json(order);
    });
}*/

function remove(request, response) {
  console.log("Remove request.params.id", request.params.orderID);
  _OrderModel2.default.findById(request.params.orderID).exec().then(function (movieDelete) {
    cancelOrder.remove(function (err, cancelOrder) {
      if (err) return handleError(err);
    });
    return response.json();
  });
}

/*export function show(request, response) {
  let id = request.params.orderID; //set id equal to the request in the url
  let order = orders.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(order);
}*/
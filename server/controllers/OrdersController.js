import OrderModel from "../models/OrderModel";

//list is working
export function list(request, response) {
  console.log("OrdersController list");
  //console.log("ordersController list request",request);
  OrderModel.find({}).exec()
 .then(orders => {
   //console.log("ordersController list2");
   return response.json(orders);
 });
}

//create is not working
export function create(request, response) {
  console.log("ordersController create");
  const order = new OrderModel({
    title: request.body.title,
    genre: request.body.genre
  });
  order.save()
  .then(ord => {
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

export function remove(request, response) {
  console.log("Remove request.params.id",request.params.orderID);
  OrderModel.findById(request.params.orderID).exec()
  .then(cancelOrder => {
    cancelOrder.remove(function (err, cancelOrder) {
      if (err) return handleError(err);
    })
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

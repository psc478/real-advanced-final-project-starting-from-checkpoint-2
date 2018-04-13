import mongoose from "mongoose";

const schema = new mongoose.Schema({
  size: {
    required:true,
    type: Number
  },
  price: {
    required:true,
    type: Number
  }
});

const OrderModel = mongoose.model("Order", schema);
export default OrderModel;

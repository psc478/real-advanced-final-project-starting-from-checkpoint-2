import mongoose from "mongoose";

const schema = new mongoose.Schema({
  usdBalance: {
    required:true,
    type: Number
  },
  btcBalance: {
    type: Number
  }
});

const BalanceModel = mongoose.model("Balance", schema);
export default BalanceModel;

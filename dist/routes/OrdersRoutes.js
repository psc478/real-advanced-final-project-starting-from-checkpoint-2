"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _OrdersController = require("../controllers/OrdersController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/orders", _OrdersController.list);
//router.get("/orders/:orderID", show);
router.post("/orders", _OrdersController.create);
//router.put("/orders/:orderID", update);
router.delete("/orders/:orderID", _OrdersController.remove);

exports.default = router;
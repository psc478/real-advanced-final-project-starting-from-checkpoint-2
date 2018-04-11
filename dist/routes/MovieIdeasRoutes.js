"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _MovieIdeasController = require("../controllers/MovieIdeasController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/movieIdeas", _MovieIdeasController.list);
router.get("/movieIdeas/:movieIdeaID", _MovieIdeasController.show);
router.post("/movieIdeas", _MovieIdeasController.create);
router.put("/movieIdeas/:movieIdeaID", _MovieIdeasController.update);
router.delete("/movieIdeas/:movieIdeaID", _MovieIdeasController.remove);

exports.default = router;
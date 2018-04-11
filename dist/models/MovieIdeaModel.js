"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  title: {
    required: true,
    type: String
  },
  genre: {
    type: String
  },
  logline: {
    type: String
  },
  budget: {
    type: String
  },
  notes: {
    type: String
  }
});

var MovieIdeaModel = _mongoose2.default.model("MovieIdea", schema);
exports.default = MovieIdeaModel;
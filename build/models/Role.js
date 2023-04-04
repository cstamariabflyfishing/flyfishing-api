"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;
var _mongoose = require("mongoose");
var ROLES = ["admin", "user"];
exports.ROLES = ROLES;
var RoleSchema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});
var _default = (0, _mongoose.model)("Role", RoleSchema);
exports["default"] = _default;
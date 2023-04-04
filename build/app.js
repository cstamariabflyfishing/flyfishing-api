"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var _initialSetup = require("./libs/initialSetup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use("/api/products", _products["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/users", _users["default"]);
var _default = app;
exports["default"] = _default;
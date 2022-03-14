"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _Details = _interopRequireDefault(require("./Details"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DisplayPage(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Header, null, "Top 10 Crtypto Exchanges"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    responsive: true,
    striped: true,
    bordered: true,
    hover: true,
    variant: "dark"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "center"
  }, "Rank"), /*#__PURE__*/_react.default.createElement("th", {
    className: "align-left"
  }, "Name"), /*#__PURE__*/_react.default.createElement("th", {
    className: "align-left"
  }, "Country"), /*#__PURE__*/_react.default.createElement("th", {
    className: "align-left"
  }, "URL"))), /*#__PURE__*/_react.default.createElement("tbody", null, Object.keys(data).map(index => /*#__PURE__*/_react.default.createElement("tr", {
    key: data[index].id
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "center"
  }, data[index].trust_score_rank), /*#__PURE__*/_react.default.createElement("td", {
    className: "align-left"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "30px"
    },
    src: data[index].image
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/details/".concat(data[index].id)
  }, data[index].name))), /*#__PURE__*/_react.default.createElement("td", {
    className: "align-left"
  }, data[index].country), /*#__PURE__*/_react.default.createElement("td", {
    className: "align-left"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: data[index].url
  }, data[index].url))))))));
}

var _default = DisplayPage;
exports.default = _default;
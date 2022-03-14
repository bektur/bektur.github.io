"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("./App.css");

var _react = _interopRequireWildcard(require("react"));

var _DisplayPage = _interopRequireDefault(require("./components/DisplayPage"));

var _Details = _interopRequireDefault(require("./components/Details"));

var _data = _interopRequireDefault(require("./data.json"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _history = require("history");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App() {
  const [exchanges, setExchange] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges').then(response => response.json()).then(data => {
      setExchange(data.slice(0, 10));
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
    history: (0, _history.createBrowserHistory)()
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_DisplayPage.default, {
      data: exchanges
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/details/:id",
    element: /*#__PURE__*/_react.default.createElement(_Details.default, null)
  }))));
}

var _default = App;
exports.default = _default;
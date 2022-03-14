"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _facebook = _interopRequireDefault(require("../icons/facebook.png"));

var _instagram = _interopRequireDefault(require("../icons/instagram.png"));

var _twitter = _interopRequireDefault(require("../icons/twitter.png"));

var _telegram = _interopRequireDefault(require("../icons/telegram.png"));

var _reddit = _interopRequireDefault(require("../icons/reddit.png"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function Details(props) {
  const [exchange, setExchange] = (0, _react.useState)({});
  const { id } = (0, _reactRouterDom.useParams)();
  (0, _react.useEffect)(() => {
    fetch("https://api.coingecko.com/api/v3/exchanges/".concat(id))
      .then((response) => response.json())
      .then((data) => {
        setExchange(data);
      });
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _reactBootstrap.Card,
      {
        className: "text-center",
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactBootstrap.Card.Header,
        null,
        exchange.name
      ),
      /*#__PURE__*/ _react.default.createElement(
        _reactBootstrap.Card.Body,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _reactBootstrap.Table,
          {
            responsive: true,
            striped: true,
            hover: true,
            variant: "dark",
          },
          /*#__PURE__*/ _react.default.createElement(
            "tbody",
            null,
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Rank"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                exchange.trust_score_rank
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Name"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                /*#__PURE__*/ _react.default.createElement("img", {
                  style: {
                    width: "30px",
                  },
                  src: exchange.image,
                }),
                /*#__PURE__*/ _react.default.createElement(
                  "span",
                  {
                    style: {
                      marginLeft: "5px",
                    },
                  },
                  exchange.name
                )
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Country"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                exchange.country
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Year of Establishment"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                exchange.year_established
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Social Media"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                /*#__PURE__*/ _react.default.createElement(
                  "a",
                  {
                    href: exchange.facebook_url,
                    title: "facebook icons",
                  },
                  /*#__PURE__*/ _react.default.createElement("img", {
                    src: _facebook.default,
                    className: "social-media",
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "a",
                  {
                    href: "https://www.instagram.com/binance",
                    title: "instagram icons",
                  },
                  /*#__PURE__*/ _react.default.createElement("img", {
                    src: _instagram.default,
                    className: "social-media",
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "a",
                  {
                    href: "https://www.twitter.com/".concat(
                      exchange.twitter_handle
                    ),
                    title: "instagram icons",
                  },
                  /*#__PURE__*/ _react.default.createElement("img", {
                    src: _twitter.default,
                    className: "social-media",
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "a",
                  {
                    href: exchange.telegram_url,
                    title: "facebook icons",
                  },
                  /*#__PURE__*/ _react.default.createElement("img", {
                    src: _telegram.default,
                    className: "social-media",
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "a",
                  {
                    href: exchange.reddit_url,
                    title: "facebook icons",
                  },
                  /*#__PURE__*/ _react.default.createElement("img", {
                    src: _reddit.default,
                    className: "social-media",
                  })
                )
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              "tr",
              null,
              /*#__PURE__*/ _react.default.createElement(
                "th",
                {
                  scope: "row",
                  className: "title",
                },
                "Description"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "td",
                null,
                exchange.description
              )
            )
          )
        )
      )
    )
  );
}

var _default = Details;
exports.default = _default;

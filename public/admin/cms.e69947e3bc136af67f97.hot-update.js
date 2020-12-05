webpackHotUpdate("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: HomePageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageTemplate", function() { return HomePageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_after__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _img_headshot_placeholder_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/headshot-placeholder.svg */ "./src/img/headshot-placeholder.svg");
/* harmony import */ var _img_headshot_placeholder_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_headshot_placeholder_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CustomLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CustomLink */ "./src/components/CustomLink.js");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_home_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
/* harmony import */ var _components_TrainingRoll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TrainingRoll */ "./src/components/TrainingRoll.js");
/* harmony import */ var _components_NotificationsRoll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/NotificationsRoll */ "./src/components/NotificationsRoll.js");
/* harmony import */ var _components_NewsRoll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NewsRoll */ "./src/components/NewsRoll.js");
/* harmony import */ var _components_GameRoll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/GameRoll */ "./src/components/GameRoll.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_17__);


var _this = undefined,
    _jsxFileName = "/Users/wy/project/cms/demo-cms/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


















var HomePageTemplate = function HomePageTemplate(_ref) {
  var home = _ref.home,
      _ref$upcomingGame = _ref.upcomingGame,
      upcomingGame = _ref$upcomingGame === void 0 ? null : _ref$upcomingGame;
  // const [curTab, setCurTab] = useState("1");
  // const events = upcomingGame && upcomingGame.events;
  // const latitude =
  //   upcomingGame && parseFloat(upcomingGame.location.mapsLatitude);
  // const longitude =
  //   upcomingGame && parseFloat(upcomingGame.location.mapsLongitude);
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var renderCard = function renderCard(item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "notificationsAndNews section columns is-multiline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }
    }, item && item.map(function (galleryImage, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "is-parent column is-4",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        className: "title has-text-primary is-size-4",
        to: galleryImage.url,
        style: {
          color: "red",
          witdh: "100%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "notificationsAndNews-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, galleryImage.name)));
    }));
  }; // const renderInfo = () => {
  //   if (curTab === "1") {
  //     return <NewsRoll />;
  //   } else {
  //     return <NotificationsRoll />;
  //   }
  // };


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object.assign({}, settings, {
    style: {
      width: "100vw"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), home.headerCarousel.gallery.map(function (galleryImage, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "item-" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      imageInfo: galleryImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }));
  })))), renderCard(home.newsNotifications.gallery), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "notificationsAndNews section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object.assign({}, settings, {
    style: {
      width: "100vw"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }), home.centerCarousel.gallery.map(function (galleryImage, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "item-" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      imageInfo: galleryImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    }));
  }))), renderCard(home.educations.gallery), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "cooperation section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "cooperation-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }, home.cooperation.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cooperation-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cooperation-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, home.cooperation.gallery.map(function (galleryImage, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "cooperation-list-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      imageInfo: galleryImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }
    }));
  })))));
};

var HomePage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HomePage, _React$Component);

  function HomePage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HomePage.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var _this$props$data = this.props.data,
        footerData = _this$props$data.footerData,
        navbarData = _this$props$data.navbarData;
    var home = data.homePageData.edges[0].node.frontmatter;
    var _home$seo = home.seo,
        seoTitle = _home$seo.title,
        seoDescription = _home$seo.description,
        browserTitle = _home$seo.browserTitle;
    var upcomingGame = null; // Find the next meetup that is closest to today

    data.allMarkdownRemark.edges.every(function (item) {
      var meetup = item.node.frontmatter;

      if (date_fns_is_after__WEBPACK_IMPORTED_MODULE_6___default()(meetup.rawDate, new Date())) {
        upcomingGame = meetup;
        return true;
      } else {
        return false;
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      footerData: footerData,
      navbarData: navbarData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "title",
      content: seoTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: seoDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 11
      }
    }, browserTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomePageTemplate, {
      home: home,
      upcomingGame: upcomingGame,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 9
      }
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

HomePage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    allMarkdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      edges: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
    })
  })
};
var _default = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "1418984059";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "/Users/wy/project/cms/demo-cms/src/templates/index-page.js");
  reactHotLoader.register(HomePage, "HomePage", "/Users/wy/project/cms/demo-cms/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/wy/project/cms/demo-cms/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/wy/project/cms/demo-cms/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.e69947e3bc136af67f97.hot-update.js.map
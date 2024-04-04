"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = PageHeader;
exports.Project = Project;
exports.Table = Table;
exports.TechStack = TechStack;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ReactDOM = require('react-dom');
var projects = [];
var stackMap = {
  "lambda": {
    "alt": "AWS Lambda",
    "link": "images/lambda.jpg"
  },
  "firebase": {
    "alt": "Firebase",
    "link": "images/firebase.png"
  },
  "dynamo": {
    "alt": "AWS DynamoDB",
    "link": "images/dynamodb.png"
  },
  "html": {
    "alt": "HTML",
    "link": "images/html.png"
  },
  "python": {
    "alt": "Python",
    "link": "images/python.png"
  },
  "css": {
    "alt": "CSS",
    "link": "images/css.png"
  },
  "rest": {
    "alt": "REST",
    "link": "images/rest.webp"
  },
  "github": {
    "alt": "Github",
    "link": "images/github.png"
  },
  "salesforce": {
    "alt": "Salesforce",
    "link": "images/salesforce.png"
  },
  "js": {
    "alt": "Javascript",
    "link": "images/js.png"
  },
  "java": {
    "alt": "Java",
    "link": "images/java.png"
  },
  "graphql": {
    "alt": "graphQL",
    "link": "images/graphql.png"
  },
  "s3": {
    "alt": "AWS S3",
    "link": "images/s3.png"
  }
};
var filters = [];
var currentProjects = [];
function PageHeader() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    "class": "header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      "class": "header-link-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "./index.html",
        "class": "header-link bounce",
        children: "home"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "./projects.html",
        "class": "header-link bounce",
        children: "projects"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "class": "pic-and-links",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        "class": "links",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          target: "_blank",
          "class": "social-link",
          title: "Github",
          href: "https://github.com/jacobs0925",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            "class": "img-responsive rounded-circle image",
            src: "./images/github.png"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          target: "_blank",
          "class": "social-link",
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/jjschwar/",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            "class": "img-responsive rounded-circle image",
            src: "./images/linkedin.png"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          target: "_blank",
          "class": "social-link",
          title: "Resume",
          href: "./Resume_New.pdf",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            "class": "img-responsive rounded-circle image",
            src: "./images/reusme.png"
          })
        })]
      })
    })]
  });
}
function getRelevantProjects() {
  if (filters.length == 0) {
    return projects;
  }
  var projectsToReturn = [];
  var _iterator = _createForOfIteratorHelper(projects),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      var _iterator2 = _createForOfIteratorHelper(filters),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var filter = _step2.value;
          if (project.stackLinks.includes(filter)) {
            projectsToReturn.push(project);
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return projectsToReturn;
}
function updateFilters(add, id) {
  if (add) {
    filters.push(id);
  } else {
    var index = filters.indexOf(id);
    filters.splice(index, 1);
  }
  var mainProjectsContainer = document.getElementById('project-page');
  mainProjectsContainer.innerHTML = "";
  currentProjects = [];
  var newProjects = getRelevantProjects();
  var _iterator3 = _createForOfIteratorHelper(newProjects),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var project = _step3.value;
      var projectContainer = document.createElement('div');
      ReactDOM.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(Project, {
        project: project
      }), projectContainer);
      mainProjectsContainer.appendChild(projectContainer);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  currentProjects = newProjects;
  var tableContents = document.getElementById('table-contents');
  ReactDOM.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(Table, {}), tableContents);
}
function createStackItems(project, clickable) {
  var techStack = [];
  var _iterator4 = _createForOfIteratorHelper(project.stackLinks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;
      var itemData = stackMap[item];
      itemData['id'] = item;
      if (clickable) {
        techStack.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(TechStackItem, {
          itemData: itemData
        }));
      } else {
        techStack.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(ProjectTechStackItem, {
          itemData: itemData
        }));
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return techStack;
}
;
function TechStack(_ref) {
  var project = _ref.project;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tech-stack",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tech-stack-header",
      children: "Tech Stack"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tech-stack-body",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tech-stack-scrollbar tech-scroll",
        children: createStackItems(project, true)
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tech-stack-footer"
    })]
  });
}
function TechStackItem(_ref2) {
  var itemData = _ref2.itemData;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var toggleSelected = function toggleSelected() {
    setSelected(function (prevSelected) {
      return !prevSelected;
    });
    updateFilters(!selected, itemData.id);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tech-stack-item",
    onClick: toggleSelected,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "tech-stack-grid-item",
      title: itemData.alt,
      src: itemData.link
    }), selected && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "selected-icon",
      src: "./images/selected.png",
      alt: "Selected"
    })]
  });
}
function ProjectTechStackItem(_ref3) {
  var itemData = _ref3.itemData;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    className: "tech-stack-grid-item",
    title: itemData.alt,
    src: itemData.link
  });
}
function SlidingMediaDisplay(_ref4) {
  var mediaLinks = _ref4.mediaLinks;
  if (mediaLinks == null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
  }
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentIndex = _useState4[0],
    setCurrentIndex = _useState4[1];
  var scrollLeft = function scrollLeft() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === 0 ? mediaLinks.length - 1 : prevIndex - 1;
    });
  };
  var scrollRight = function scrollRight() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === mediaLinks.length - 1 ? 0 : prevIndex + 1;
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "sliding-media",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "scroll",
      onClick: scrollLeft,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "scroll-img",
        src: "./images/scrollLeft.png"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "image-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "current-image",
        src: mediaLinks[currentIndex]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "scroll",
      onClick: scrollRight,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "scroll-img",
        src: "./images/scrollRight.png"
      })
    })]
  });
}
function TableItem(_ref5) {
  var project = _ref5.project;
  function scrollToProject() {
    var index = currentProjects.indexOf(project);
    var projectToScroll = document.getElementById('project-' + index);
    var el = document.querySelector(".holder");
    var yOffset = el.offsetTop;
    var y = projectToScroll.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onClick: scrollToProject,
    className: "contents-item",
    children: project.title
  });
}
function Table(_ref6) {
  _objectDestructuringEmpty(_ref6);
  function loadContents() {
    var contents = [];
    console.log(currentProjects);
    var _iterator5 = _createForOfIteratorHelper(currentProjects),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var project = _step5.value;
        contents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(TableItem, {
          project: project
        }));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return contents;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "table-of-contents",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "table-body",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "table-header",
        children: "Projects"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "contents-container",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "contents",
          children: loadContents()
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "table-footer"
      })]
    })
  });
}
function Project(_ref7) {
  var project = _ref7.project;
  var index = projects.indexOf(project);
  if (index == -1) {
    projects.push(project);
  }
  currentProjects.push(project);
  index = currentProjects.indexOf(project);
  var _useState5 = (0, _react.useState)("none"),
    _useState6 = _slicedToArray(_useState5, 2),
    displayState = _useState6[0],
    setDisplayState = _useState6[1];
  var toggleStack = function toggleStack() {
    setDisplayState(function (prevState) {
      return prevState == "none" ? "grid" : "none";
    });
  };
  function visitURL(url) {
    window.open(url, '_blank');
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: 'project-' + index,
    className: "project-entry-container",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "project-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        title: "View project on Github",
        target: "_blank",
        className: "title",
        href: project.projectLink,
        children: project.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "project-body",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SlidingMediaDisplay, {
          mediaLinks: project.mediaLinks
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "scrollbar scrollbar-primary project-scroll",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "summary",
            dangerouslySetInnerHTML: {
              __html: project.summary
            }
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          display: project.githubLink != "" && project.projectLink != "" ? "flex" : "none"
        },
        className: "button-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            visitURL(project.githubLink);
          },
          style: {
            display: project.githubLink != "" ? "flex" : "none"
          },
          type: "button",
          className: "about-me-button btn btn-primary project-button",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "about-me-button-text",
            children: "Github"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            visitURL(project.projectLink);
          },
          style: {
            display: project.projectLink != "" ? "flex" : "none"
          },
          type: "button",
          className: "about-me-button btn btn-primary project-button",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "about-me-button-text",
            children: "Visit"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tech-stack-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          onClick: toggleStack,
          className: "toggle-stack",
          children: "Show Project Stack"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "tech-stack-grid",
          style: {
            gridTemplateColumns: 'repeat(6, 1fr)',
            display: displayState
          },
          children: createStackItems(project, false)
        })]
      })]
    })
  });
}

//make tech stack more obvious and fix tech stack filtering

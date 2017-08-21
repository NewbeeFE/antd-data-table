/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = antd;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(1);
var update = __webpack_require__(3);
var SearchField_1 = __webpack_require__(6);
var TableView_1 = __webpack_require__(9);
/** Your component */
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialColumns = _this.props.initialColumns;
        _this.state = {
            columns: _this.props.initialColumns,
            data: [],
            page: 1,
            pagination: {},
            currentValues: {},
            tableLoading: false,
            searchButtonLoading: false
        };
        _this.filterPannel = (React.createElement(antd_1.Card, { bodyStyle: { padding: '1em' } }, _this.initialColumns.map(function (column) {
            var isSelected = _this.state.columns.find(function (c) { return c.key === column.key; }) !== undefined;
            var onChange = function (e) {
                if (e.target.checked) {
                    _this.showColumn(column.key);
                }
                else {
                    _this.hideColumn(column.key);
                }
            };
            return (React.createElement("p", { key: column.key, style: { marginTop: '.5em', marginBottom: '.5em' } },
                React.createElement(antd_1.Checkbox, { defaultChecked: isSelected, onChange: onChange }, column.title)));
        })));
        _this.startTableLoading = function () {
            _this.setState({ tableLoading: true });
        };
        _this.stopTableLoading = function () {
            _this.setState({ tableLoading: false });
        };
        _this.startSearchButtonLoading = function () {
            _this.setState({ searchButtonLoading: true });
        };
        _this.stopSearchButtonLoading = function () {
            _this.setState({ searchButtonLoading: false });
        };
        _this.tableTitle = function (currentPageData) {
            return React.createElement(antd_1.Row, { type: 'flex', justify: 'end' },
                React.createElement(antd_1.Col, null,
                    React.createElement(antd_1.Dropdown, { overlay: _this.filterPannel, trigger: ['click'] },
                        React.createElement(antd_1.Button, null, "\u5217\u8868\u9009\u9879"))));
        };
        _this.applyData = function (data) {
            _this.setState({ data: data });
        };
        _this.applyValues = function (values, cb) {
            _this.setState({ currentValues: values }, cb);
        };
        _this.clearPagination = function () {
            var pager = __assign({}, _this.state.pagination);
            pager.current = 1;
            _this.setState({ pagination: pager });
        };
        _this.handleChange = function (pagination) { return __awaiter(_this, void 0, void 0, function () {
            var onError, pager;
            return __generator(this, function (_a) {
                onError = this.props.onError;
                pager = __assign({}, this.state.pagination);
                pager.current = pagination.current;
                this.setState({ pagination: pager });
                this.fetch(pager.current || 1);
                return [2 /*return*/];
            });
        }); };
        _this.fetch = function (page, values, clearPagination) {
            if (values === void 0) { values = _this.state.currentValues; }
            if (clearPagination === void 0) { clearPagination = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var onError;
                return __generator(this, function (_a) {
                    onError = this.props.onError;
                    this.applyValues(values, function () { return __awaiter(_this, void 0, void 0, function () {
                        var pager, res, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, 3, 4]);
                                    this.startTableLoading();
                                    pager = __assign({}, this.state.pagination);
                                    return [4 /*yield*/, this.props.onSearch({
                                            page: page,
                                            // pageSize 有 default
                                            pageSize: this.props.pageSize,
                                            values: this.state.currentValues
                                        })
                                        // TODO: 约定 total 字段
                                    ];
                                case 1:
                                    res = _a.sent();
                                    // TODO: 约定 total 字段
                                    pager.total = Number(res.headers['x-total-count']);
                                    this.setState({
                                        pagination: pager
                                    });
                                    // TODO: 约定 dataSource 字段
                                    this.applyData(res.data);
                                    if (clearPagination === true) {
                                        this.clearPagination();
                                    }
                                    return [3 /*break*/, 4];
                                case 2:
                                    e_1 = _a.sent();
                                    onError && onError(e_1);
                                    return [3 /*break*/, 4];
                                case 3:
                                    this.stopTableLoading();
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        _this.hideColumn = function (key) {
            _this.state.columns.forEach(function (column, i) {
                if (column.key === key) {
                    _this.setState({
                        columns: update(_this.state.columns, { $splice: [[i, 1]] })
                    });
                }
            });
        };
        _this.showColumn = function (key) {
            _this.initialColumns.forEach(function (column, i) {
                if (column.key === key) {
                    _this.setState({
                        columns: update(_this.state.columns, { $splice: [[i, 0, column]] })
                    });
                }
            });
        };
        return _this;
    }
    DataTable.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(SearchField_1.default, __assign({}, this.props, { fetch: this.fetch }))),
            React.createElement("div", null,
                React.createElement(TableView_1.default, __assign({ title: this.tableTitle, loading: this.state.tableLoading }, this.props, { columns: this.state.columns, data: this.state.data, fetch: this.fetch, onTableChange: this.handleChange, pagination: this.state.pagination })))));
    };
    return DataTable;
}(React.Component));
exports.DataTable = DataTable;
/** Export as default */
exports.default = DataTable;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(4);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

/* istanbul ignore next */
function copy(object) {
  if (object instanceof Array) {
    return assign(object.constructor(object.length), object)
  } else if (object && typeof object === 'object') {
    var prototype = object.constructor && object.constructor.prototype
    return assign(Object.create(prototype || null), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };
  update.isEquals = function(a, b) { return a === b; };

  return update;

  function update(object, spec) {
    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && update.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey = update(object[key], spec[key]);
        if (!update.isEquals(nextValueForKey, nextObject[key]) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          nextObject[key] = nextValueForKey;
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function(value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function(value, nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $unset: function(value, nextObject, spec, originalObject) {
    invariant(
      Array.isArray(value),
      'update(): expected spec of $unset to be an array; got %s. ' +
      'Did you forget to wrap the key(s) in an array?',
      value
    );
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

module.exports = newContext();
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  var specValue = spec[command];
  invariant(
    Array.isArray(specValue),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    specValue
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(1);
var FormItem = antd_1.Form.Item;
var comesWithRenderer = {
    input: __webpack_require__(7),
    select: __webpack_require__(8)
};
/** Your component */
var SearchField = /** @class */ (function (_super) {
    __extends(SearchField, _super);
    function SearchField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expand: false,
            loading: false
        };
        _this.shouldHandleCollapse = _this.props.maxVisibleFieldCount && _this.props.searchFields.length > _this.props.maxVisibleFieldCount;
        _this.toggleExpand = function () {
            var expand = _this.state.expand;
            _this.setState({ expand: !expand });
        };
        _this.getFields = function () {
            var _a = _this.props, form = _a.form, maxVisibleFieldCount = _a.maxVisibleFieldCount, searchFields = _a.searchFields;
            if (!form) {
                return false;
            }
            var getFieldDecorator = form.getFieldDecorator;
            var formItemLayout = {
                labelCol: { span: 8 },
                wrapperCol: { span: 16 }
            };
            var count = _this.state.expand ? searchFields.length : maxVisibleFieldCount || searchFields.length;
            return _this.props.searchFields.map(function (searchField, i) {
                var renderComponent = function () {
                    if (searchField.renderer) {
                        // 自定义 renderer
                        return searchField.renderer(searchField.payload);
                    }
                    else {
                        // 自带 renderer
                        if (searchField.type) {
                            if (comesWithRenderer[searchField.type]) {
                                return comesWithRenderer[searchField.type](searchField.payload);
                            }
                            else {
                                console.warn('Unknown renderer:', searchField.type);
                                return false;
                            }
                        }
                        else {
                            // 既没有 type 又没有 renderer
                            console.warn('Renderer or Type should exist in search field');
                            return false;
                        }
                    }
                };
                return (React.createElement(antd_1.Col, { span: 6, key: i, style: _this.shouldHandleCollapse ? { display: i < count ? 'block' : 'none' } : { display: 'block' } },
                    React.createElement(FormItem, __assign({}, formItemLayout, { label: searchField.label }), getFieldDecorator(searchField.name, { rules: searchField.validationRule })(renderComponent()))));
            });
        };
        _this.clearField = function () {
            var form = _this.props.form;
            if (!form) {
                return false;
            }
            form.resetFields();
        };
        _this.onSearch = function () {
            var _a = _this.props, form = _a.form, onError = _a.onError, onValidateFailed = _a.onValidateFailed, pageSize = _a.pageSize, fetch = _a.fetch;
            if (!form) {
                return false;
            }
            var validateFields = form.validateFields;
            validateFields(function (err, values) {
                // 删除空字段
                for (var key in values) {
                    if (!values[key]) {
                        delete values[key];
                    }
                }
                if (err) {
                    onValidateFailed && onValidateFailed(err);
                    return;
                }
                // 从 search field 搜索从第 1 页开始
                fetch(1, values, true);
            });
        };
        return _this;
    }
    SearchField.prototype.render = function () {
        return (React.createElement(antd_1.Form, { className: 'ant-advanced-search-form' },
            React.createElement(antd_1.Row, { gutter: 40 }, this.getFields()),
            React.createElement(antd_1.Row, null,
                React.createElement(antd_1.Col, { span: 24, style: { textAlign: 'right' } },
                    React.createElement(antd_1.Button, { type: 'primary', onClick: this.onSearch, loading: this.state.loading }, "Search"),
                    React.createElement(antd_1.Button, { style: { marginLeft: 8 }, onClick: this.clearField }, "Clear"),
                    this.shouldHandleCollapse && (React.createElement("a", { style: { marginLeft: 8, fontSize: 12 }, onClick: this.toggleExpand },
                        "Collapse ",
                        React.createElement(antd_1.Icon, { type: this.state.expand ? 'up' : 'down' })))))));
    };
    return SearchField;
}(React.Component));
exports.SearchField = SearchField;
/** Export as default */
exports.default = antd_1.Form.create()(SearchField);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(1);
module.exports = function (payload) {
    return (React.createElement(antd_1.Input, __assign({}, payload && payload.props)));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(1);
module.exports = function (payload) {
    if (!payload || !payload.options) {
        console.warn('select renderere expected `options`');
        return null;
    }
    var options = payload.options;
    return (React.createElement(antd_1.Select, __assign({}, payload && payload.props), options.map(function (option) {
        return (React.createElement(antd_1.Select.Option, { key: option.key, value: option.value }, option.label));
    })));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(1);
var TableView = /** @class */ (function (_super) {
    __extends(TableView, _super);
    function TableView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableView.prototype.render = function () {
        return (React.createElement(antd_1.Table, { title: this.props.title, loading: this.props.loading, columns: this.props.columns, dataSource: this.props.data, onChange: this.props.onTableChange, pagination: this.props.pagination }));
    };
    return TableView;
}(React.Component));
exports.default = TableView;


/***/ })
/******/ ]);
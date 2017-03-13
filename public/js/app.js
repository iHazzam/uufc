/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(30);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(25);
var parseHeaders = __webpack_require__(31);
var isURLSameOrigin = __webpack_require__(29);
var createError = __webpack_require__(7);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(27);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(21);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
 Highstock JS v5.0.9 (2017-03-08)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,a){"object"===typeof module&&module.exports?module.exports=K.document?a(K):a:K.Highcharts=a(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,D=a.document,A=a.navigator&&a.navigator.userAgent||"",G=D&&D.createElementNS&&!!D.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,H=/(edge|msie|trident)/i.test(A)&&!window.opera,w=!G,k=/Firefox/.test(A),t=k&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.9",deg2rad:2*Math.PI/360,doc:D,hasBidiBug:t,hasTouch:D&&void 0!==D.documentElement.ontouchstart,isMS:H,isWebKit:/AppleWebKit/.test(A),isFirefox:k,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,vml:w,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var D=[],A=a.charts,G=a.doc,H=a.win;a.error=function(w,k){w=a.isNumber(w)?"Highcharts error #"+
w+": www.highcharts.com/errors/"+w:w;if(k)throw Error(w);H.console&&console.log(w)};a.Fx=function(a,k,t){this.options=k;this.elem=a;this.prop=t};a.Fx.prototype={dSetter:function(){var a=this.paths[0],k=this.paths[1],t=[],x=this.now,p=a.length,m;if(1===x)t=this.toD;else if(p===k.length&&1>x)for(;p--;)m=parseFloat(a[p]),t[p]=isNaN(m)?a[p]:x*parseFloat(k[p]-m)+m;else t=k;this.elem.attr("d",t,null,!0)},update:function(){var a=this.elem,k=this.prop,t=this.now,x=this.options.step;if(this[k+"Setter"])this[k+
"Setter"]();else a.attr?a.element&&a.attr(k,t,null,!0):a.style[k]=t+this.unit;x&&x.call(a,t,this)},run:function(a,k,t){var w=this,p=function(a){return p.stopped?!1:w.step(a)},m;this.startTime=+new Date;this.start=a;this.end=k;this.unit=t;this.now=this.start;this.pos=0;p.elem=this.elem;p.prop=this.prop;p()&&1===D.push(p)&&(p.timerId=setInterval(function(){for(m=0;m<D.length;m++)D[m]()||D.splice(m--,1);D.length||clearInterval(p.timerId)},13))},step:function(a){var k=+new Date,w,x=this.options;w=this.elem;
var p=x.complete,m=x.duration,e=x.curAnim,d;if(w.attr&&!w.element)w=!1;else if(a||k>=m+this.startTime){this.now=this.end;this.pos=1;this.update();a=e[this.prop]=!0;for(d in e)!0!==e[d]&&(a=!1);a&&p&&p.call(w);w=!1}else this.pos=x.easing((k-this.startTime)/m),this.now=this.start+(this.end-this.start)*this.pos,this.update(),w=!0;return w},initPath:function(w,k,t){function x(a){var b,h;for(C=a.length;C--;)b="M"===a[C]||"L"===a[C],h=/[a-zA-Z]/.test(a[C+3]),b&&h&&a.splice(C+1,0,a[C+1],a[C+2],a[C+1],a[C+
2])}function p(a,f){for(;a.length<u;){a[0]=f[u-a.length];var h=a.slice(0,b);[].splice.apply(a,[0,0].concat(h));q&&(h=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(h)),C--)}a[0]="M"}function m(a,f){for(var h=(u-a.length)/b;0<h&&h--;)c=a.slice().splice(a.length/r-b,b*r),c[0]=f[u-b-h*b],z&&(c[b-6]=c[b-2],c[b-5]=c[b-1]),[].splice.apply(a,[a.length/r,0].concat(c)),q&&h--}k=k||"";var e,d=w.startX,l=w.endX,z=-1<k.indexOf("C"),b=z?7:3,u,c,C;k=k.split(" ");t=t.slice();var q=w.isArea,r=q?2:1,h;
z&&(x(k),x(t));if(d&&l){for(C=0;C<d.length;C++)if(d[C]===l[0]){e=C;break}else if(d[0]===l[l.length-d.length+C]){e=C;h=!0;break}void 0===e&&(k=[])}k.length&&a.isNumber(e)&&(u=t.length+e*r*b,h?(p(k,t),m(t,k)):(p(t,k),m(k,t)));return[k,t]}};a.extend=function(a,k){var w;a||(a={});for(w in k)a[w]=k[w];return a};a.merge=function(){var w,k=arguments,t,x={},p=function(m,e){var d,l;"object"!==typeof m&&(m={});for(l in e)e.hasOwnProperty(l)&&(d=e[l],a.isObject(d,!0)&&"renderTo"!==l&&"number"!==typeof d.nodeType?
m[l]=p(m[l]||{},d):m[l]=e[l]);return m};!0===k[0]&&(x=k[1],k=Array.prototype.slice.call(k,2));t=k.length;for(w=0;w<t;w++)x=p(x,k[w]);return x};a.pInt=function(a,k){return parseInt(a,k||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(w,k){return w&&"object"===typeof w&&(!k||!a.isArray(w))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,k){for(var w=a.length;w--;)if(a[w]===k){a.splice(w,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(w,k,t){var x,p;if(a.isString(k))a.defined(t)?w.setAttribute(k,t):w&&w.getAttribute&&(p=w.getAttribute(k));else if(a.defined(k)&&a.isObject(k))for(x in k)w.setAttribute(x,k[x]);return p};a.splat=function(w){return a.isArray(w)?w:[w]};a.syncTimeout=function(a,k,t){if(k)return setTimeout(a,k,t);a.call(0,t)};a.pick=function(){var a=arguments,k,t,x=a.length;for(k=
0;k<x;k++)if(t=a[k],void 0!==t&&null!==t)return t};a.css=function(w,k){a.isMS&&!a.svg&&k&&void 0!==k.opacity&&(k.filter="alpha(opacity\x3d"+100*k.opacity+")");a.extend(w.style,k)};a.createElement=function(w,k,t,x,p){w=G.createElement(w);var m=a.css;k&&a.extend(w,k);p&&m(w,{padding:0,border:"none",margin:0});t&&m(w,t);x&&x.appendChild(w);return w};a.extendClass=function(w,k){var t=function(){};t.prototype=new w;a.extend(t.prototype,k);return t};a.pad=function(a,k,t){return Array((k||2)+1-String(a).length).join(t||
0)+a};a.relativeLength=function(a,k){return/%$/.test(a)?k*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,k,t){var x=a[k];a[k]=function(){var a=Array.prototype.slice.call(arguments),m=arguments,e=this;e.proceed=function(){x.apply(e,arguments.length?arguments:m)};a.unshift(x);a=t.apply(this,a);e.proceed=null;return a}};a.getTZOffset=function(w){var k=a.Date;return 6E4*(k.hcGetTimezoneOffset&&k.hcGetTimezoneOffset(w)||k.hcTimezoneOffset||0)};a.dateFormat=function(w,k,t){if(!a.defined(k)||isNaN(k))return a.defaultOptions.lang.invalidDate||
"";w=a.pick(w,"%Y-%m-%d %H:%M:%S");var x=a.Date,p=new x(k-a.getTZOffset(k)),m,e=p[x.hcGetHours](),d=p[x.hcGetDay](),l=p[x.hcGetDate](),z=p[x.hcGetMonth](),b=p[x.hcGetFullYear](),u=a.defaultOptions.lang,c=u.weekdays,C=u.shortWeekdays,q=a.pad,x=a.extend({a:C?C[d]:c[d].substr(0,3),A:c[d],d:q(l),e:q(l,2," "),w:d,b:u.shortMonths[z],B:u.months[z],m:q(z+1),y:b.toString().substr(2,2),Y:b,H:q(e),k:e,I:q(e%12||12),l:e%12||12,M:q(p[x.hcGetMinutes]()),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:q(p.getSeconds()),L:q(Math.round(k%
1E3),3)},a.dateFormats);for(m in x)for(;-1!==w.indexOf("%"+m);)w=w.replace("%"+m,"function"===typeof x[m]?x[m](k):x[m]);return t?w.substr(0,1).toUpperCase()+w.substr(1):w};a.formatSingle=function(w,k){var t=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(w)?(t=(t=w.match(t))?t[1]:-1,null!==k&&(k=a.numberFormat(k,t,x.decimalPoint,-1<w.indexOf(",")?x.thousandsSep:""))):k=a.dateFormat(w,k);return k};a.format=function(w,k){for(var t="{",x=!1,p,m,e,d,l=[],z;w;){t=w.indexOf(t);if(-1===t)break;p=w.slice(0,
t);if(x){p=p.split(":");m=p.shift().split(".");d=m.length;z=k;for(e=0;e<d;e++)z=z[m[e]];p.length&&(z=a.formatSingle(p.join(":"),z));l.push(z)}else l.push(p);w=w.slice(t+1);t=(x=!x)?"}":"{"}l.push(w);return l.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(w,k,t,x,p){var m,e=w;t=a.pick(t,1);m=w/t;k||(k=p?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===x&&(1===t?k=a.grep(k,function(a){return 0===a%1}):.1>=t&&(k=[1/t])));
for(x=0;x<k.length&&!(e=k[x],p&&e*t>=w||!p&&m<=(k[x]+(k[x+1]||k[x]))/2);x++);return e=a.correctFloat(e*t,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,k){var t=a.length,x,p;for(p=0;p<t;p++)a[p].safeI=p;a.sort(function(a,e){x=k(a,e);return 0===x?a.safeI-e.safeI:x});for(p=0;p<t;p++)delete a[p].safeI};a.arrayMin=function(a){for(var k=a.length,t=a[0];k--;)a[k]<t&&(t=a[k]);return t};a.arrayMax=function(a){for(var k=a.length,t=a[0];k--;)a[k]>t&&(t=a[k]);return t};a.destroyObjectProperties=
function(a,k){for(var t in a)a[t]&&a[t]!==k&&a[t].destroy&&a[t].destroy(),delete a[t]};a.discardElement=function(w){var k=a.garbageBin;k||(k=a.createElement("div"));w&&k.appendChild(w);k.innerHTML=""};a.correctFloat=function(a,k){return parseFloat(a.toPrecision(k||14))};a.setAnimation=function(w,k){k.renderer.globalAnimation=a.pick(w,k.options.chart.animation,!0)};a.animObject=function(w){return a.isObject(w)?a.merge(w):{duration:w?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(w,k,t,x){w=+w||0;k=+k;var p=a.defaultOptions.lang,m=(w.toString().split(".")[1]||"").length,e,d;-1===k?k=Math.min(m,20):a.isNumber(k)||(k=2);d=(Math.abs(w)+Math.pow(10,-Math.max(k,m)-1)).toFixed(k);m=String(a.pInt(d));e=3<m.length?m.length%3:0;t=a.pick(t,p.decimalPoint);x=a.pick(x,p.thousandsSep);w=(0>w?"-":"")+(e?m.substr(0,e)+x:"");w+=m.substr(e).replace(/(\d{3})(?=\d)/g,"$1"+x);k&&(w+=t+d.slice(-k));return w};Math.easeInOutSine=
function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(w,k){return"width"===k?Math.min(w.offsetWidth,w.scrollWidth)-a.getStyle(w,"padding-left")-a.getStyle(w,"padding-right"):"height"===k?Math.min(w.offsetHeight,w.scrollHeight)-a.getStyle(w,"padding-top")-a.getStyle(w,"padding-bottom"):(w=H.getComputedStyle(w,void 0))&&a.pInt(w.getPropertyValue(k))};a.inArray=function(a,k){return k.indexOf?k.indexOf(a):[].indexOf.call(k,a)};a.grep=function(a,k){return[].filter.call(a,k)};a.find=function(a,
k){return[].find.call(a,k)};a.map=function(a,k){for(var t=[],x=0,p=a.length;x<p;x++)t[x]=k.call(a[x],a[x],x,a);return t};a.offset=function(a){var k=G.documentElement;a=a.getBoundingClientRect();return{top:a.top+(H.pageYOffset||k.scrollTop)-(k.clientTop||0),left:a.left+(H.pageXOffset||k.scrollLeft)-(k.clientLeft||0)}};a.stop=function(a,k){for(var t=D.length;t--;)D[t].elem!==a||k&&k!==D[t].prop||(D[t].stopped=!0)};a.each=function(a,k,t){return Array.prototype.forEach.call(a,k,t)};a.addEvent=function(w,
k,t){function x(a){a.target=a.srcElement||H;t.call(w,a)}var p=w.hcEvents=w.hcEvents||{};w.addEventListener?w.addEventListener(k,t,!1):w.attachEvent&&(w.hcEventsIE||(w.hcEventsIE={}),w.hcEventsIE[t.toString()]=x,w.attachEvent("on"+k,x));p[k]||(p[k]=[]);p[k].push(t);return function(){a.removeEvent(w,k,t)}};a.removeEvent=function(w,k,t){function x(a,d){w.removeEventListener?w.removeEventListener(a,d,!1):w.attachEvent&&(d=w.hcEventsIE[d.toString()],w.detachEvent("on"+a,d))}function p(){var a,d;if(w.nodeName)for(d in k?
(a={},a[k]=!0):a=e,a)if(e[d])for(a=e[d].length;a--;)x(d,e[d][a])}var m,e=w.hcEvents,d;e&&(k?(m=e[k]||[],t?(d=a.inArray(t,m),-1<d&&(m.splice(d,1),e[k]=m),x(k,t)):(p(),e[k]=[])):(p(),w.hcEvents={}))};a.fireEvent=function(w,k,t,x){var p;p=w.hcEvents;var m,e;t=t||{};if(G.createEvent&&(w.dispatchEvent||w.fireEvent))p=G.createEvent("Events"),p.initEvent(k,!0,!0),a.extend(p,t),w.dispatchEvent?w.dispatchEvent(p):w.fireEvent(k,p);else if(p)for(p=p[k]||[],m=p.length,t.target||a.extend(t,{preventDefault:function(){t.defaultPrevented=
!0},target:w,type:k}),k=0;k<m;k++)(e=p[k])&&!1===e.call(w,t)&&t.preventDefault();x&&!t.defaultPrevented&&x(t)};a.animate=function(w,k,t){var x,p="",m,e,d;a.isObject(t)||(x=arguments,t={duration:x[2],easing:x[3],complete:x[4]});a.isNumber(t.duration)||(t.duration=400);t.easing="function"===typeof t.easing?t.easing:Math[t.easing]||Math.easeInOutSine;t.curAnim=a.merge(k);for(d in k)a.stop(w,d),e=new a.Fx(w,t,d),m=null,"d"===d?(e.paths=e.initPath(w,w.d,k.d),e.toD=k.d,x=0,m=1):w.attr?x=w.attr(d):(x=parseFloat(a.getStyle(w,
d))||0,"opacity"!==d&&(p="px")),m||(m=k[d]),m&&m.match&&m.match("px")&&(m=m.replace(/px/g,"")),e.run(x,m,p)};a.seriesType=function(w,k,t,x,p){var m=a.getOptions(),e=a.seriesTypes;m.plotOptions[w]=a.merge(m.plotOptions[k],t);e[w]=a.extendClass(e[k]||function(){},x);e[w].prototype.type=w;p&&(e[w].prototype.pointClass=a.extendClass(a.Point,p));return e[w]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),k=0;return function(){return"highcharts-"+a+"-"+k++}}();H.jQuery&&(H.jQuery.fn.highcharts=
function(){var w=[].slice.call(arguments);if(this[0])return w[0]?(new (a[a.isString(w[0])?w.shift():"Chart"])(this[0],w[0],w[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});G&&!G.defaultView&&(a.getStyle=function(w,k){var t={width:"clientWidth",height:"clientHeight"}[k];if(w.style[k])return a.pInt(w.style[k]);"opacity"===k&&(k="filter");if(t)return w.style.zoom=1,Math.max(w[t]-2*a.getStyle(w,"padding"),0);w=w.currentStyle[k.replace(/\-(\w)/g,function(a,p){return p.toUpperCase()})];"filter"===
k&&(w=w.replace(/alpha\(opacity=([0-9]+)\)/,function(a,p){return p/100}));return""===w?1:a.pInt(w)});Array.prototype.forEach||(a.each=function(a,k,t){for(var x=0,p=a.length;x<p;x++)if(!1===k.call(t,a[x],x,a))return x});Array.prototype.indexOf||(a.inArray=function(a,k){var t,x=0;if(k)for(t=k.length;x<t;x++)if(k[x]===a)return x;return-1});Array.prototype.filter||(a.grep=function(a,k){for(var t=[],x=0,p=a.length;x<p;x++)k(a[x],x)&&t.push(a[x]);return t});Array.prototype.find||(a.find=function(a,k){var t,
x=a.length;for(t=0;t<x;t++)if(k(a[t],t))return a[t]})})(K);(function(a){var D=a.each,A=a.isNumber,G=a.map,H=a.merge,w=a.pInt;a.Color=function(k){if(!(this instanceof a.Color))return new a.Color(k);this.init(k)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[w(a[1]),w(a[2]),w(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[w(a[1]),
w(a[2]),w(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(k){var t,x,p,m;if((this.input=k=this.names[k]||k)&&k.stops)this.stops=G(k.stops,function(e){return new a.Color(e[1])});else if(k&&"#"===k[0]&&(t=k.length,k=parseInt(k.substr(1),16),7===t?x=[(k&16711680)>>16,(k&65280)>>8,k&255,1]:4===t&&(x=[(k&3840)>>4|(k&3840)>>8,(k&240)>>4|k&240,(k&15)<<4|k&15,1])),!x)for(p=this.parsers.length;p--&&!x;)m=this.parsers[p],(t=m.regex.exec(k))&&(x=m.parse(t));this.rgba=x||[]},get:function(a){var k=
this.input,x=this.rgba,p;this.stops?(p=H(k),p.stops=[].concat(p.stops),D(this.stops,function(m,e){p.stops[e]=[p.stops[e][0],m.get(a)]})):p=x&&A(x[0])?"rgb"===a||!a&&1===x[3]?"rgb("+x[0]+","+x[1]+","+x[2]+")":"a"===a?x[3]:"rgba("+x.join(",")+")":k;return p},brighten:function(a){var k,x=this.rgba;if(this.stops)D(this.stops,function(p){p.brighten(a)});else if(A(a)&&0!==a)for(k=0;3>k;k++)x[k]+=w(255*a),0>x[k]&&(x[k]=0),255<x[k]&&(x[k]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};
a.color=function(k){return new a.Color(k)}})(K);(function(a){var D,A,G=a.addEvent,H=a.animate,w=a.attr,k=a.charts,t=a.color,x=a.css,p=a.createElement,m=a.defined,e=a.deg2rad,d=a.destroyObjectProperties,l=a.doc,z=a.each,b=a.extend,u=a.erase,c=a.grep,C=a.hasTouch,q=a.inArray,r=a.isArray,h=a.isFirefox,E=a.isMS,f=a.isObject,v=a.isString,n=a.isWebKit,y=a.merge,L=a.noop,F=a.pick,I=a.pInt,g=a.removeEvent,J=a.stop,Q=a.svg,P=a.SVG_NS,M=a.symbolSizes,S=a.win;D=a.SVGElement=function(){return this};D.prototype=
{opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?p(g):l.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(B,g,b){g=a.animObject(F(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),H(this,B,g)):(this.attr(B,null,b),g.step&&g.step.call(this));return this},colorGradient:function(B,g,b){var f=this.renderer,
h,n,c,d,J,F,E,v,q,N,u,l=[],I;B.linearGradient?n="linearGradient":B.radialGradient&&(n="radialGradient");if(n){c=B[n];J=f.gradients;E=B.stops;N=b.radialReference;r(c)&&(B[n]=c={x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===n&&N&&!m(c.gradientUnits)&&(d=c,c=y(c,f.getRadialAttr(N,d),{gradientUnits:"userSpaceOnUse"}));for(u in c)"id"!==u&&l.push(u,c[u]);for(u in E)l.push(E[u]);l=l.join(",");J[l]?N=J[l].attr("id"):(c.id=N=a.uniqueKey(),J[l]=F=f.createElement(n).attr(c).add(f.defs),
F.radAttr=d,F.stops=[],z(E,function(B){0===B[1].indexOf("rgba")?(h=a.color(B[1]),v=h.get("rgb"),q=h.get("a")):(v=B[1],q=1);B=f.createElement("stop").attr({offset:B[0],"stop-color":v,"stop-opacity":q}).add(F);F.stops.push(B)}));I="url("+f.url+"#"+N+")";b.setAttribute(g,I);b.gradient=l;B.toString=function(){return I}}},applyTextOutline:function(a){var B=this.element,g,b,f,h;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(B.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;
g=[].slice.call(B.getElementsByTagName("tspan"));a=a.split(" ");b=a[a.length-1];(f=a[0])&&"none"!==f&&(f=f.replace(/(^[\d\.]+)(.*?)$/g,function(a,B,g){return 2*B+g}),z(g,function(a){"highcharts-text-outline"===a.getAttribute("class")&&u(g,B.removeChild(a))}),h=B.firstChild,z(g,function(a,g){0===g&&(a.setAttribute("x",B.getAttribute("x")),g=B.getAttribute("y"),a.setAttribute("y",g||0),null===g&&B.setAttribute("y",0));a=a.cloneNode(1);w(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":f,
"stroke-linejoin":"round"});B.insertBefore(a,h)}))},attr:function(a,g,b,f){var B,h=this.element,n,c=this,y;"string"===typeof a&&void 0!==g&&(B=a,a={},a[B]=g);if("string"===typeof a)c=(this[a+"Getter"]||this._defaultGetter).call(this,a,h);else{for(B in a)g=a[B],y=!1,f||J(this,B),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(B)&&(n||(this.symbolAttr(a),n=!0),y=!0),!this.rotation||"x"!==B&&"y"!==B||(this.doTransform=!0),y||(y=this[B+"Setter"]||this._defaultSetter,y.call(this,
g,B,h),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(B)&&this.updateShadows(B,g,y));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}b&&b();return c},updateShadows:function(a,g,b){for(var B=this.shadows,f=B.length;f--;)b.call(B[f],"height"===a?Math.max(g-(B[f].cutHeight||0),0):"d"===a?this.d:g,a,B[f])},addClass:function(a,g){var B=this.attr("class")||"";-1===B.indexOf(a)&&(g||(a=(B+(B?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
w(this.element,"class").indexOf(a)},removeClass:function(a){w(this.element,"class",(w(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var B=this;z("x y r start end width height innerR anchorX anchorY".split(" "),function(g){B[g]=F(a[g],B[g])});B.attr({d:B.renderer.symbols[B.symbolName](B.x,B.y,B.width,B.height,B)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var B,b={},f;g=g||a.strokeWidth||0;f=Math.round(g)%
2/2;a.x=Math.floor(a.x||this.x||0)+f;a.y=Math.floor(a.y||this.y||0)+f;a.width=Math.floor((a.width||this.width||0)-2*f);a.height=Math.floor((a.height||this.height||0)-2*f);m(a.strokeWidth)&&(a.strokeWidth=g);for(B in a)this[B]!==a[B]&&(this[B]=b[B]=a[B]);return b},css:function(a){var B=this.styles,g={},f=this.element,h,n="",c=!B,y=["textOverflow","width"];a&&a.color&&(a.fill=a.color);if(B)for(h in a)a[h]!==B[h]&&(g[h]=a[h],c=!0);if(c){B&&(a=b(B,g));B=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===
f.nodeName.toLowerCase()&&I(a.width);this.styles=a;B&&!Q&&this.renderer.forExport&&delete a.width;if(E&&!Q)x(this.element,a);else{B=function(a,B){return"-"+B.toLowerCase()};for(h in a)-1===q(h,y)&&(n+=h.replace(/([A-Z])/g,B)+":"+a[h]+";");n&&w(f,"style",n)}this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var B=this,b=B.element;C&&"click"===
a?(b.ontouchstart=function(a){B.touchEventFired=Date.now();a.preventDefault();g.call(b,a)},b.onclick=function(a){(-1===S.navigator.userAgent.indexOf("Android")||1100<Date.now()-(B.touchEventFired||0))&&g.call(b,a)}):b["on"+a]=g;return this},setRadialReference:function(a){var B=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;B&&B.radAttr&&B.animate(this.renderer.getRadialAttr(a,B.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},
invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,b=this.scaleX,f=this.scaleY,h=this.inverted,n=this.rotation,c=this.element;h&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];h?a.push("rotate(90) scale(-1,1)"):n&&a.push("rotate("+n+" "+(c.getAttribute("x")||0)+" "+(c.getAttribute("y")||0)+")");(m(b)||m(f))&&a.push("scale("+F(b,1)+" "+F(f,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},
toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,b){var B,f,h,n,c={};f=this.renderer;h=f.alignedObjects;var y,d;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!b||v(b))this.alignTo=B=b||"renderer",u(h,this),h.push(this),b=null}else a=this.alignOptions,g=this.alignByTranslate,B=this.alignTo;b=F(b,f[B],f);B=a.align;f=a.verticalAlign;h=(b.x||0)+(a.x||0);n=(b.y||0)+(a.y||0);"right"===B?y=1:"center"===B&&(y=2);y&&(h+=(b.width-(a.width||0))/y);c[g?
"translateX":"x"]=Math.round(h);"bottom"===f?d=1:"middle"===f&&(d=2);d&&(n+=(b.height-(a.height||0))/d);c[g?"translateY":"y"]=Math.round(n);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this},getBBox:function(a,g){var B,f=this.renderer,h,n=this.element,c=this.styles,y,d=this.textStr,J,E=f.cache,r=f.cacheKeys,v;g=F(g,this.rotation);h=g*e;y=c&&c.fontSize;void 0!==d&&(v=d.toString(),-1===v.indexOf("\x3c")&&(v=v.replace(/[0-9]/g,"0")),v+=["",g||0,y,c&&c.width,c&&c.textOverflow].join());
v&&!a&&(B=E[v]);if(!B){if(n.namespaceURI===this.SVG_NS||f.forExport){try{(J=this.fakeTS&&function(a){z(n.querySelectorAll(".highcharts-text-outline"),function(B){B.style.display=a})})&&J("none"),B=n.getBBox?b({},n.getBBox()):{width:n.offsetWidth,height:n.offsetHeight},J&&J("")}catch(U){}if(!B||0>B.width)B={width:0,height:0}}else B=this.htmlGetBBox();f.isSVG&&(a=B.width,f=B.height,c&&"11px"===c.fontSize&&17===Math.round(f)&&(B.height=f=14),g&&(B.width=Math.abs(f*Math.sin(h))+Math.abs(a*Math.cos(h)),
B.height=Math.abs(f*Math.cos(h))+Math.abs(a*Math.sin(h))));if(v&&0<B.height){for(;250<r.length;)delete E[r.shift()];E[v]||r.push(v);E[v]=B}}return B},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var B=this;B.animate({opacity:0},{duration:a||150,complete:function(){B.attr({y:-9999})}})},add:function(a){var g=this.renderer,B=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;
void 0!==this.textStr&&g.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:g.box).appendChild(B);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var g=a.parentNode;g&&g.removeChild(a)},destroy:function(){var a=this.element||{},g=this.renderer.isSVG&&"SPAN"===a.nodeName&&this.parentGroup,b,f;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;J(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(f=
0;f<this.stops.length;f++)this.stops[f]=this.stops[f].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();g&&g.div&&0===g.div.childNodes.length;)a=g.parentGroup,this.safeRemoveChild(g.div),delete g.div,g=a;this.alignTo&&u(this.renderer.alignedObjects,this);for(b in this)delete this[b];return null},shadow:function(a,g,b){var B=[],f,h,n=this.element,c,y,d,J;if(!a)this.destroyShadows();else if(!this.shadows){y=F(a.width,3);d=(a.opacity||.15)/y;J=this.parentInverted?"(-1,-1)":
"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(f=1;f<=y;f++)h=n.cloneNode(0),c=2*y+1-2*f,w(h,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":d*f,"stroke-width":c,transform:"translate"+J,fill:"none"}),b&&(w(h,"height",Math.max(w(h,"height")-c,0)),h.cutHeight=c),g?g.element.appendChild(h):n.parentNode.insertBefore(h,n),B.push(h);this.shadows=B}return this},destroyShadows:function(){z(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===
this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=F(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");b.setAttribute(g,a);this[g]=a},dashstyleSetter:function(a){var g,B=this["stroke-width"];"inherit"===B&&(B=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot",
"3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(g=a.length;g--;)a[g]=I(a[g])*B;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];
g||(g=l.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(l.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.colorGradient(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):b.setAttribute(g,a)},zIndexSetter:function(a,
g){var b=this.renderer,f=this.parentGroup,B=(f||b).element||b.box,h,n=this.element,c;h=this.added;var y;m(a)&&(n.zIndex=a,a=+a,this[g]===a&&(h=!1),this[g]=a);if(h){(a=this.zIndex)&&f&&(f.handleZ=!0);g=B.childNodes;for(y=0;y<g.length&&!c;y++)f=g[y],h=f.zIndex,f!==n&&(I(h)>a||!m(a)&&m(h)||0>a&&!m(h)&&B!==b.box)&&(B.insertBefore(n,f),c=!0);c||B.appendChild(n)}return c},_defaultSetter:function(a,g,b){b.setAttribute(g,a)}};D.prototype.yGetter=D.prototype.xGetter;D.prototype.translateXSetter=D.prototype.translateYSetter=
D.prototype.rotationSetter=D.prototype.verticalAlignSetter=D.prototype.scaleXSetter=D.prototype.scaleYSetter=function(a,g){this[g]=a;this.doTransform=!0};D.prototype["stroke-widthSetter"]=D.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(D.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=
function(){this.init.apply(this,arguments)};A.prototype={Element:D,SVG_NS:P,init:function(a,g,b,f,c,y){var B;f=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(f));B=f.element;a.appendChild(B);-1===a.innerHTML.indexOf("xmlns")&&w(B,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=B;this.boxWrapper=f;this.alignedObjects=[];this.url=(h||n)&&l.getElementsByTagName("base").length?S.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,
"%20"):"";this.createElement("desc").add().element.appendChild(l.createTextNode("Created with Highstock 5.0.9"));this.defs=this.createElement("defs").add();this.allowHTML=y;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var d;h&&a.getBoundingClientRect&&(g=function(){x(a,{left:0,top:0});d=a.getBoundingClientRect();x(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},g(),this.unSubPixelFix=G(S,"resize",g))},getStyle:function(a){return this.style=
b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;
g.init(this,a);return g},draw:L,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},buildText:function(a){var g=a.element,b=this,f=b.forExport,h=F(a.textStr,"").toString(),n=-1!==h.indexOf("\x3c"),B=g.childNodes,y,d,J,E,v=w(g,"x"),r=a.styles,q=a.textWidth,u=r&&r.lineHeight,e=r&&r.textOutline,C=r&&"ellipsis"===r.textOverflow,L=r&&"nowrap"===r.whiteSpace,m=r&&r.fontSize,p,k=B.length,r=q&&!a.added&&this.box,t=function(a){var f;f=/(px|em)$/.test(a&&a.style.fontSize)?
a.style.fontSize:m||b.style.fontSize||12;return u?I(u):b.fontMetrics(f,a.getAttribute("style")?a:g).h};p=[h,C,L,u,e,m,q].join();if(p!==a.textCache){for(a.textCache=p;k--;)g.removeChild(B[k]);n||e||C||q||-1!==h.indexOf(" ")?(y=/<.*class="([^"]+)".*>/,d=/<.*style="([^"]+)".*>/,J=/<.*href="(http[^"]+)".*>/,r&&r.appendChild(g),h=n?h.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
"\x3c/span\x3e").split(/<br.*?>/g):[h],h=c(h,function(a){return""!==a}),z(h,function(h,n){var B,c=0;h=h.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");B=h.split("|||");z(B,function(h){if(""!==h||1===B.length){var r={},F=l.createElementNS(b.SVG_NS,"tspan"),u,I;y.test(h)&&(u=h.match(y)[1],w(F,"class",u));d.test(h)&&(I=h.match(d)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),w(F,"style",I));J.test(h)&&!f&&(w(F,"onclick",'location.href\x3d"'+h.match(J)[1]+
'"'),x(F,{cursor:"pointer"}));h=(h.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==h){F.appendChild(l.createTextNode(h));c?r.dx=0:n&&null!==v&&(r.x=v);w(F,r);g.appendChild(F);!c&&n&&(!Q&&f&&x(F,{display:"block"}),w(F,"dy",t(F)));if(q){r=h.replace(/([^\^])-/g,"$1- ").split(" ");u=1<B.length||n||1<r.length&&!L;for(var e,z,m=[],p=t(F),N=a.rotation,k=h,M=k.length;(u||C)&&(r.length||m.length);)a.rotation=0,e=a.getBBox(!0),z=e.width,!Q&&b.forExport&&(z=b.measureSpanWidth(F.firstChild.data,
a.styles)),e=z>q,void 0===E&&(E=e),C&&E?(M/=2,""===k||!e&&.5>M?r=[]:(k=h.substring(0,k.length+(e?-1:1)*Math.ceil(M)),r=[k+(3<q?"\u2026":"")],F.removeChild(F.firstChild))):e&&1!==r.length?(F.removeChild(F.firstChild),m.unshift(r.pop())):(r=m,m=[],r.length&&!L&&(F=l.createElementNS(P,"tspan"),w(F,{dy:p,x:v}),I&&w(F,"style",I),g.appendChild(F)),z>q&&(q=z)),r.length&&F.appendChild(l.createTextNode(r.join(" ").replace(/- /g,"-")));a.rotation=N}c++}}})}),E&&a.attr("title",a.textStr),r&&r.removeChild(g),
e&&a.applyTextOutline&&a.applyTextOutline(e)):g.appendChild(l.createTextNode(h.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,f,h,n,c,d,J,r){var B=this.label(a,g,f,r,null,null,null,null,"button"),F=0;B.attr(y({padding:8,r:2},n));var v,q,u,l;n=y({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},n);v=n.style;delete n.style;c=y(n,{fill:"#e6e6e6"},
c);q=c.style;delete c.style;d=y(n,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);u=d.style;delete d.style;J=y(n,{style:{color:"#cccccc"}},J);l=J.style;delete J.style;G(B.element,E?"mouseover":"mouseenter",function(){3!==F&&B.setState(1)});G(B.element,E?"mouseout":"mouseleave",function(){3!==F&&B.setState(F)});B.setState=function(a){1!==a&&(B.state=F=a);B.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||
0]);B.attr([n,c,d,J][a||0]).css([v,q,u,l][a||0])};B.attr(n).css(b({cursor:"default"},v));return B.on("click",function(a){3!==F&&h.call(B,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};r(a)?g.d=a:f(a)&&b(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=f(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,b){b.setAttribute("c"+
g,a)};return g.attr(a)},arc:function(a,g,b,h,n,c){f(a)?(h=a,g=h.y,b=h.r,a=h.x):h={innerR:h,start:n,end:c};a=this.symbol("arc",a,g,b,b,h);a.r=b;return a},rect:function(a,g,b,h,n,c){n=f(a)?a.r:n;var B=this.createElement("rect");a=f(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(h,0)};void 0!==c&&(a.strokeWidth=c,a=B.crisp(a));a.fill="none";n&&(a.r=n);B.rSetter=function(a,g,b){w(b,{rx:a,ry:a})};return B.attr(a)},setSize:function(a,g,b){var h=this.alignedObjects,f=h.length;this.width=
a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?void 0:0});f--;)h[f].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,h,f,n){var c={preserveAspectRatio:"none"};1<arguments.length&&b(c,{x:g,y:h,width:f,height:n});c=this.createElement("image").attr(c);c.element.setAttributeNS?c.element.setAttributeNS("http://www.w3.org/1999/xlink",
"href",a):c.element.setAttribute("hc-svg-href",a);return c},symbol:function(a,g,h,f,n,c){var y=this,B,d=this.symbols[a],J=m(g)&&d&&this.symbols[a](Math.round(g),Math.round(h),f,n,c),r=/^url\((.*?)\)$/,E,v;d?(B=this.path(J),B.attr("fill","none"),b(B,{symbolName:a,x:g,y:h,width:f,height:n}),c&&b(B,c)):r.test(a)&&(E=a.match(r)[1],B=this.image(E),B.imgwidth=F(M[E]&&M[E].width,c&&c.width),B.imgheight=F(M[E]&&M[E].height,c&&c.height),v=function(){B.attr({width:B.width,height:B.height})},z(["width","height"],
function(a){B[a+"Setter"]=function(a,g){var b={},h=this["img"+g],f="width"===g?"translateX":"translateY";this[g]=a;m(h)&&(this.element&&this.element.setAttribute(g,h),this.alignByTranslate||(b[f]=((this[g]||0)-h)/2,this.attr(b)))}}),m(g)&&B.attr({x:g,y:h}),B.isImg=!0,m(B.imgwidth)&&m(B.imgheight)?v():(B.attr({width:0,height:0}),p("img",{onload:function(){var a=k[y.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),l.body.appendChild(this));M[E]={width:this.width,height:this.height};
B.imgwidth=this.width;B.imgheight=this.height;B.element&&v();this.parentNode&&this.parentNode.removeChild(this);y.imgCount--;if(!y.imgCount&&a&&a.onload)a.onload()},src:E}),this.imgCount++));return B},symbols:{circle:function(a,g,b,h){return this.arc(a+b/2,g+h/2,b/2,h/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,b,h){return["M",a,g,"L",a+b,g,a+b,g+h,a,g+h,"Z"]},triangle:function(a,g,b,h){return["M",a+b/2,g,"L",a+b,g+h,a,g+h,"Z"]},"triangle-down":function(a,g,b,h){return["M",a,g,"L",a+b,
g,a+b/2,g+h,"Z"]},diamond:function(a,g,b,h){return["M",a+b/2,g,"L",a+b,g+h/2,a+b/2,g+h,a,g+h/2,"Z"]},arc:function(a,g,b,h,f){var n=f.start,c=f.r||b,y=f.r||h||b,d=f.end-.001;b=f.innerR;h=f.open;var B=Math.cos(n),J=Math.sin(n),F=Math.cos(d),d=Math.sin(d);f=f.end-n<Math.PI?0:1;c=["M",a+c*B,g+y*J,"A",c,y,0,f,1,a+c*F,g+y*d];m(b)&&c.push(h?"M":"L",a+b*F,g+b*d,"A",b,b,0,f,0,a+b*B,g+b*J);c.push(h?"":"Z");return c},callout:function(a,g,b,h,f){var n=Math.min(f&&f.r||0,b,h),c=n+6,y=f&&f.anchorX;f=f&&f.anchorY;
var d;d=["M",a+n,g,"L",a+b-n,g,"C",a+b,g,a+b,g,a+b,g+n,"L",a+b,g+h-n,"C",a+b,g+h,a+b,g+h,a+b-n,g+h,"L",a+n,g+h,"C",a,g+h,a,g+h,a,g+h-n,"L",a,g+n,"C",a,g,a,g,a+n,g];y&&y>b?f>g+c&&f<g+h-c?d.splice(13,3,"L",a+b,f-6,a+b+6,f,a+b,f+6,a+b,g+h-n):d.splice(13,3,"L",a+b,h/2,y,f,a+b,h/2,a+b,g+h-n):y&&0>y?f>g+c&&f<g+h-c?d.splice(33,3,"L",a,f+6,a-6,f,a,f-6,a,g+n):d.splice(33,3,"L",a,h/2,y,f,a,h/2,a,g+n):f&&f>h&&y>a+c&&y<a+b-c?d.splice(23,3,"L",y+6,g+h,y,g+h+6,y-6,g+h,a+n,g+h):f&&0>f&&y>a+c&&y<a+b-c&&d.splice(3,
3,"L",y-6,g,y,g-6,y+6,g,b-n,g);return d}},clipRect:function(g,b,h,f){var n=a.uniqueKey(),c=this.createElement("clipPath").attr({id:n}).add(this.defs);g=this.rect(g,b,h,f,0).add(c);g.id=n;g.clipPath=c;g.count=0;return g},text:function(a,g,b,h){var f=!Q&&this.forExport,n={};if(h&&(this.allowHTML||!this.forExport))return this.html(a,g,b);n.x=Math.round(g||0);b&&(n.y=Math.round(b));if(a||0===a)n.text=a;a=this.createElement("text").attr(n);f&&a.css({position:"absolute"});h||(a.xSetter=function(a,g,b){var h=
b.getElementsByTagName("tspan"),f,n=b.getAttribute(g),c;for(c=0;c<h.length;c++)f=h[c],f.getAttribute(g)===n&&f.setAttribute(g,a);b.setAttribute(g,a)});return a},fontMetrics:function(a,g){a=a||g&&g.style&&g.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?I(a):/em/.test(a)?parseFloat(a)*(g?this.fontMetrics(null,g.parentNode).f:16):12;g=24>a?a+3:Math.round(1.2*a);return{h:g,b:Math.round(.8*g),f:a}},rotCorr:function(a,g,b){var h=a;g&&b&&(h=Math.max(h*Math.cos(g*e),4));return{x:-a/3*Math.sin(g*
e),y:h}},label:function(h,f,n,c,d,J,F,r,E){var B=this,v=B.g("button"!==E&&"label"),q=v.text=B.text("",0,0,F).attr({zIndex:1}),u,l,I=0,e=3,C=0,L,Q,P,p,k,x={},t,M,N=/^url\((.*?)\)$/.test(c),w=N,S,R,O,T;E&&v.addClass("highcharts-"+E);w=N;S=function(){return(t||0)%2/2};R=function(){var a=q.element.style,g={};l=(void 0===L||void 0===Q||k)&&m(q.textStr)&&q.getBBox();v.width=(L||l.width||0)+2*e+C;v.height=(Q||l.height||0)+2*e;M=e+B.fontMetrics(a&&a.fontSize,q).b;w&&(u||(v.box=u=B.symbols[c]||N?B.symbol(c):
B.rect(),u.addClass(("button"===E?"":"highcharts-label-box")+(E?" highcharts-"+E+"-box":"")),u.add(v),a=S(),g.x=a,g.y=(r?-M:0)+a),g.width=Math.round(v.width),g.height=Math.round(v.height),u.attr(b(g,x)),x={})};O=function(){var a=C+e,g;g=r?0:M;m(L)&&l&&("center"===k||"right"===k)&&(a+={center:.5,right:1}[k]*(L-l.width));if(a!==q.x||g!==q.y)q.attr("x",a),void 0!==g&&q.attr("y",g);q.x=a;q.y=g};T=function(a,g){u?u.attr(a,g):x[a]=g};v.onAdd=function(){q.add(v);v.attr({text:h||0===h?h:"",x:f,y:n});u&&m(d)&&
v.attr({anchorX:d,anchorY:J})};v.widthSetter=function(g){L=a.isNumber(g)?g:null};v.heightSetter=function(a){Q=a};v["text-alignSetter"]=function(a){k=a};v.paddingSetter=function(a){m(a)&&a!==e&&(e=v.padding=a,O())};v.paddingLeftSetter=function(a){m(a)&&a!==C&&(C=a,O())};v.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,l&&v.attr({x:P}))};v.textSetter=function(a){void 0!==a&&q.textSetter(a);R();O()};v["stroke-widthSetter"]=function(a,g){a&&(w=!0);t=this["stroke-width"]=a;T(g,a)};
v.strokeSetter=v.fillSetter=v.rSetter=function(a,g){"fill"===g&&a&&(w=!0);T(g,a)};v.anchorXSetter=function(a,g){d=a;T(g,Math.round(a)-S()-P)};v.anchorYSetter=function(a,g){J=a;T(g,a-p)};v.xSetter=function(a){v.x=a;I&&(a-=I*((L||l.width)+2*e));P=Math.round(a);v.attr("translateX",P)};v.ySetter=function(a){p=v.y=Math.round(a);v.attr("translateY",p)};var A=v.css;return b(v,{css:function(a){if(a){var g={};a=y(a);z(v.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});q.css(g)}return A.call(v,
a)},getBBox:function(){return{width:l.width+2*e,height:l.height+2*e,x:l.x-e,y:l.y-e}},shadow:function(a){a&&(R(),u&&u.shadow(a));return v},destroy:function(){g(v.element,"mouseenter");g(v.element,"mouseleave");q&&(q=q.destroy());u&&(u=u.destroy());D.prototype.destroy.call(v);v=B=R=O=T=null}})}};a.Renderer=A})(K);(function(a){var D=a.attr,A=a.createElement,G=a.css,H=a.defined,w=a.each,k=a.extend,t=a.isFirefox,x=a.isMS,p=a.isWebKit,m=a.pInt,e=a.SVGRenderer,d=a.win,l=a.wrap;k(a.SVGElement.prototype,
{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=k(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,
b=this.element,d=this.translateX||0,c=this.translateY||0,l=this.x||0,q=this.y||0,r=this.textAlign||"left",h={left:0,center:.5,right:1}[r],E=this.styles;G(b,{marginLeft:d,marginTop:c});this.shadows&&w(this.shadows,function(a){G(a,{marginLeft:d+1,marginTop:c+1})});this.inverted&&w(b.childNodes,function(h){a.invertChild(h,b)});if("SPAN"===b.tagName){var f=this.rotation,v=m(this.textWidth),n=E&&E.whiteSpace,y=[f,r,b.innerHTML,this.textWidth,this.textAlign].join();y!==this.cTT&&(E=a.fontMetrics(b.style.fontSize).b,
H(f)&&this.setSpanRotation(f,h,E),G(b,{width:"",whiteSpace:n||"nowrap"}),b.offsetWidth>v&&/[ \-]/.test(b.textContent||b.innerText)&&G(b,{width:v+"px",display:"block",whiteSpace:n||"normal"}),this.getSpanCorrection(b.offsetWidth,E,h,f,r));G(b,{left:l+(this.xCorr||0)+"px",top:q+(this.yCorr||0)+"px"});p&&(E=b.offsetHeight);this.cTT=y}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,u){var c={},l=x?"-ms-transform":p?"-webkit-transform":t?"MozTransform":d.opera?"-o-transform":"";c[l]=c.transform=
"rotate("+a+"deg)";c[l+(t?"Origin":"-origin")]=c.transformOrigin=100*b+"% "+u+"px";G(this.element,c)},getSpanCorrection:function(a,b,d){this.xCorr=-a*d;this.yCorr=-b}});k(e.prototype,{html:function(a,b,d){var c=this.createElement("span"),u=c.element,q=c.renderer,r=q.isSVG,h=function(a,b){w(["opacity","visibility"],function(h){l(a,h+"Setter",function(a,h,f,c){a.call(this,h,f,c);b[f]=h})})};c.textSetter=function(a){a!==u.innerHTML&&delete this.bBox;u.innerHTML=this.textStr=a;c.htmlUpdateTransform()};
r&&h(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.htmlUpdateTransform()};c.attr({text:a,x:Math.round(b),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});u.style.whiteSpace="nowrap";c.css=c.htmlCss;r&&(c.add=function(a){var b,d=q.box.parentNode,n=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)n.push(a),a=a.parentGroup;w(n.reverse(),function(a){var f,y=D(a.element,
"class");y&&(y={className:y});b=a.div=a.div||A("div",y,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||d);f=b.style;k(a,{on:function(){c.on.apply({element:n[0].div},arguments);return a},translateXSetter:function(b,g){f.left=b+"px";a[g]=b;a.doTransform=!0},translateYSetter:function(b,g){f.top=b+"px";a[g]=b;a.doTransform=!0}});h(a,f)})}}else b=d;b.appendChild(u);c.added=!0;c.alignOnAdd&&
c.htmlUpdateTransform();return c});return c}})})(K);(function(a){var D,A,G=a.createElement,H=a.css,w=a.defined,k=a.deg2rad,t=a.discardElement,x=a.doc,p=a.each,m=a.erase,e=a.extend;D=a.extendClass;var d=a.isArray,l=a.isNumber,z=a.isObject,b=a.merge;A=a.noop;var u=a.pick,c=a.pInt,C=a.SVGElement,q=a.SVGRenderer,r=a.win;a.svg||(A={docMode8:x&&8===x.documentMode,init:function(a,b){var h=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],c=["position: ","absolute",";"],n="div"===b;("shape"===b||n)&&c.push("left:0;top:0;width:1px;height:1px;");
c.push("visibility: ",n?"hidden":"visible");h.push(' style\x3d"',c.join(""),'"/\x3e');b&&(h=n||"span"===b||"img"===b?h.join(""):a.prepVML(h),this.element=G(h));this.renderer=a},add:function(a){var b=this.renderer,h=this.element,c=b.box,n=a&&a.inverted,c=a?a.element||a:c;a&&(this.parentGroup=a);n&&b.invertChild(h,c);c.appendChild(h);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},
updateTransform:C.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*k),f=Math.sin(a*k);H(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-f,", M21\x3d",f,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,f,c,n){var h=c?Math.cos(c*k):1,d=c?Math.sin(c*k):0,r=u(this.elemHeight,this.element.offsetHeight),v;this.xCorr=0>h&&-a;this.yCorr=0>d&&-r;v=0>h*d;this.xCorr+=d*b*(v?1-
f:f);this.yCorr-=h*b*(c?v?f:1-f:1);n&&"left"!==n&&(this.xCorr-=a*f*(0>h?-1:1),c&&(this.yCorr-=r*f*(0>d?-1:1)),H(this.element,{textAlign:n}))},pathToVML:function(a){for(var b=a.length,h=[];b--;)l(a[b])?h[b]=Math.round(10*a[b])-5:"Z"===a[b]?h[b]="x":(h[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(h[b+5]===h[b+7]&&(h[b+7]+=a[b+7]>a[b+5]?1:-1),h[b+6]===h[b+8]&&(h[b+8]+=a[b+8]>a[b+6]?1:-1)));return h.join(" ")||"x"},clip:function(a){var b=this,h;a?(h=a.members,m(h,b),h.push(b),b.destroyClip=function(){m(h,
b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:C.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&t(a)},destroy:function(){this.destroyClip&&this.destroyClip();return C.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=r.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var h;a=a.split(/[ ,]/);h=a.length;if(9===h||11===h)a[h-4]=a[h-2]=c(a[h-2])-10*b;return a.join(" ")},
shadow:function(a,b,f){var h=[],n,d=this.element,r=this.renderer,F,q=d.style,g,J=d.path,l,e,E,C;J&&"string"!==typeof J.value&&(J="x");e=J;if(a){E=u(a.width,3);C=(a.opacity||.15)/E;for(n=1;3>=n;n++)l=2*E+1-2*n,f&&(e=this.cutOffPath(J.value,l+.5)),g=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',l,'" filled\x3d"false" path\x3d"',e,'" coordsize\x3d"10 10" style\x3d"',d.style.cssText,'" /\x3e'],F=G(r.prepVML(g),null,{left:c(q.left)+u(a.offsetX,1),top:c(q.top)+u(a.offsetY,1)}),f&&(F.cutOff=l+1),g=['\x3cstroke color\x3d"',
a.color||"#000000",'" opacity\x3d"',C*n,'"/\x3e'],G(r.prepVML(g),null,null,F),b?b.element.appendChild(F):d.parentNode.insertBefore(F,d),h.push(F);this.shadows=h}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,f){(f.getElementsByTagName("stroke")[0]||G(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,f))[b]=a||"solid";this[b]=a},dSetter:function(a,
b,f){var h=this.shadows;a=a||[];this.d=a.join&&a.join(" ");f.path=a=this.pathToVML(a);if(h)for(f=h.length;f--;)h[f].path=h[f].cutOff?this.cutOffPath(a,h[f].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,f){var h=f.nodeName;"SPAN"===h?f.style.color=a:"IMG"!==h&&(f.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,f,b,this)))},"fill-opacitySetter":function(a,b,f){G(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,f)},opacitySetter:A,rotationSetter:function(a,
b,f){f=f.style;this[b]=f[b]=a;f.left=-Math.round(Math.sin(a*k)+1)+"px";f.top=Math.round(Math.cos(a*k))+"px"},strokeSetter:function(a,b,f){this.setAttr("strokecolor",this.renderer.color(a,f,b,this))},"stroke-widthSetter":function(a,b,f){f.stroked=!!a;this[b]=a;l(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,f){"inherit"===a&&(a="visible");this.shadows&&p(this.shadows,function(h){h.style[b]=a});"DIV"===f.nodeName&&(a="hidden"===
a?"-999em":0,this.docMode8||(f.style[b]=a?"visible":"hidden"),b="top");f.style[b]=a},xSetter:function(a,b,f){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):f.style[b]=a},zIndexSetter:function(a,b,f){f.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=D(C,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,isIE8:-1<r.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,
b,f){var h,n;this.alignedObjects=[];h=this.createElement("div").css({position:"relative"});n=h.element;a.appendChild(h.element);this.isVML=!0;this.box=n;this.boxWrapper=h;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,f,!1);if(!x.namespaces.hcv){x.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{x.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(y){x.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,f,c){var h=this.createElement(),d=z(a);return e(h,{members:[],count:0,left:(d?a.x:a)+1,top:(d?a.y:b)+1,width:(d?a.width:f)-1,height:(d?a.height:c)-1,getCSS:function(a){var b=a.element,h=b.nodeName,g=a.inverted,f=this.top-("shape"===h?b.offsetTop:0),n=this.left,b=n+this.width,c=f+this.height,f={clip:"rect("+Math.round(g?
n:f)+"px,"+Math.round(g?c:b)+"px,"+Math.round(g?b:c)+"px,"+Math.round(g?f:n)+"px)"};!g&&a.docMode8&&"DIV"===h&&e(f,{width:b+"px",height:c+"px"});return f},updateClipping:function(){p(h.members,function(a){a.element&&a.css(h.getCSS(a))})}})},color:function(b,c,f,d){var h=this,y,r=/^rgba/,F,q,g="none";b&&b.linearGradient?q="gradient":b&&b.radialGradient&&(q="pattern");if(q){var J,v,u=b.linearGradient||b.radialGradient,l,e,B,C,E,z="";b=b.stops;var m,k=[],x=function(){F=['\x3cfill colors\x3d"'+k.join(",")+
'" opacity\x3d"',B,'" o:opacity2\x3d"',e,'" type\x3d"',q,'" ',z,'focus\x3d"100%" method\x3d"any" /\x3e'];G(h.prepVML(F),null,null,c)};l=b[0];m=b[b.length-1];0<l[0]&&b.unshift([0,l[1]]);1>m[0]&&b.push([1,m[1]]);p(b,function(g,b){r.test(g[1])?(y=a.color(g[1]),J=y.get("rgb"),v=y.get("a")):(J=g[1],v=1);k.push(100*g[0]+"% "+J);b?(B=v,C=J):(e=v,E=J)});if("fill"===f)if("gradient"===q)f=u.x1||u[0]||0,b=u.y1||u[1]||0,l=u.x2||u[2]||0,u=u.y2||u[3]||0,z='angle\x3d"'+(90-180*Math.atan((u-b)/(l-f))/Math.PI)+'"',
x();else{var g=u.r,t=2*g,w=2*g,A=u.cx,D=u.cy,H=c.radialReference,K,g=function(){H&&(K=d.getBBox(),A+=(H[0]-K.x)/K.width-.5,D+=(H[1]-K.y)/K.height-.5,t*=H[2]/K.width,w*=H[2]/K.height);z='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+t+","+w+'" origin\x3d"0.5,0.5" position\x3d"'+A+","+D+'" color2\x3d"'+E+'" ';x()};d.added?g():d.onAdd=g;g=C}else g=J}else r.test(b)&&"IMG"!==c.tagName?(y=a.color(b),d[f+"-opacitySetter"](y.get("a"),f,c),g=y.get("rgb")):(g=c.getElementsByTagName(f),
g.length&&(g[0].opacity=1,g[0].type="solid"),g=b);return g},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:q.prototype.html,path:function(a){var b={coordsize:"10 10"};d(a)?b.d=
a:z(a)&&e(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,f){var c=this.symbol("circle");z(a)&&(f=a.r,b=a.y,a=a.x);c.isCircle=!0;c.r=f;return c.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,f,c,n){var h=this.createElement("img").attr({src:a});1<arguments.length&&h.attr({x:b,y:f,width:c,height:n});return h},createElement:function(a){return"rect"===a?this.symbol(a):q.prototype.createElement.call(this,
a)},invertChild:function(a,b){var f=this;b=b.style;var h="IMG"===a.tagName&&a.style;H(a,{flip:"x",left:c(b.width)-(h?c(h.top):1),top:c(b.height)-(h?c(h.left):1),rotation:-90});p(a.childNodes,function(b){f.invertChild(b,a)})},symbols:{arc:function(a,b,f,c,n){var h=n.start,d=n.end,r=n.r||f||c;f=n.innerR;c=Math.cos(h);var q=Math.sin(h),g=Math.cos(d),J=Math.sin(d);if(0===d-h)return["x"];h=["wa",a-r,b-r,a+r,b+r,a+r*c,b+r*q,a+r*g,b+r*J];n.open&&!f&&h.push("e","M",a,b);h.push("at",a-f,b-f,a+f,b+f,a+f*g,
b+f*J,a+f*c,b+f*q,"x","e");h.isArc=!0;return h},circle:function(a,b,f,c,n){n&&w(n.r)&&(f=c=2*n.r);n&&n.isCircle&&(a-=f/2,b-=c/2);return["wa",a,b,a+f,b+c,a+f,b+c/2,a+f,b+c/2,"e"]},rect:function(a,b,c,d,n){return q.prototype.symbols[w(n)&&n.r?"callout":"square"].call(0,a,b,c,d,n)}}},a.VMLRenderer=D=function(){this.init.apply(this,arguments)},D.prototype=b(q.prototype,A),a.Renderer=D);q.prototype.measureSpanWidth=function(a,b){var c=x.createElement("span");a=x.createTextNode(a);c.appendChild(a);H(c,
b);this.box.appendChild(c);b=c.offsetWidth;t(c);return b}})(K);(function(a){function D(){var p=a.defaultOptions.global,m=x.moment;if(p.timezone){if(m)return function(a){return-m.tz(a,p.timezone).utcOffset()};a.error(25)}return p.useUTC&&p.getTimezoneOffset}function A(){var p=a.defaultOptions.global,m,e=p.useUTC,d=e?"getUTC":"get",l=e?"setUTC":"set";a.Date=m=p.Date||x.Date;m.hcTimezoneOffset=e&&p.timezoneOffset;m.hcGetTimezoneOffset=D();m.hcMakeTime=function(a,b,d,c,l,q){var r;e?(r=m.UTC.apply(0,arguments),
r+=w(r)):r=(new m(a,b,t(d,1),t(c,0),t(l,0),t(q,0))).getTime();return r};H("Minutes Hours Day Date Month FullYear".split(" "),function(a){m["hcGet"+a]=d+a});H("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){m["hcSet"+a]=l+a})}var G=a.color,H=a.each,w=a.getTZOffset,k=a.merge,t=a.pick,x=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],
lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.9/gfx/vml-radial-gradient.png"},
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",
top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(p){a.defaultOptions=k(!0,a.defaultOptions,p);A();
return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;A()})(K);(function(a){var D=a.arrayMax,A=a.arrayMin,G=a.defined,H=a.destroyObjectProperties,w=a.each,k=a.erase,t=a.merge,x=a.pick;a.PlotLineOrBand=function(a,m){this.axis=a;m&&(this.options=m,this.id=m.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,m=a.axis,e=m.horiz,d=a.options,l=d.label,z=a.label,b=d.to,u=d.from,c=d.value,C=G(u)&&G(b),q=G(c),r=a.svgElem,h=!r,
E=[],f,v=d.color,n=x(d.zIndex,0),y=d.events,E={"class":"highcharts-plot-"+(C?"band ":"line ")+(d.className||"")},L={},F=m.chart.renderer,I=C?"bands":"lines",g=m.log2lin;m.isLog&&(u=g(u),b=g(b),c=g(c));q?(E={stroke:v,"stroke-width":d.width},d.dashStyle&&(E.dashstyle=d.dashStyle)):C&&(v&&(E.fill=v),d.borderWidth&&(E.stroke=d.borderColor,E["stroke-width"]=d.borderWidth));L.zIndex=n;I+="-"+n;(v=m[I])||(m[I]=v=F.g("plot-"+I).attr(L).add());h&&(a.svgElem=r=F.path().attr(E).add(v));if(q)E=m.getPlotLinePath(c,
r.strokeWidth());else if(C)E=m.getPlotBandPath(u,b,d);else return;if(h&&E&&E.length){if(r.attr({d:E}),y)for(f in d=function(g){r.on(g,function(b){y[g].apply(a,[b])})},y)d(f)}else r&&(E?(r.show(),r.animate({d:E})):(r.hide(),z&&(a.label=z=z.destroy())));l&&G(l.text)&&E&&E.length&&0<m.width&&0<m.height&&!E.flat?(l=t({align:e&&C&&"center",x:e?!C&&4:10,verticalAlign:!e&&C&&"middle",y:e?C?16:10:C?6:-4,rotation:e&&!C&&90},l),this.renderLabel(l,E,C,n)):z&&z.hide();return a},renderLabel:function(a,m,e,d){var l=
this.label,z=this.axis.chart.renderer;l||(l={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||"")},l.zIndex=d,this.label=l=z.text(a.text,0,0,a.useHTML).attr(l).add(),l.css(a.style));d=[m[1],m[4],e?m[6]:m[1]];m=[m[2],m[5],e?m[7]:m[2]];e=A(d);z=A(m);l.align(a,!1,{x:e,y:z,width:D(d)-e,height:D(m)-z});l.show()},destroy:function(){k(this.axis.plotLinesAndBands,this);delete this.axis;H(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,
m){m=this.getPlotLinePath(m,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&m?(a.flat=a.toString()===m.toString(),a.push(m[4],m[5],m[1],m[2],"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(k,m){var e=(new a.PlotLineOrBand(this,k)).render(),d=this.userOptions;e&&(m&&(d[m]=d[m]||[],d[m].push(k)),this.plotLinesAndBands.push(e));return e},removePlotBandOrLine:function(a){for(var m=
this.plotLinesAndBands,e=this.options,d=this.userOptions,l=m.length;l--;)m[l].id===a&&m[l].destroy();w([e.plotLines||[],d.plotLines||[],e.plotBands||[],d.plotBands||[]],function(d){for(l=d.length;l--;)d[l].id===a&&k(d,d[l])})}}})(K);(function(a){var D=a.correctFloat,A=a.defined,G=a.destroyObjectProperties,H=a.isNumber,w=a.merge,k=a.pick,t=a.deg2rad;a.Tick=function(a,k,m,e){this.axis=a;this.pos=k;this.type=m||"";this.isNew=!0;m||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,
p=a.options,m=a.chart,e=a.categories,d=a.names,l=this.pos,z=p.labels,b=a.tickPositions,u=l===b[0],c=l===b[b.length-1],d=e?k(e[l],d[l],l):l,e=this.label,b=b.info,C;a.isDatetimeAxis&&b&&(C=p.dateTimeLabelFormats[b.higherRanks[l]||b.unitName]);this.isFirst=u;this.isLast=c;p=a.labelFormatter.call({axis:a,chart:m,isFirst:u,isLast:c,dateTimeLabelFormat:C,value:a.isLog?D(a.lin2log(d)):d});A(e)?e&&e.attr({text:p}):(this.labelLength=(this.label=e=A(p)&&z.enabled?m.renderer.text(p,0,0,z.useHTML).css(w(z.style)).add(a.labelGroup):
null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var p=this.axis,m=a.x,e=p.chart.chartWidth,d=p.chart.spacing,l=k(p.labelLeft,Math.min(p.pos,d[3])),d=k(p.labelRight,Math.max(p.pos+p.len,e-d[1])),z=this.label,b=this.rotation,u={left:0,center:.5,right:1}[p.labelAlign],c=z.getBBox().width,C=p.getSlotWidth(),q=C,r=1,h,E={};if(b)0>b&&m-u*c<l?h=Math.round(m/Math.cos(b*t)-l):0<b&&m+u*
c>d&&(h=Math.round((e-m)/Math.cos(b*t)));else if(e=m+(1-u)*c,m-u*c<l?q=a.x+q*(1-u)-l:e>d&&(q=d-a.x+q*u,r=-1),q=Math.min(C,q),q<C&&"center"===p.labelAlign&&(a.x+=r*(C-q-u*(C-Math.min(c,q)))),c>q||p.autoRotation&&(z.styles||{}).width)h=q;h&&(E.width=h,(p.options.labels.style||{}).textOverflow||(E.textOverflow="ellipsis"),z.css(E))},getPosition:function(a,k,m,e){var d=this.axis,l=d.chart,z=e&&l.oldChartHeight||l.chartHeight;return{x:a?d.translate(k+m,null,null,e)+d.transB:d.left+d.offset+(d.opposite?
(e&&l.oldChartWidth||l.chartWidth)-d.right-d.left:0),y:a?z-d.bottom+d.offset-(d.opposite?d.height:0):z-d.translate(k+m,null,null,e)-d.transB}},getLabelPosition:function(a,k,m,e,d,l,z,b){var u=this.axis,c=u.transA,C=u.reversed,q=u.staggerLines,r=u.tickRotCorr||{x:0,y:0},h=d.y;A(h)||(h=0===u.side?m.rotation?-8:-m.getBBox().height:2===u.side?r.y+8:Math.cos(m.rotation*t)*(r.y-m.getBBox(!1,0).height/2));a=a+d.x+r.x-(l&&e?l*c*(C?-1:1):0);k=k+h-(l&&!e?l*c*(C?1:-1):0);q&&(m=z/(b||1)%q,u.opposite&&(m=q-m-
1),k+=u.labelOffset/q*m);return{x:a,y:Math.round(k)}},getMarkPath:function(a,k,m,e,d,l){return l.crispLine(["M",a,k,"L",a+(d?0:-m),k+(d?m:0)],e)},renderGridLine:function(a,k,m){var e=this.axis,d=e.options,l=this.gridLine,z={},b=this.pos,u=this.type,c=e.tickmarkOffset,C=e.chart.renderer,q=u?u+"Grid":"grid",r=d[q+"LineWidth"],h=d[q+"LineColor"],d=d[q+"LineDashStyle"];l||(z.stroke=h,z["stroke-width"]=r,d&&(z.dashstyle=d),u||(z.zIndex=1),a&&(z.opacity=0),this.gridLine=l=C.path().attr(z).addClass("highcharts-"+
(u?u+"-":"")+"grid-line").add(e.gridGroup));if(!a&&l&&(a=e.getPlotLinePath(b+c,l.strokeWidth()*m,a,!0)))l[this.isNew?"attr":"animate"]({d:a,opacity:k})},renderMark:function(a,p,m){var e=this.axis,d=e.options,l=e.chart.renderer,z=this.type,b=z?z+"Tick":"tick",u=e.tickSize(b),c=this.mark,C=!c,q=a.x;a=a.y;var r=k(d[b+"Width"],!z&&e.isXAxis?1:0),d=d[b+"Color"];u&&(e.opposite&&(u[0]=-u[0]),C&&(this.mark=c=l.path().addClass("highcharts-"+(z?z+"-":"")+"tick").add(e.axisGroup),c.attr({stroke:d,"stroke-width":r})),
c[C?"attr":"animate"]({d:this.getMarkPath(q,a,u[0],c.strokeWidth()*m,e.horiz,l),opacity:p}))},renderLabel:function(a,p,m,e){var d=this.axis,l=d.horiz,z=d.options,b=this.label,u=z.labels,c=u.step,C=d.tickmarkOffset,q=!0,r=a.x;a=a.y;b&&H(r)&&(b.xy=a=this.getLabelPosition(r,a,b,l,u,C,e,c),this.isFirst&&!this.isLast&&!k(z.showFirstLabel,1)||this.isLast&&!this.isFirst&&!k(z.showLastLabel,1)?q=!1:!l||d.isRadial||u.step||u.rotation||p||0===m||this.handleOverflow(a),c&&e%c&&(q=!1),q&&H(a.y)?(a.opacity=m,
b[this.isNew?"attr":"animate"](a)):b.attr("y",-9999),this.isNew=!1)},render:function(a,p,m){var e=this.axis,d=e.horiz,l=this.getPosition(d,this.pos,e.tickmarkOffset,p),z=l.x,b=l.y,e=d&&z===e.pos+e.len||!d&&b===e.pos?-1:1;m=k(m,1);this.isActive=!0;this.renderGridLine(p,m,e);this.renderMark(l,m,e);this.renderLabel(l,p,m,a)},destroy:function(){G(this,this.axis)}}})(K);(function(a){var D=a.addEvent,A=a.animObject,G=a.arrayMax,H=a.arrayMin,w=a.AxisPlotLineOrBandExtension,k=a.color,t=a.correctFloat,x=a.defaultOptions,
p=a.defined,m=a.deg2rad,e=a.destroyObjectProperties,d=a.each,l=a.extend,z=a.fireEvent,b=a.format,u=a.getMagnitude,c=a.grep,C=a.inArray,q=a.isArray,r=a.isNumber,h=a.isString,E=a.merge,f=a.normalizeTickInterval,v=a.pick,n=a.PlotLineOrBand,y=a.removeEvent,L=a.splat,F=a.syncTimeout,I=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",
year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},
defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var g=b.isX;this.chart=a;this.horiz=a.inverted?!g:g;this.isXAxis=g;this.coll=this.coll||(g?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var c=this.options,f=c.type;this.labelFormatter=c.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=c.reversed;this.visible=
!1!==c.visible;this.zoomEnabled=!1!==c.zoomEnabled;this.hasNames="category"===f||!0===c.categories;this.categories=c.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===f;this.isDatetimeAxis="datetime"===f;this.positiveValuesOnly=this.isLog&&!this.allowNegativeLog;this.isLinked=p(c.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=c.minRange||c.maxZoom;this.range=c.range;
this.offset=c.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=v(c.crosshair,L(a.options.tooltip.crosshairs)[g?0:1],!1);var n;b=this.options.events;-1===C(this,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&g&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(n in b)D(this,n,b[n]);this.lin2log=c.linearToLogConverter||
this.lin2log;this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=E(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],E(x[this.coll],a))},defaultLabelFormatter:function(){var g=this.axis,c=this.value,f=g.categories,n=this.dateTimeLabelFormat,h=x.lang,d=h.numericSymbols,h=h.numericSymbolMagnitude||1E3,y=d&&d.length,
r,q=g.options.labels.format,g=g.isLog?Math.abs(c):g.tickInterval;if(q)r=b(q,this);else if(f)r=c;else if(n)r=a.dateFormat(n,c);else if(y&&1E3<=g)for(;y--&&void 0===r;)f=Math.pow(h,y+1),g>=f&&0===10*c%f&&null!==d[y]&&0!==c&&(r=a.numberFormat(c/f,-1)+d[y]);void 0===r&&(r=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,-1,void 0,""));return r},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();
d(a.series,function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var f=g.options,n=f.threshold,h;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=n&&(n=null);if(a.isXAxis)f=g.xData,f.length&&(g=H(f),r(g)||g instanceof Date||(f=c(f,function(a){return r(a)}),g=H(f)),a.dataMin=Math.min(v(a.dataMin,f[0]),g),a.dataMax=Math.max(v(a.dataMax,f[0]),G(f)));else if(g.getExtremes(),h=g.dataMax,g=g.dataMin,p(g)&&p(h)&&(a.dataMin=Math.min(v(a.dataMin,g),g),a.dataMax=Math.max(v(a.dataMax,h),h)),p(n)&&(a.threshold=
n),!f.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,f,n,h){var g=this.linkedParent||this,d=1,y=0,J=f?g.oldTransA:g.transA;f=f?g.oldMin:g.min;var q=g.minPixelPadding;n=(g.isOrdinal||g.isBroken||g.isLog&&n)&&g.lin2val;J||(J=g.transA);c&&(d*=-1,y=g.len);g.reversed&&(d*=-1,y-=d*(g.sector||g.len));b?(a=(a*d+y-q)/J+f,n&&(a=g.lin2val(a))):(n&&(a=g.val2lin(a)),a=d*(a-f)*J+y+d*q+(r(h)?J*h:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,
!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,f,n){var g=this.chart,h=this.left,d=this.top,y,J,q=c&&g.oldChartHeight||g.chartHeight,F=c&&g.oldChartWidth||g.chartWidth,u;y=this.transB;var l=function(a,b,g){if(a<b||a>g)f?a=Math.min(Math.max(b,a),g):u=!0;return a};n=v(n,this.translate(a,null,null,c));a=c=Math.round(n+y);y=J=Math.round(q-n-y);r(n)?this.horiz?(y=d,J=q-this.bottom,a=c=l(a,h,h+this.width)):(a=h,c=
F-this.right,y=J=l(y,d,d+this.height)):u=!0;return u&&!f?null:g.renderer.crispLine(["M",a,y,"L",c,J],b||1)},getLinearTickPositions:function(a,b,c){var g,f=t(Math.floor(b/a)*a);c=t(Math.ceil(c/a)*a);var n=[];if(this.single)return[b];for(b=f;b<=c;){n.push(b);b=t(b+a);if(b===g)break;g=b}return n},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,f=a.minorTickInterval,n=[],h=a.pointRangePadding||0,y=a.min-h,h=a.max+h,r=h-y;if(r&&r/f<a.len/3)if(a.isLog)d(this.paddedTicks,function(b,
g,c){g&&n.push.apply(n,a.getLogTickPositions(f,c[g-1],c[g],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)n=n.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),y,h,b.startOfWeek));else for(b=y+(c[0]-y)%f;b<=h&&b!==n[0];b+=f)n.push(b);0!==n.length&&a.trimTicks(n);return n},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,f,n=this.dataMax-this.dataMin>=this.minRange,h,y,r,q,F,u;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(p(a.min)||p(a.max)?this.minRange=
null:(d(this.series,function(a){q=a.xData;for(y=F=a.xIncrement?1:q.length-1;0<y;y--)if(r=q[y]-q[y-1],void 0===h||r<h)h=r}),this.minRange=Math.min(5*h,this.dataMax-this.dataMin)));c-b<this.minRange&&(u=this.minRange,f=(u-c+b)/2,f=[b-f,v(a.min,b-f)],n&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(f),c=[b+u,v(a.max,b+u)],n&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=H(c),c-b<u&&(f[0]=c-u,f[1]=v(a.min,c-u),b=G(f)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?
a=1:d(this.series,function(b){var g=b.closestPointRange,c=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&p(g)&&c&&(a=p(a)?Math.min(a,g):g)});return a},nameToX:function(a){var b=q(this.categories),g=b?this.categories:this.names,c=a.options.x,f;a.series.requireSorting=!1;p(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():C(a.name,g));-1===c?b||(f=g.length):f=c;this.names[f]=a.name;return f},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=
0,this.minRange=void 0,d(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();d(b.points,function(g,c){var f;g.options&&(f=a.nameToX(g),f!==g.x&&(g.x=f,b.xData[c]=f))})}))},setAxisTranslation:function(a){var b=this,g=b.max-b.min,c=b.axisPointRange||0,f,n=0,y=0,r=b.linkedParent,q=!!b.categories,F=b.transA,u=b.isXAxis;if(u||q||c)f=b.getClosest(),r?(n=r.minPointOffset,y=r.pointRangePadding):d(b.series,function(a){var g=q?1:u?v(a.options.pointRange,
f,0):b.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,g);b.single||(n=Math.max(n,h(a)?0:g/2),y=Math.max(y,"on"===a?0:g))}),r=b.ordinalSlope&&f?b.ordinalSlope/f:1,b.minPointOffset=n*=r,b.pointRangePadding=y*=r,b.pointRange=Math.min(c,g),u&&(b.closestPointRange=f);a&&(b.oldTransA=F);b.translationSlope=b.transA=F=b.options.staticScale||b.len/(g+y||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=F*n},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var g=
this,c=g.chart,n=g.options,h=g.isLog,y=g.log2lin,q=g.isDatetimeAxis,F=g.isXAxis,l=g.isLinked,e=n.maxPadding,I=n.minPadding,C=n.tickInterval,E=n.tickPixelInterval,L=g.categories,m=g.threshold,k=g.softThreshold,x,w,A,D;q||L||l||this.getTickAmount();A=v(g.userMin,n.min);D=v(g.userMax,n.max);l?(g.linkedParent=c[g.coll][n.linkedTo],c=g.linkedParent.getExtremes(),g.min=v(c.min,c.dataMin),g.max=v(c.max,c.dataMax),n.type!==g.linkedParent.options.type&&a.error(11,1)):(!k&&p(m)&&(g.dataMin>=m?(x=m,I=0):g.dataMax<=
m&&(w=m,e=0)),g.min=v(A,x,g.dataMin),g.max=v(D,w,g.dataMax));h&&(g.positiveValuesOnly&&!b&&0>=Math.min(g.min,v(g.dataMin,g.min))&&a.error(10,1),g.min=t(y(g.min),15),g.max=t(y(g.max),15));g.range&&p(g.max)&&(g.userMin=g.min=A=Math.max(g.min,g.minFromRange()),g.userMax=D=g.max,g.range=null);z(g,"foundExtremes");g.beforePadding&&g.beforePadding();g.adjustForMinRange();!(L||g.axisPointRange||g.usePercentage||l)&&p(g.min)&&p(g.max)&&(y=g.max-g.min)&&(!p(A)&&I&&(g.min-=y*I),!p(D)&&e&&(g.max+=y*e));r(n.floor)?
g.min=Math.max(g.min,n.floor):r(n.softMin)&&(g.min=Math.min(g.min,n.softMin));r(n.ceiling)?g.max=Math.min(g.max,n.ceiling):r(n.softMax)&&(g.max=Math.max(g.max,n.softMax));k&&p(g.dataMin)&&(m=m||0,!p(A)&&g.min<m&&g.dataMin>=m?g.min=m:!p(D)&&g.max>m&&g.dataMax<=m&&(g.max=m));g.tickInterval=g.min===g.max||void 0===g.min||void 0===g.max?1:l&&!C&&E===g.linkedParent.options.tickPixelInterval?C=g.linkedParent.tickInterval:v(C,this.tickAmount?(g.max-g.min)/Math.max(this.tickAmount-1,1):void 0,L?1:(g.max-
g.min)*E/Math.max(g.len,E));F&&!b&&d(g.series,function(a){a.processData(g.min!==g.oldMin||g.max!==g.oldMax)});g.setAxisTranslation(!0);g.beforeSetTickPositions&&g.beforeSetTickPositions();g.postProcessTickInterval&&(g.tickInterval=g.postProcessTickInterval(g.tickInterval));g.pointRange&&!C&&(g.tickInterval=Math.max(g.pointRange,g.tickInterval));b=v(n.minTickInterval,g.isDatetimeAxis&&g.closestPointRange);!C&&g.tickInterval<b&&(g.tickInterval=b);q||h||C||(g.tickInterval=f(g.tickInterval,null,u(g.tickInterval),
v(n.allowDecimals,!(.5<g.tickInterval&&5>g.tickInterval&&1E3<g.max&&9999>g.max)),!!this.tickAmount));this.tickAmount||(g.tickInterval=g.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,f=a.tickPositioner,n=a.startOnTick,h=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=
this.min===this.max&&p(this.min)&&!this.tickAmount&&!1!==a.allowDecimals;this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,f&&(f=f.apply(this,
[this.min,this.max])))&&(this.tickPositions=b=f);this.paddedTicks=b.slice(0);this.trimTicks(b,n,h);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),c||f||this.adjustTickAmount())},trimTicks:function(a,b,c){var g=a[0],f=a[a.length-1],n=this.minPointOffset||0;if(!this.isLinked){if(b)this.min=g;else for(;this.min-n>a[0];)a.shift();if(c)this.max=f;else for(;this.max+n<a[a.length-1];)a.pop();0===a.length&&p(g)&&a.push((f+g)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||
!1===c.alignTicks||this.isLog||d(this.chart[this.coll],function(g){var c=g.options,c=[g.horiz?c.left:c.top,c.width,c.height,c.pane].join();g.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!p(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=
this.tickInterval,b=this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,n=b&&b.length;if(n<c){for(;b.length<c;)b.push(t(b[b.length-1]+a));this.transA*=(n-1)/(c-1);this.max=b[b.length-1]}else n>c&&(this.tickInterval*=2,this.setTickPositions());if(p(f)){for(a=c=b.length;a--;)(3===f&&1===a%2||2>=f&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;
d(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,
b,c,f,n){var g=this,h=g.chart;c=v(c,!0);d(g.series,function(a){delete a.kdTree});n=l(n,{min:a,max:b});z(g,"setExtremes",n,function(){g.userMin=a;g.userMax=b;g.eventArgs=n;c&&h.redraw(f)})},zoom:function(a,b){var g=this.dataMin,c=this.dataMax,f=this.options,n=Math.min(g,v(f.min,g)),f=Math.max(c,v(f.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(p(g)&&(a<n&&(a=n),a>f&&(a=f)),p(c)&&(b<n&&(b=n),b>f&&(b=f))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});
return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],f=this.horiz,n=v(b.width,a.plotWidth-c[3]+c[1]),h=v(b.height,a.plotHeight-c[0]+c[2]),d=v(b.top,a.plotTop+c[0]),b=v(b.left,a.plotLeft+c[3]),c=/%$/;c.test(h)&&(h=Math.round(parseFloat(h)/100*a.plotHeight));c.test(d)&&(d=Math.round(parseFloat(d)/100*a.plotHeight+a.plotTop));this.left=b;this.top=d;this.width=n;this.height=h;this.bottom=a.chartHeight-h-d;this.right=a.chartWidth-n-b;this.len=Math.max(f?n:h,0);this.pos=
f?b:d},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?t(b(this.min)):this.min,max:a?t(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=this.lin2log,c=b?g(this.min):this.min,b=b?g(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(v(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},
tickSize:function(a){var b=this.options,g=b[a+"Length"],c=v(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,c]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,f=c,n=this.len/(((this.categories?1:0)+this.max-this.min)/c),h,y=a.rotation,r=this.labelMetrics(),q,F=
Number.MAX_VALUE,u,l=function(a){a/=n||1;a=1<a?Math.ceil(a):1;return a*c};b?(u=!a.staggerLines&&!a.step&&(p(y)?[y]:n<v(a.autoRotationLimit,80)&&a.autoRotation))&&d(u,function(a){var b;if(a===y||a&&-90<=a&&90>=a)q=l(Math.abs(r.h/Math.sin(m*a))),b=q+Math.abs(a/360),b<F&&(F=b,h=a,f=q)}):a.step||(f=l(r.h));this.autoRotation=u;this.labelRotation=v(h,y);return f},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,f=Math.max(this.tickPositions.length-(this.categories?0:1),1),n=a.margin[3];
return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/f||!b&&(n&&n-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,f=this.ticks,n=this.options.labels,y=this.horiz,r=this.getSlotWidth(),q=Math.max(1,Math.round(r-2*(n.padding||5))),F={},u=this.labelMetrics(),l=n.style&&n.style.textOverflow,v,e=0,I,C;h(n.rotation)||(F.rotation=n.rotation||0);d(c,function(a){(a=f[a])&&a.labelLength>e&&(e=a.labelLength)});this.maxLabelLength=
e;if(this.autoRotation)e>q&&e>u.h?F.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(v={width:q+"px"},!l))for(v.textOverflow="clip",I=c.length;!y&&I--;)if(C=c[I],q=f[C].label)q.styles&&"ellipsis"===q.styles.textOverflow?q.css({textOverflow:"clip"}):f[C].labelLength>r&&q.css({width:r+"px"}),q.getBBox().height>this.len/c.length-(u.h-u.f)&&(q.specCss={textOverflow:"ellipsis"});F.rotation&&(v={width:(e>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},l||(v.textOverflow="ellipsis"));
if(this.labelAlign=n.align||this.autoLabelAlign(this.labelRotation))F.align=this.labelAlign;d(c,function(a){var b=(a=f[a])&&a.label;b&&(b.attr(F),v&&b.css(E(v,b.specCss)),delete b.specCss,a.rotation=F.rotation)});this.tickRotCorr=b.rotCorr(u.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||p(this.min)&&p(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,c=this.opposite,f=this.options.title,n;this.axisTitle||((n=f.textAlign)||
(n=(g?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[f.align]),this.axisTitle=b.text(f.text,0,0,f.useHTML).attr({zIndex:7,rotation:f.rotation||0,align:n}).addClass("highcharts-axis-title").css(f.style).add(this.axisGroup),this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,n=a.tickPositions,
h=a.ticks,y=a.horiz,r=a.side,q=b.inverted?[1,0,3,2][r]:r,F,u,l=0,e,I=0,C=f.title,z=f.labels,E=0,L=b.axisOffset,b=b.clipOffset,m=[-1,1,1,-1][r],k,t=f.className,x=a.axisParent,w=this.tickSize("tick");F=a.hasData();a.showAxis=u=F||v(f.showEmpty,!0);a.staggerLines=a.horiz&&z.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(x),a.axisGroup=c.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+
" "+(t||"")).add(x),a.labelGroup=c.g("axis-labels").attr({zIndex:z.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(x));if(F||a.isLinked)d(n,function(b,g){a.generateTick(b,g)}),a.renderUnsquish(),!1===z.reserveSpace||0!==r&&2!==r&&{1:"left",3:"right"}[r]!==a.labelAlign&&"center"!==a.labelAlign||d(n,function(a){E=Math.max(h[a].getLabelSize(),E)}),a.staggerLines&&(E*=a.staggerLines,a.labelOffset=E*(a.opposite?-1:1));else for(k in h)h[k].destroy(),delete h[k];C&&C.text&&
!1!==C.enabled&&(a.addTitle(u),u&&(l=a.axisTitle.getBBox()[y?"height":"width"],e=C.offset,I=p(e)?0:v(C.margin,y?5:10)));a.renderLine();a.offset=m*v(f.offset,L[r]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===r?-a.labelMetrics().h:2===r?a.tickRotCorr.y:0;I=Math.abs(E)+I;E&&(I=I-c+m*(y?v(z.y,a.tickRotCorr.y+8*m):z.x));a.axisTitleMargin=v(e,I);L[r]=Math.max(L[r],a.axisTitleMargin+l+m*a.offset,I,F&&n.length&&w?w[0]+m*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[q]=Math.max(b[q],
f)},getLinePath:function(a){var b=this.chart,g=this.opposite,c=this.offset,f=this.horiz,n=this.left+(g?this.width:0)+c,c=b.chartHeight-this.bottom-(g?this.height:0)+c;g&&(a*=-1);return b.renderer.crispLine(["M",f?this.left:n,f?c:this.top,"L",f?b.chartWidth-this.right:n,f?c:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,
zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,n=this.options.title,h=a?b:c,d=this.opposite,y=this.offset,r=n.x||0,q=n.y||0,F=this.chart.renderer.fontMetrics(n.style&&n.style.fontSize,this.axisTitle).f,f={low:h+(a?0:f),middle:h+f/2,high:h+(a?f:0)}[n.align],b=(a?c+this.height:b)+(a?1:-1)*(d?-1:1)*this.axisTitleMargin+(2===this.side?F:0);return{x:a?f+r:b+(d?this.width:0)+y+r,y:a?b+q-(d?this.height:0)+y:f+q}},renderMinorTick:function(a){var b=this.chart.hasRendered&&
r(this.oldMin),g=this.minorTicks;g[a]||(g[a]=new I(this,a,"minor"));b&&g[a].isNew&&g[a].render(null,!0);g[a].render(null,!1,1)},renderTick:function(a,b){var g=this.isLinked,c=this.ticks,f=this.chart.hasRendered&&r(this.oldMin);if(!g||a>=this.min&&a<=this.max)c[a]||(c[a]=new I(this,a)),f&&c[a].isNew&&c[a].render(b,!0,.1),c[a].render(b)},render:function(){var a=this,b=a.chart,c=a.options,f=a.isLog,h=a.lin2log,y=a.isLinked,r=a.tickPositions,q=a.axisTitle,u=a.ticks,l=a.minorTicks,v=a.alternateBands,e=
c.stackLabels,C=c.alternateGridColor,z=a.tickmarkOffset,E=a.axisLine,L=a.showAxis,m=A(b.renderer.globalAnimation),k,p;a.labelEdge.length=0;a.overlap=!1;d([u,l,v],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||y)a.minorTickInterval&&!a.categories&&d(a.getMinorTickPositions(),function(b){a.renderMinorTick(b)}),r.length&&(d(r,function(b,g){a.renderTick(b,g)}),z&&(0===a.min||a.single)&&(u[-1]||(u[-1]=new I(a,-1,null,!0)),u[-1].render(-1))),C&&d(r,function(g,c){p=void 0!==r[c+1]?r[c+1]+
z:a.max-z;0===c%2&&g<a.max&&p<=a.max+(b.polar?-z:z)&&(v[g]||(v[g]=new n(a)),k=g+z,v[g].options={from:f?h(k):k,to:f?h(p):p,color:C},v[g].render(),v[g].isActive=!0)}),a._addedPlotLB||(d((c.plotLines||[]).concat(c.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);d([u,l,v],function(a){var g,c,f=[],n=m.duration;for(g in a)a[g].isActive||(a[g].render(g,!1,0),a[g].isActive=!1,f.push(g));F(function(){for(c=f.length;c--;)a[f[c]]&&!a[f[c]].isActive&&(a[f[c]].destroy(),delete a[f[c]])},
a!==v&&b.hasRendered&&n?n:0)});E&&(E[E.isPlaced?"animate":"attr"]({d:this.getLinePath(E.strokeWidth())}),E.isPlaced=!0,E[L?"show":"hide"](!0));q&&L&&(q[q.isNew?"attr":"animate"](a.getTitlePosition()),q.isNew=!1);e&&e.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),d(this.plotLinesAndBands,function(a){a.render()}));d(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,
g=b.stacks,c,f=b.plotLinesAndBands,n;a||y(b);for(c in g)e(g[c]),g[c]=null;d([b.ticks,b.minorTicks,b.alternateBands],function(a){e(a)});if(f)for(a=f.length;a--;)f[a].destroy();d("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(n in b)b.hasOwnProperty(n)&&-1===C(n,b.keepProps)&&delete b[n]},drawCrosshair:function(a,b){var g,c=this.crosshair,f=v(c.snap,!0),n,h=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&
!1!==(p(b)||!f)?(f?p(b)&&(n=this.isXAxis?b.plotX:this.len-b.plotY):n=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),p(n)&&(g=this.getPlotLinePath(b&&(this.isXAxis?b.x:v(b.stackY,b.y)),null,null,null,n)||null),p(g)?(b=this.categories&&!this.isRadial,h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+c.className).attr({zIndex:v(c.zIndex,2)}).add(),h.attr({stroke:c.color||(b?k("#ccd6eb").setOpacity(.25).get():"#cccccc"),
"stroke-width":v(c.width,1)}),c.dashStyle&&h.attr({dashstyle:c.dashStyle})),h.show().attr({d:g}),b&&!c.width&&h.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};l(a.Axis.prototype,w)})(K);(function(a){var D=a.Axis,A=a.Date,G=a.dateFormat,H=a.defaultOptions,w=a.defined,k=a.each,t=a.extend,x=a.getMagnitude,p=a.getTZOffset,m=a.normalizeTickInterval,e=a.pick,d=a.timeUnits;D.prototype.getTimeTicks=function(a,
z,b,u){var c=[],l={},q=H.global.useUTC,r,h=new A(z-Math.abs(p(z))),E=A.hcMakeTime,f=a.unitRange,v=a.count,n;if(w(z)){h[A.hcSetMilliseconds](f>=d.second?0:v*Math.floor(h.getMilliseconds()/v));if(f>=d.second)h[A.hcSetSeconds](f>=d.minute?0:v*Math.floor(h.getSeconds()/v));if(f>=d.minute)h[A.hcSetMinutes](f>=d.hour?0:v*Math.floor(h[A.hcGetMinutes]()/v));if(f>=d.hour)h[A.hcSetHours](f>=d.day?0:v*Math.floor(h[A.hcGetHours]()/v));if(f>=d.day)h[A.hcSetDate](f>=d.month?1:v*Math.floor(h[A.hcGetDate]()/v));
f>=d.month&&(h[A.hcSetMonth](f>=d.year?0:v*Math.floor(h[A.hcGetMonth]()/v)),r=h[A.hcGetFullYear]());if(f>=d.year)h[A.hcSetFullYear](r-r%v);if(f===d.week)h[A.hcSetDate](h[A.hcGetDate]()-h[A.hcGetDay]()+e(u,1));r=h[A.hcGetFullYear]();u=h[A.hcGetMonth]();var y=h[A.hcGetDate](),L=h[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)n=(!q||!!A.hcGetTimezoneOffset)&&(b-z>4*d.month||p(z)!==p(b)),h=h.getTime(),h=new A(h+p(h));q=h.getTime();for(z=1;q<b;)c.push(q),q=f===d.year?E(r+z*v,0):f===d.month?
E(r,u+z*v):!n||f!==d.day&&f!==d.week?n&&f===d.hour?E(r,u,y,L+z*v):q+f*v:E(r,u,y+z*v*(f===d.day?1:7)),z++;c.push(q);f<=d.hour&&1E4>c.length&&k(c,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&(l[a]="day")})}c.info=t(a,{higherRanks:l,totalRange:f*v});return c};D.prototype.normalizeTimeTickInterval=function(a,e){var b=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,
3,4,6]],["year",null]];e=b[b.length-1];var u=d[e[0]],c=e[1],l;for(l=0;l<b.length&&!(e=b[l],u=d[e[0]],c=e[1],b[l+1]&&a<=(u*c[c.length-1]+d[b[l+1][0]])/2);l++);u===d.year&&a<5*u&&(c=[1,2,5]);a=m(a/u,c,"year"===e[0]?Math.max(x(a/u),1):1);return{unitRange:u,count:a,unitName:e[0]}}})(K);(function(a){var D=a.Axis,A=a.getMagnitude,G=a.map,H=a.normalizeTickInterval,w=a.pick;D.prototype.getLogTickPositions=function(a,t,x,p){var m=this.options,e=this.len,d=this.lin2log,l=this.log2lin,z=[];p||(this._minorAutoInterval=
null);if(.5<=a)a=Math.round(a),z=this.getLinearTickPositions(a,t,x);else if(.08<=a)for(var e=Math.floor(t),b,u,c,C,q,m=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<x+1&&!q;e++)for(u=m.length,b=0;b<u&&!q;b++)c=l(d(e)*m[b]),c>t&&(!p||C<=x)&&void 0!==C&&z.push(C),C>x&&(q=!0),C=c;else t=d(t),x=d(x),a=m[p?"minorTickInterval":"tickInterval"],a=w("auto"===a?null:a,this._minorAutoInterval,m.tickPixelInterval/(p?5:1)*(x-t)/((p?e/this.tickPositions.length:e)||1)),a=H(a,null,A(a)),z=G(this.getLinearTickPositions(a,
t,x),l),p||(this._minorAutoInterval=a/5);p||(this.tickInterval=a);return z};D.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};D.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a){var D=a.dateFormat,A=a.each,G=a.extend,H=a.format,w=a.isNumber,k=a.map,t=a.merge,x=a.pick,p=a.splat,m=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,l){this.chart=a;this.options=l;this.crosshairs=[];this.now={x:0,y:0};
this.isHidden=!0;this.split=l.split&&!a.inverted;this.shared=l.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(d){var l=d&&d.tt;l&&(!l.isActive||a?d.tt=l.destroy():l.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,l=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,l.shape||"callout",null,null,l.useHTML,null,"tooltip").attr({padding:l.padding,r:l.borderRadius}),this.label.attr({fill:l.backgroundColor,"stroke-width":l.borderWidth}).css(l.style).shadow(l.shadow)),
this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,t(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,l,e,b){var d=this,c=d.now,C=!1!==d.options.animation&&!d.isHidden&&(1<Math.abs(a-c.x)||1<Math.abs(l-c.y)),q=d.followPointer||1<d.len;G(c,{x:C?(2*
c.x+a)/3:a,y:C?(c.y+l)/2:l,anchorX:q?void 0:C?(2*c.anchorX+e)/3:e,anchorY:q?void 0:C?(c.anchorY+b)/2:b});d.getLabel().attr(c);C&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){d&&d.move(a,l,e,b)},32))},hide:function(a){var d=this;clearTimeout(this.hideTimer);a=x(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=m(function(){d.getLabel()[a?"fadeOut":"hide"]();d.isHidden=!0},a))},getAnchor:function(a,l){var d,b=this.chart,u=b.inverted,c=b.plotTop,e=b.plotLeft,
q=0,r=0,h,E;a=p(a);d=a[0].tooltipPos;this.followPointer&&l&&(void 0===l.chartX&&(l=b.pointer.normalize(l)),d=[l.chartX-b.plotLeft,l.chartY-c]);d||(A(a,function(a){h=a.series.yAxis;E=a.series.xAxis;q+=a.plotX+(!u&&E?E.left-e:0);r+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!u&&h?h.top-c:0)}),q/=a.length,r/=a.length,d=[u?b.plotWidth-r:q,this.shared&&!u&&1<a.length&&l?l.chartY-c:u?b.plotHeight-q:r]);return k(d,Math.round)},getPosition:function(a,l,e){var b=this.chart,d=this.distance,c={},C=e.h||0,
q,r=["y",b.chartHeight,l,e.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],h=["x",b.chartWidth,a,e.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],E=!this.followPointer&&x(e.ttBelow,!b.inverted===!!e.negative),f=function(a,b,f,g,n,h){var y=f<g-d,r=g+d+f<b,q=g-d-f;g+=d;if(E&&r)c[a]=g;else if(!E&&y)c[a]=q;else if(y)c[a]=Math.min(h-f,0>q-C?q:q-C);else if(r)c[a]=Math.max(n,g+C+f>b?g:g+C);else return!1},v=function(a,b,f,g){var n;g<d||g>b-d?n=!1:c[a]=g<f/2?1:g>b-f/2?b-f-2:g-f/2;return n},n=function(a){var b=
r;r=h;h=b;q=a},y=function(){!1!==f.apply(0,r)?!1!==v.apply(0,h)||q||(n(!0),y()):q?c.x=c.y=0:(n(!0),y())};(b.inverted||1<this.len)&&n();y();return c},defaultFormatter:function(a){var d=this.points||p(this),e;e=[a.tooltipFooterHeaderFormatter(d[0])];e=e.concat(a.bodyFormatter(d));e.push(a.tooltipFooterHeaderFormatter(d[0],!0));return e},refresh:function(a,e){var d,b=this.options,u,c=a,l,q={},r=[];d=b.formatter||this.defaultFormatter;var q=this.shared,h;clearTimeout(this.hideTimer);this.followPointer=
p(c)[0].series.tooltipOptions.followPointer;l=this.getAnchor(c,e);e=l[0];u=l[1];!q||c.series&&c.series.noSharedTooltip?q=c.getLabelConfig():(A(c,function(a){a.setState("hover");r.push(a.getLabelConfig())}),q={x:c[0].category,y:c[0].y},q.points=r,c=c[0]);this.len=r.length;q=d.call(q,this);h=c.series;this.distance=x(h.tooltipOptions.distance,16);!1===q?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(q,a):(d.attr({text:q&&q.join?q.join(""):q}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
x(c.colorIndex,h.colorIndex)),d.attr({stroke:b.borderColor||c.color||h.color||"#666666"}),this.updatePosition({plotX:e,plotY:u,negative:c.negative,ttBelow:c.ttBelow,h:l[2]||0})),this.isHidden=!1)},renderSplit:function(d,e){var l=this,b=[],u=this.chart,c=u.renderer,C=!0,q=this.options,r,h=this.getLabel();A(d.slice(0,e.length+1),function(a,f){f=e[f-1]||{isHeader:!0,plotX:e[0].plotX};var d=f.series||l,n=d.tt,y=f.series||{},E="highcharts-color-"+x(f.colorIndex,y.colorIndex,"none");n||(d.tt=n=c.label(null,
null,null,"callout").addClass("highcharts-tooltip-box "+E).attr({padding:q.padding,r:q.borderRadius,fill:q.backgroundColor,stroke:f.color||y.color||"#333333","stroke-width":q.borderWidth}).add(h));n.isActive=!0;n.attr({text:a});n.css(q.style);a=n.getBBox();y=a.width+n.strokeWidth();f.isHeader?(r=a.height,y=Math.max(0,Math.min(f.plotX+u.plotLeft-y/2,u.chartWidth-y))):y=f.plotX+u.plotLeft-x(q.distance,16)-y;0>y&&(C=!1);a=(f.series&&f.series.yAxis&&f.series.yAxis.pos)+(f.plotY||0);a-=u.plotTop;b.push({target:f.isHeader?
u.plotHeight+r:a,rank:f.isHeader?1:0,size:d.tt.getBBox().height+1,point:f,x:y,tt:n})});this.cleanSplit();a.distribute(b,u.plotHeight+r);A(b,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:C||b.isHeader?a.x:b.plotX+u.plotLeft+x(q.distance,16),y:a.pos+u.plotTop,anchorX:b.isHeader?b.plotX+u.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+u.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var d=this.chart,e=this.getLabel(),e=(this.options.positioner||
this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+d.plotLeft,a.plotY+d.plotTop)},getDateFormat:function(a,l,m,b){var d=D("%m-%d %H:%M:%S.%L",l),c,C,q={millisecond:15,second:12,minute:9,hour:6,day:3},r="millisecond";for(C in e){if(a===e.week&&+D("%w",l)===m&&"00:00:00.000"===d.substr(6)){C="week";break}if(e[C]>a){C=r;break}if(q[C]&&d.substr(q[C])!=="01-01 00:00:00.000".substr(q[C]))break;"week"!==C&&(r=C)}C&&(c=b[C]);return c},getXDateFormat:function(a,
e,m){e=e.dateTimeLabelFormats;var b=m&&m.closestPointRange;return(b?this.getDateFormat(b,a.x,m.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){var d=e?"footer":"header";e=a.series;var b=e.tooltipOptions,u=b.xDateFormat,c=e.xAxis,l=c&&"datetime"===c.options.type&&w(a.key),d=b[d+"Format"];l&&!u&&(u=this.getXDateFormat(a,b,c));l&&u&&(d=d.replace("{point.key}","{point.key:"+u+"}"));return H(d,{point:a,series:e})},bodyFormatter:function(a){return k(a,function(a){var d=
a.series.tooltipOptions;return(d.pointFormatter||a.point.tooltipFormatter).call(a.point,d.pointFormat)})}}})(K);(function(a){var D=a.addEvent,A=a.attr,G=a.charts,H=a.color,w=a.css,k=a.defined,t=a.doc,x=a.each,p=a.extend,m=a.fireEvent,e=a.offset,d=a.pick,l=a.removeEvent,z=a.splat,b=a.Tooltip,u=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,e){this.options=e;this.chart=a;this.runChartClick=e.chart.events&&!!e.chart.events.click;this.pinchDown=[];this.lastValidTouch=
{};b&&e.tooltip.enabled&&(a.tooltip=new b(a,e.tooltip),this.followTouchMove=d(e.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,r=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(r=d(c.pinchType,r));this.zoomX=a=/x/.test(r);this.zoomY=r=/y/.test(r);this.zoomHor=a&&!b||r&&b;this.zoomVert=r&&!b||a&&b;this.hasZoom=a||r},normalize:function(a,b){var c,d;a=a||u.event;a.target||(a.target=a.srcElement);d=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));void 0===d.pageX?(c=Math.max(a.x,a.clientX-b.left),b=a.y):(c=d.pageX-b.left,b=d.pageY-b.top);return p(a,{chartX:Math.round(c),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};x(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,b,q){var c=[],h,e,f;x(a,function(a){h=a.noSharedTooltip&&b;e=!b&&a.directTouch;
a.visible&&!h&&!e&&d(a.options.enableMouseTracking,!0)&&(f=a.searchPoint(q,!h&&1===a.kdDimensions))&&f.series&&c.push(f)});c.sort(function(a,c){var f=a.distX-c.distX,n=a.dist-c.dist,h=(c.series.group&&c.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==f&&b?f:0!==n?n:0!==h?h:a.series.index>c.series.index?-1:1});if(b)for(a=c.length;a--;)(c[a].x!==c[0].x||c[a].series.noSharedTooltip)&&c.splice(a,1);return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=
a.parentNode;return b},getHoverData:function(a,b,q,r,h,e){var c=a;a=b;var u;if(r)h?(u=[],x(q,function(a){var b=a.noSharedTooltip&&h,f=!h&&a.directTouch;a.visible&&!b&&!f&&d(a.options.enableMouseTracking,!0)&&(a=a.searchKDTree({clientX:c.clientX,plotY:c.plotY},!b&&1===a.kdDimensions))&&a.series&&u.push(a)}),0===u.length&&(u=[c])):u=[c];else{if(a&&!a.options.stickyTracking)u=this.getKDPoints([a],h,e);else{if(!h)if(a)a.options.stickyTracking||(q=[a]);else for(r=0;r<q.length;r++)if(q[r].directTouch||
!q[r].options.stickyTracking)q=[];u=this.getKDPoints(q,h,e)}a=(c=u[0])&&c.series}u.sort(function(a,b){return a.series.index-b.series.index});return{hoverPoint:c,hoverSeries:a,hoverPoints:u}},runPointActions:function(b,d){var c=this.chart,r=c.tooltip,h=r?r.shared:!1,e=d||c.hoverPoint,f=e&&e.series||c.hoverSeries;d=this.getHoverData(e,f,c.series,!!d||f&&f.directTouch,h,b);var u,n,e=d.hoverPoint;u=(f=d.hoverSeries)&&f.tooltipOptions.followPointer;n=(h=h&&e&&!e.series.noSharedTooltip)?d.hoverPoints:[e];
if(e&&(e!==c.hoverPoint||r&&r.isHidden)){x(c.hoverPoints||[],function(b){-1===a.inArray(b,n)&&b.setState()});x(n||[],function(a){a.setState("hover")});if(c.hoverSeries!==f)f.onMouseOver();f&&!f.directTouch&&(c.hoverPoint&&c.hoverPoint.firePointEvent("mouseOut"),e.firePointEvent("mouseOver"));c.hoverPoints=n;c.hoverPoint=e;r&&r.refresh(h?n:e,b)}else u&&r&&!r.isHidden&&(e=r.getAnchor([{}],b),r.updatePosition({plotX:e[0],plotY:e[1]}));this.unDocMouseMove||(this.unDocMouseMove=D(t,"mousemove",function(b){var c=
G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));x(n,function(a){x(c.axes,function(c){(!a||a.series&&a.series[c.coll]===c)&&c.drawCrosshair(b,a)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,h=c.hoverPoint,e=c.hoverPoints,f=c.tooltip,u=f&&f.shared?e:h;a&&u&&x(z(u),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)f&&u&&(f.refresh(u),h&&(h.setState(h.state,!0),x(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,h)})));else{if(h)h.onMouseOut();e&&x(e,function(a){a.setState()});
if(d)d.onMouseOut();f&&f.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());x(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;x(c.series,function(h){d=a||h.getPlotBox();h.xAxis&&h.xAxis.zoomEnabled&&h.group&&(h.group.attr(d),h.markerGroup&&(h.markerGroup.attr(d),h.markerGroup.clip(b?c.clipRect:null)),h.dataLabelsGroup&&h.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=
this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,h=a.chartY,e=this.zoomHor,f=this.zoomVert,u=b.plotLeft,n=b.plotTop,y=b.plotWidth,l=b.plotHeight,F,I=this.selectionMarker,g=this.mouseDownX,m=this.mouseDownY,z=c.panKey&&a[c.panKey+"Key"];I&&I.touch||(d<u?d=u:d>u+y&&(d=u+y),h<n?h=n:h>n+l&&(h=n+l),this.hasDragged=Math.sqrt(Math.pow(g-d,2)+Math.pow(m-h,2)),10<this.hasDragged&&
(F=b.isInsidePlot(g-u,m-n),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&F&&!z&&!I&&(this.selectionMarker=I=b.renderer.rect(u,n,e?1:y,f?1:l,0).attr({fill:c.selectionMarkerFill||H("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),I&&e&&(d-=g,I.attr({width:Math.abs(d),x:(0<d?0:d)+g})),I&&f&&(d=h-m,I.attr({height:Math.abs(d),y:(0<d?0:d)+m})),F&&!I&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var h=
{originalEvent:a,xAxis:[],yAxis:[]},e=this.selectionMarker,f=e.attr?e.attr("x"):e.x,u=e.attr?e.attr("y"):e.y,n=e.attr?e.attr("width"):e.width,y=e.attr?e.attr("height"):e.height,l;if(this.hasDragged||d)x(c.axes,function(c){if(c.zoomEnabled&&k(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var e=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,r=c.toValue((e?f:u)+g),e=c.toValue((e?f+n:u+y)-g);h[c.coll].push({axis:c,min:Math.min(r,e),max:Math.max(r,e)});l=!0}}),l&&m(c,"selection",h,function(a){c.zoom(p(a,
d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}c&&(w(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;k(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=A(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,h=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(m(c.series,"click",p(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(p(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-h)&&m(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container;d.onmousedown=
function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};d.onclick=function(a){b.onContainerClick(a)};D(d,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&D(t,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&D(t,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;l(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||
(l(t,"mouseup",this.onDocumentMouseUp),l(t,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(K);(function(a){var D=a.charts,A=a.each,G=a.extend,H=a.map,w=a.noop,k=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,k,p,m,e,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,k,p,m,e,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,k,p,m,e,d)},pinchTranslateDirection:function(a,k,p,m,e,d,l,z){var b=this.chart,u=a?"x":"y",c=a?"X":"Y",C="chart"+
c,q=a?"width":"height",r=b["plot"+(a?"Left":"Top")],h,E,f=z||1,v=b.inverted,n=b.bounds[a?"h":"v"],y=1===k.length,L=k[0][C],F=p[0][C],I=!y&&k[1][C],g=!y&&p[1][C],t;p=function(){!y&&20<Math.abs(L-I)&&(f=z||Math.abs(F-g)/Math.abs(L-I));E=(r-F)/f+L;h=b["plot"+(a?"Width":"Height")]/f};p();k=E;k<n.min?(k=n.min,t=!0):k+h>n.max&&(k=n.max-h,t=!0);t?(F-=.8*(F-l[u][0]),y||(g-=.8*(g-l[u][1])),p()):l[u]=[F,g];v||(d[u]=E-r,d[q]=h);d=v?1/f:f;e[q]=h;e[u]=k;m[v?a?"scaleY":"scaleX":"scale"+c]=f;m["translate"+c]=d*
r+(F-d*L)},pinch:function(a){var t=this,p=t.chart,m=t.pinchDown,e=a.touches,d=e.length,l=t.lastValidTouch,z=t.hasZoom,b=t.selectionMarker,u={},c=1===d&&(t.inClass(a.target,"highcharts-tracker")&&p.runTrackerClick||t.runChartClick),C={};1<d&&(t.initiated=!0);z&&t.initiated&&!c&&a.preventDefault();H(e,function(a){return t.normalize(a)});"touchstart"===a.type?(A(e,function(a,b){m[b]={chartX:a.chartX,chartY:a.chartY}}),l.x=[m[0].chartX,m[1]&&m[1].chartX],l.y=[m[0].chartY,m[1]&&m[1].chartY],A(p.axes,function(a){if(a.zoomEnabled){var b=
p.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(k(a.options.min,a.dataMin)),f=a.toPixels(k(a.options.max,a.dataMax)),e=Math.max(d,f);b.min=Math.min(a.pos,Math.min(d,f)-c);b.max=Math.max(a.pos+a.len,e+c)}}),t.res=!0):t.followTouchMove&&1===d?this.runPointActions(t.normalize(a)):m.length&&(b||(t.selectionMarker=b=G({destroy:w,touch:!0},p.plotBox)),t.pinchTranslate(m,e,u,b,C,l),t.hasPinched=z,t.scaleGroups(u,C),t.res&&(t.res=!1,this.reset(!1,0)))},touch:function(t,w){var p=this.chart,m,e;
if(p.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=p.index;1===t.touches.length?(t=this.normalize(t),(e=p.isInsidePlot(t.chartX-p.plotLeft,t.chartY-p.plotTop))&&!p.openMenu?(w&&this.runPointActions(t),"touchmove"===t.type&&(w=this.pinchDown,m=w[0]?4<=Math.sqrt(Math.pow(w[0].chartX-t.chartX,2)+Math.pow(w[0].chartY-t.chartY,2)):!1),k(m,!0)&&this.pinch(t)):w&&this.reset()):2===t.touches.length&&this.pinch(t)},onContainerTouchStart:function(a){this.zoomOption(a);
this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(k){D[a.hoverChartIndex]&&D[a.hoverChartIndex].pointer.drop(k)}})})(K);(function(a){var D=a.addEvent,A=a.charts,G=a.css,H=a.doc,w=a.extend,k=a.noop,t=a.Pointer,x=a.removeEvent,p=a.win,m=a.wrap;if(p.PointerEvent||p.MSPointerEvent){var e={},d=!!p.PointerEvent,l=function(){var a,d=[];d.item=function(a){return this[a]};for(a in e)e.hasOwnProperty(a)&&d.push({pageX:e[a].pageX,pageY:e[a].pageY,target:e[a].target});
return d},z=function(b,d,c,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||(e(b),e=A[a.hoverChartIndex].pointer,e[d]({type:c,target:b.currentTarget,preventDefault:k,touches:l()}))};w(t.prototype,{onContainerPointerDown:function(a){z(a,"onContainerTouchStart","touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){z(a,"onContainerTouchMove","touchmove",function(a){e[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){z(a,"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(H,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});m(t.prototype,"init",function(a,d,c){a.call(this,d,c);this.hasZoom&&
G(d.container,{"-ms-touch-action":"none","touch-action":"none"})});m(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});m(t.prototype,"destroy",function(a){this.batchMSEvents(x);a.call(this)})}})(K);(function(a){var D,A=a.addEvent,G=a.css,H=a.discardElement,w=a.defined,k=a.each,t=a.isFirefox,x=a.marginNames,p=a.merge,m=a.pick,e=a.setAnimation,d=a.stableSort,l=a.win,z=a.wrap;D=a.Legend=function(a,d){this.init(a,d)};D.prototype={init:function(a,
d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),A(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=m(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=p(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=m(a.symbolWidth,16);this.pages=[]},update:function(a,d){var b=this.chart;this.setOptions(p(!0,
this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;m(d,!0)&&b.redraw()},colorizeItem:function(a,d){a.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,e=a.legendItem,u=a.legendLine,r=a.legendSymbol,h=this.itemHiddenStyle.color,b=d?b.itemStyle.color:h,l=d?a.color||h:h,f=a.options&&a.options.marker,v={fill:l},n;e&&e.css({fill:b,color:b});u&&u.attr({stroke:l});if(r){if(f&&r.isMarker&&(v=a.pointAttribs(),!d))for(n in v)v[n]=h;r.attr(v)}},positionItem:function(a){var b=
this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],r=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);r&&(r.x=e,r.y=d)},destroyItem:function(a){var b=a.checkbox;k(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&H(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}k(this.getAllItems(),function(b){k(["legendItem","legendGroup"],a,b)});k("clipRect up down pager nav box title group".split(" "),
a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;b&&(c=b.translateY,k(this.allItems,function(r){var h=r.checkbox,l;h&&(l=c+e+h.y+(a||0)+3,G(h,{left:b.translateX+r.checkboxOffset+h.x-20+"px",top:l+"px",display:l>c-6&&l<c+d-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,d=this.options.title,c=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,a-3,a-4,null,null,null,
null,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),c=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:c}));this.titleHeight=c},setText:function(b){var d=this.options;b.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,b):d.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e="horizontal"===d.layout,r=this.symbolWidth,h=d.symbolPadding,l=this.itemStyle,f=this.itemHiddenStyle,v=this.padding,
n=e?m(d.itemDistance,20):0,y=!d.rtl,L=d.width,F=d.itemMarginBottom||0,I=this.itemMarginTop,g=this.initialItemX,k=a.legendItem,z=!a.series,t=!z&&a.series.drawLegendSymbol?a.series:a,w=t.options,w=this.createCheckboxForItem&&w&&w.showCheckbox,x=d.useHTML;k||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+t.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?" "+a.options.className:"")+(z?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=k=
c.text("",y?r+h:-h,this.baseline||0,x).css(p(a.visible?l:f)).attr({align:y?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(l=l.fontSize,this.fontMetrics=c.fontMetrics(l,k),this.baseline=this.fontMetrics.f+3+I,k.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,t.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,k,x),w&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);this.setText(a);c=k.getBBox();r=a.checkboxOffset=d.itemWidth||
a.legendItemWidth||r+h+c.width+n+(w?20:0);this.itemHeight=h=Math.round(a.legendItemHeight||c.height);e&&this.itemX-g+r>(L||b.chartWidth-2*v-g-d.x)&&(this.itemX=g,this.itemY+=I+this.lastLineHeight+F,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,r);this.lastItemY=I+this.itemY+F;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=r:(this.itemY+=I+h+F,this.lastLineHeight=h);this.offsetWidth=L||Math.max((e?this.itemX-g-n:r)+v,
this.offsetWidth)},getAllItems:function(){var a=[];k(this.chart.series,function(b){var c=b&&b.options;b&&m(c.showInLegend,w(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});return a},adjustMargins:function(a,d){var b=this.chart,e=this.options,l=e.align.charAt(0)+e.verticalAlign.charAt(0)+e.layout.charAt(0);e.floating||k([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(c,h){c.test(l)&&!w(a[h])&&(b[x[h]]=Math.max(b[x[h]],b.legend[(h+1)%
2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*e[h%2?"x":"y"]+m(e.margin,12)+d[h]))})},render:function(){var a=this,e=a.chart,c=e.renderer,l=a.group,q,r,h,m,f=a.box,v=a.options,n=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;l||(a.group=l=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(l),a.scrollGroup=c.g().add(a.contentGroup));a.renderTitle();q=a.getAllItems();d(q,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&
b.options.legendIndex||0)});v.reversed&&q.reverse();a.allItems=q;a.display=r=!!q.length;a.lastLineHeight=0;k(q,function(b){a.renderItem(b)});h=(v.width||a.offsetWidth)+n;m=a.lastItemY+a.lastLineHeight+a.titleHeight;m=a.handleOverflow(m);m+=n;f||(a.box=f=c.rect().addClass("highcharts-legend-box").attr({r:v.borderRadius}).add(l),f.isNew=!0);f.attr({stroke:v.borderColor,"stroke-width":v.borderWidth||0,fill:v.backgroundColor||"none"}).shadow(v.shadow);0<h&&0<m&&(f[f.isNew?"attr":"animate"](f.crisp({x:0,
y:0,width:h,height:m},f.strokeWidth())),f.isNew=!1);f[r?"show":"hide"]();a.legendWidth=h;a.legendHeight=m;k(q,function(b){a.positionItem(b)});r&&l.align(p(v,{width:h,height:m}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,r=e.y,c=c.spacingBox.height+("top"===e.verticalAlign?-r:r)-this.padding,r=e.maxHeight,h,l=this.clipRect,f=e.navigation,v=m(f.animation,!0),n=f.arrowSize||12,y=this.nav,z=this.pages,F=this.padding,
I,g=this.allItems,p=function(a){a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+F+"px,9999px,"+(F+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(c/=2);r&&(c=Math.min(c,r));z.length=0;a>c&&!1!==f.enabled?(this.clipHeight=h=Math.max(c-20-this.titleHeight-F,0),this.currentPage=m(this.currentPage,1),this.fullHeight=a,k(g,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);
var f=z.length;if(!f||c-z[f-1]>h&&(I||c)!==z[f-1])z.push(I||c),f++;b===g.length-1&&c+a-z[f-1]>h&&z.push(c);c!==I&&(I=c)}),l||(l=b.clipRect=d.clipRect(0,F,9999,0),b.contentGroup.clip(l)),p(h),y||(this.nav=y=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,n,n).on("click",function(){b.scroll(-1,v)}).add(y),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(f.style).add(y),this.down=d.symbol("triangle-down",0,0,n,n).on("click",function(){b.scroll(1,v)}).add(y)),
b.scroll(0),a=c):y&&(p(),this.nav=y.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var b=this.pages,l=b.length;a=this.currentPage+a;var q=this.clipHeight,r=this.options.navigation,h=this.pager,u=this.padding;a>l&&(a=l);0<a&&(void 0!==d&&e(d,this.chart),this.nav.attr({translateX:u,translateY:q+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),h.attr({text:a+
"/"+l}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===l?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?r.inactiveColor:r.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===l?r.inactiveColor:r.activeColor}).css({cursor:a===l?"default":"pointer"}),d=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:d}),this.currentPage=a,this.positionCheckboxes(d))}};a.LegendSymbolMixin={drawRectangle:function(a,d){var b=
a.symbolHeight,e=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(e?(a.symbolWidth-b)/2:0,a.baseline-b+1,e?b:a.symbolWidth,b,m(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=a.symbolHeight,r=e/2,h=this.chart.renderer,l=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var f;f={"stroke-width":b.lineWidth||0};b.dashStyle&&(f.dashstyle=b.dashStyle);this.legendLine=
h.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(f).add(l);c&&!1!==c.enabled&&(b=Math.min(m(c.radius,r),r),0===this.symbol.indexOf("url")&&(c=p(c,{width:e,height:e}),b=0),this.legendSymbol=c=h.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(l),c.isMarker=!0)}};(/Trident\/7\.0/.test(l.navigator.userAgent)||t)&&z(D.prototype,"positionItem",function(a,d){var b=this,e=function(){d._legendItemPos&&a.call(b,d)};e();setTimeout(e)})})(K);(function(a){var D=a.addEvent,A=
a.animate,G=a.animObject,H=a.attr,w=a.doc,k=a.Axis,t=a.createElement,x=a.defaultOptions,p=a.discardElement,m=a.charts,e=a.css,d=a.defined,l=a.each,z=a.extend,b=a.find,u=a.fireEvent,c=a.getStyle,C=a.grep,q=a.isNumber,r=a.isObject,h=a.isString,E=a.Legend,f=a.marginNames,v=a.merge,n=a.Pointer,y=a.pick,L=a.pInt,F=a.removeEvent,I=a.seriesTypes,g=a.splat,J=a.svg,Q=a.syncTimeout,P=a.win,M=a.Renderer,S=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,g){return new S(a,b,g)};S.prototype=
{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(h(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,g){var c,f=b.series;b.series=null;c=v(x,b);c.series=b.series=f;this.userOptions=b;b=c.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=g;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var d;this.index=m.length;m.push(this);a.chartCount++;if(f)for(d in f)D(this,d,
f[d]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var g=this.options.chart;(g=I[b.type||g.type||g.defaultSeriesType])||a.error(17,!0);g=new g;g.init(this,b);return g},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,g){var c=g?b:a;a=g?a:b;return 0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var g=
this.axes,c=this.series,f=this.pointer,d=this.legend,n=this.isDirtyLegend,h,e,y=this.hasCartesianSeries,r=this.isDirtyBox,F,v=this.renderer,q=v.isHidden(),I=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);q&&this.cloneRenderTo();this.layOutTitles();for(b=c.length;b--;)if(F=c[b],F.options.stacking&&(h=!0,F.isDirty)){e=!0;break}if(e)for(b=c.length;b--;)F=c[b],F.options.stacking&&(F.isDirty=!0);l(c,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),
n=!0);a.isDirtyData&&u(a,"updatedData")});n&&d.options.enabled&&(d.render(),this.isDirtyLegend=!1);h&&this.getStacks();y&&l(g,function(a){a.updateNames();a.setScale()});this.getMargins();y&&(l(g,function(a){a.isDirty&&(r=!0)}),l(g,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,I.push(function(){u(a,"afterSetExtremes",z(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(r||h)&&a.redraw()}));r&&this.drawChartBox();u(this,"predraw");l(c,function(a){(r||a.isDirty)&&a.visible&&a.redraw();
a.isDirtyData=!1});f&&f.reset(!0);v.draw();u(this,"redraw");u(this,"render");q&&this.cloneRenderTo(!0);l(I,function(a){a.call()})},get:function(a){function g(b){return b.id===a||b.options&&b.options.id===a}var c,f=this.series,d;c=b(this.axes,g)||b(this.series,g);for(d=0;!c&&d<f.length;d++)c=b(f[d].points||[],g);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});l(c,function(a,b){a.index=b;a.isX=!0});l(b,function(a,b){a.index=b});c=c.concat(b);
l(c,function(b){new k(a,b)})},getSelectedPoints:function(){var a=[];l(this.series,function(b){a=a.concat(C(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return C(this.series,function(a){return a.selected})},setTitle:function(a,b,g){var c=this,f=c.options,d;d=f.title=v({style:{color:"#333333",fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=v({style:{color:"#666666"}},f.subtitle,b);l([["title",a,d],["subtitle",b,f]],function(a,b){var g=a[0],f=c[g],
d=a[1];a=a[2];f&&d&&(c[g]=f=f.destroy());a&&a.text&&!f&&(c[g]=c.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+g,zIndex:a.zIndex||4}).add(),c[g].update=function(a){c.setTitle(!b&&a,b&&a)},c[g].css(a.style))});c.layOutTitles(g)},layOutTitles:function(a){var b=0,g,c=this.renderer,f=this.spacingBox;l(["title","subtitle"],function(a){var g=this[a],d=this.options[a],n;g&&(n=d.style.fontSize,n=c.fontMetrics(n,g).b,g.css({width:(d.width||f.width+d.widthAdjust)+"px"}).align(z({y:b+
n+("title"===a?-3:2)},d),!1,"spacingBox"),d.floating||d.verticalAlign||(b=Math.ceil(b+g.getBBox().height)))},this);g=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&g&&(this.isDirtyBox=g,this.hasRendered&&y(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,g=b.width,b=b.height,f=this.renderToClone||this.renderTo;d(g)||(this.containerWidth=c(f,"width"));d(b)||(this.containerHeight=c(f,"height"));this.chartWidth=Math.max(0,g||this.containerWidth||600);
this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||this.containerHeight||400)},cloneRenderTo:function(a){var b=this.renderToClone,g=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);p(b);delete this.renderToClone}}else g&&g.parentNode===this.renderTo&&this.renderTo.removeChild(g),this.renderToClone=b=this.renderTo.cloneNode(0),e(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block",
"important"),w.body.appendChild(b),g&&b.appendChild(g)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,g=this.options,c=g.chart,f,d;b=this.renderTo;var n=a.uniqueKey(),e;b||(this.renderTo=b=c.renderTo);h(b)&&(this.renderTo=b=w.getElementById(b));b||a.error(13,!0);f=L(H(b,"data-highcharts-chart"));q(f)&&m[f]&&m[f].hasRendered&&m[f].destroy();H(b,"data-highcharts-chart",this.index);b.innerHTML="";c.skipClone||b.offsetWidth||this.cloneRenderTo();
this.getChartSize();f=this.chartWidth;d=this.chartHeight;e=z({position:"relative",overflow:"hidden",width:f+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style);this.container=b=t("div",{id:n},e,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[c.renderer]||M)(b,f,d,null,c.forExport,g.exporting&&g.exporting.allowHTML);this.setClassName(c.className);this.renderer.setStyle(c.style);this.renderer.chartIndex=this.index},
getMargins:function(a){var b=this.spacing,g=this.margin,c=this.titleOffset;this.resetMargins();c&&!d(g[0])&&(this.plotTop=Math.max(this.plotTop,c+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(g,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],g=a.margin;a.hasCartesianSeries&&
l(a.axes,function(a){a.visible&&a.getOffset()});l(f,function(c,f){d(g[f])||(a[c]+=b[f])});a.setChartSize()},reflow:function(a){var b=this,g=b.options.chart,f=b.renderTo,n=d(g.width),h=g.width||c(f,"width"),g=g.height||c(f,"height"),f=a?a.target:P;if(!n&&!b.isPrinting&&h&&g&&(f===P||f===w)){if(h!==b.containerWidth||g!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Q(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=h;b.containerHeight=g}},initReflow:function(){var a=
this,b;b=D(P,"resize",function(b){a.reflow(b)});D(a,"destroy",b)},setSize:function(b,g,c){var f=this,d=f.renderer;f.isResizing+=1;a.setAnimation(c,f);f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;void 0!==b&&(f.options.chart.width=b);void 0!==g&&(f.options.chart.height=g);f.getChartSize();b=d.globalAnimation;(b?A:e)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},b);f.setChartSize(!0);d.setSize(f.chartWidth,f.chartHeight,c);l(f.axes,function(a){a.isDirty=!0;a.setScale()});
f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(c);f.oldChartHeight=null;u(f,"resize");Q(function(){f&&u(f,"endResize",null,function(){--f.isResizing})},G(b).duration)},setChartSize:function(a){var b=this.inverted,g=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.options.chart,n=this.spacing,h=this.clipOffset,e,y,r,F;this.plotLeft=e=Math.round(this.plotLeft);this.plotTop=y=Math.round(this.plotTop);this.plotWidth=r=Math.max(0,Math.round(c-e-this.marginRight));
this.plotHeight=F=Math.max(0,Math.round(f-y-this.marginBottom));this.plotSizeX=b?F:r;this.plotSizeY=b?r:F;this.plotBorderWidth=d.plotBorderWidth||0;this.spacingBox=g.spacingBox={x:n[3],y:n[0],width:c-n[3]-n[1],height:f-n[0]-n[2]};this.plotBox=g.plotBox={x:e,y:y,width:r,height:F};c=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(c,h[3])/2);g=Math.ceil(Math.max(c,h[0])/2);this.clipBox={x:b,y:g,width:Math.floor(this.plotSizeX-Math.max(c,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(c,h[2])/2-g))};a||l(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;l(["margin","spacing"],function(g){var c=b[g],f=r(c)?c:[c,c,c,c];l(["Top","Right","Bottom","Left"],function(c,d){a[g][d]=y(b[g+c],f[d])})});l(f,function(b,g){a[b]=y(a.margin[g],a.spacing[g])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,g=this.chartWidth,c=this.chartHeight,f=this.chartBackground,
d=this.plotBackground,n=this.plotBorder,h,e=this.plotBGImage,y=a.backgroundColor,r=a.plotBackgroundColor,l=a.plotBackgroundImage,F,v=this.plotLeft,q=this.plotTop,I=this.plotWidth,u=this.plotHeight,m=this.plotBox,k=this.clipRect,z=this.clipBox,L="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),L="attr");h=a.borderWidth||0;F=h+(a.shadow?8:0);y={fill:y||"none"};if(h||f["stroke-width"])y.stroke=a.borderColor,y["stroke-width"]=h;f.attr(y).shadow(a.shadow);f[L]({x:F/
2,y:F/2,width:g-F-h%2,height:c-F-h%2,r:a.borderRadius});L="animate";d||(L="attr",this.plotBackground=d=b.rect().addClass("highcharts-plot-background").add());d[L](m);d.attr({fill:r||"none"}).shadow(a.plotShadow);l&&(e?e.animate(m):this.plotBGImage=b.image(l,v,q,I,u).add());k?k.animate({width:z.width,height:z.height}):this.clipRect=b.clipRect(z);L="animate";n||(L="attr",this.plotBorder=n=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());n.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});n[L](n.crisp({x:v,y:q,width:I,height:u},-n.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,g,c=a.options.series,f,d;l(["inverted","angular","polar"],function(n){g=I[b.type||b.defaultSeriesType];d=b[n]||g&&g.prototype[n];for(f=c&&c.length;!d&&f--;)(g=I[c[f].type])&&g.prototype[n]&&(d=!0);a[n]=d})},linkSeries:function(){var a=this,b=a.series;l(b,function(a){a.linkedSeries.length=0});l(b,function(b){var g=b.options.linkedTo;h(g)&&(g=":previous"===
g?a.series[b.index-1]:a.get(g))&&g.linkedParent!==b&&(g.linkedSeries.push(b),b.linkedParent=g,b.visible=y(b.options.visible,g.options.visible,b.visible))})},renderSeries:function(){l(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&l(b.items,function(g){var c=z(b.style,g.style),f=L(c.left)+a.plotLeft,d=L(c.top)+a.plotTop+12;delete c.left;delete c.top;a.renderer.text(g.html,f,d).attr({zIndex:2}).css(c).add()})},render:function(){var a=
this.axes,b=this.renderer,g=this.options,c,f,d;this.setTitle();this.legend=new E(this,g.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();g=this.plotWidth;c=this.plotHeight-=21;l(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<g/this.plotWidth;d=1.05<c/this.plotHeight;if(f||d)l(a,function(a){(a.horiz&&f||!a.horiz&&d)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&l(a,function(a){a.visible&&a.render()});this.seriesGroup||
(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=v(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(P.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,g=b.axes,c=b.series,f=b.container,d,n=f&&f.parentNode;u(b,"destroy");m[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");F(b);for(d=g.length;d--;)g[d]=g[d].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(d=c.length;d--;)c[d]=c[d].destroy();l("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var g=b[a];g&&g.destroy&&(b[a]=g.destroy())});f&&(f.innerHTML="",F(f),n&&p(f));for(d in b)delete b[d]},isReadyToRender:function(){var a=this;return J||P!=P.top||"complete"===w.readyState?!0:(w.attachEvent("onreadystatechange",function(){w.detachEvent("onreadystatechange",a.firstRender);"complete"===w.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();u(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
a.getAxes();l(b.series||[],function(b){a.initSeries(b)});a.linkSeries();u(a,"beforeRender");n&&(a.pointer=new n(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){l([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);u(this,"load");u(this,"render");d(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(K);(function(a){var D,A=a.each,G=a.extend,H=a.erase,w=a.fireEvent,
k=a.format,t=a.isArray,x=a.isNumber,p=a.pick,m=a.removeEvent;D=a.Point=function(){};D.prototype={init:function(a,d,l){this.series=a;this.color=a.color;this.applyOptions(d,l);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=this.color||d[a.colorCounter],d=d.length,l=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):l=a.colorIndex;this.colorIndex=p(this.colorIndex,l);a.chart.pointCount++;return this},applyOptions:function(a,d){var e=this.series,m=e.options.pointValKey||
e.pointValKey;a=D.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;m&&(this.y=this[m]);this.isNull=p(this.isValid&&!this.isValid(),null===this.x||!x(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===d&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===d?e.autoIncrement(this):d);return this},optionsToObject:function(a){var d={},e=this.series,m=e.options.keys,
b=m||e.pointArrayMap||["y"],u=b.length,c=0,k=0;if(x(a)||null===a)d[b[0]]=a;else if(t(a))for(!m&&a.length>u&&(e=typeof a[0],"string"===e?d.name=a[0]:"number"===e&&(d.x=a[0]),c++);k<u;)m&&void 0===a[c]||(d[b[k]]=a[c]),c++,k++;else"object"===typeof a&&(d=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,d=a.zones,a=a.zoneAxis||"y",l=0,m;for(m=d[l];this[a]>=m.value;)m=d[++l];m&&m.color&&!this.options.color&&(this.color=m.color);return m},destroy:function(){var a=this.series.chart,d=a.hoverPoints,l;a.pointCount--;d&&(this.setState(),H(d,this),d.length||
(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)m(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(l in this)this[l]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],d,l=6;l--;)d=a[l],this[d]&&(this[d]=this[d].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,
point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,e=d.tooltipOptions,m=p(e.valueDecimals,""),b=e.valuePrefix||"",u=e.valueSuffix||"";A(d.pointArrayMap||["y"],function(c){c="{point."+c;if(b||u)a=a.replace(c+"}",b+c+"}"+u);a=a.replace(c+"}",c+":,."+m+"f}")});return k(a,{point:this,series:this.series})},firePointEvent:function(a,d,l){var e=this,b=this.series.options;(b.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&
this.importEvents();"click"===a&&b.allowPointSelect&&(l=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});w(this,a,d,l)},visible:!0}})(K);(function(a){var D=a.addEvent,A=a.animObject,G=a.arrayMax,H=a.arrayMin,w=a.correctFloat,k=a.Date,t=a.defaultOptions,x=a.defaultPlotOptions,p=a.defined,m=a.each,e=a.erase,d=a.extend,l=a.fireEvent,z=a.grep,b=a.isArray,u=a.isNumber,c=a.isString,C=a.merge,q=a.pick,r=a.removeEvent,h=a.splat,E=a.SVGElement,f=a.syncTimeout,v=a.win;a.Series=a.seriesType("line",
null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,f,n,g=a.series,h;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();d(c,{name:b.name,
state:"",visible:!1!==b.visible,selected:!0===b.selected});n=b.events;for(f in n)D(c,f,n[f]);if(n&&n.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();m(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(h=g[g.length-1]);c._i=q(h&&h._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,c;if(u(b)){for(c=a.length;c--;)if(b>=q(a[c].options.index,
a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return q(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,f=b.chart,d;m(b.axisTypes||[],function(n){m(f[n],function(a){d=a.options;if(c[n]===d.index||void 0!==c[n]&&c[n]===d.id||void 0===c[n]&&0===d.index)b.insert(a.series),b[n]=a,a.isDirty=!0});b[n]||b.optionalAxis===n||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,f=arguments,d=u(b)?function(g){var f="y"===g&&c.toYData?c.toYData(a):
a[g];c[g+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(f,2))};m(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,f=a.pointIntervalUnit,b=q(b,a.pointStart,0);this.pointInterval=c=q(this.pointInterval,a.pointInterval,1);f&&(a=new k(b),"day"===f?a=+a[k.hcSetDate](a[k.hcGetDate]()+c):"month"===f?a=+a[k.hcSetMonth](a[k.hcGetMonth]()+c):"year"===f&&(a=+a[k.hcSetFullYear](a[k.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},
setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},f=b.plotOptions||{},d=c[this.type];this.userOptions=a;c=C(d,c.series,a);this.tooltipOptions=C(t.tooltip,t.plotOptions[this.type].tooltip,b.tooltip,f.series&&f.series.tooltip,f[this.type]&&f[this.type].tooltip,a.tooltip);null===d.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||
0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&p(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var f,d=this.chart,g=this.userOptions,n=a+"Index",h=a+"Counter",e=c?c.length:q(d.options.chart[a+"Count"],d[a+"Count"]);b||(f=q(g[n],g["_"+n]),p(f)||(d.series.length||(d[h]=0),g["_"+n]=f=d[h]%e,d[h]+=1),c&&(b=c[f]));void 0!==f&&(this[n]=f);this[a]=b},getColor:function(){this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||x[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(f,d,h,e){var n=this,g=n.points,r=g&&g.length||0,y,l=n.options,F=n.chart,v=null,k=n.xAxis,z=l.turboThreshold,p=this.xData,E=this.yData,t=(y=n.pointArrayMap)&&y.length;f=f||[];y=f.length;d=q(d,!0);if(!1!==e&&y&&r===y&&!n.cropped&&
!n.hasGroupedData&&n.visible)m(f,function(a,b){g[b].update&&a!==l.data[b]&&g[b].update(a,!1,null,!1)});else{n.xIncrement=null;n.colorCounter=0;m(this.parallelArrays,function(a){n[a+"Data"].length=0});if(z&&y>z){for(h=0;null===v&&h<y;)v=f[h],h++;if(u(v))for(h=0;h<y;h++)p[h]=this.autoIncrement(),E[h]=f[h];else if(b(v))if(t)for(h=0;h<y;h++)v=f[h],p[h]=v[0],E[h]=v.slice(1,t+1);else for(h=0;h<y;h++)v=f[h],p[h]=v[0],E[h]=v[1];else a.error(12)}else for(h=0;h<y;h++)void 0!==f[h]&&(v={series:n},n.pointClass.prototype.applyOptions.apply(v,
[f[h]]),n.updateParallelArrays(v,h));c(E[0])&&a.error(14,!0);n.data=[];n.options.data=n.userOptions.data=f;for(h=r;h--;)g[h]&&g[h].destroy&&g[h].destroy();k&&(k.minRange=k.userMinRange);n.isDirty=F.isDirtyBox=!0;n.isDirtyData=!!g;h=!1}"point"===l.legendType&&(this.processData(),this.generatePoints());d&&F.redraw(h)},processData:function(b){var c=this.xData,f=this.yData,d=c.length,n;n=0;var g,h,e=this.xAxis,r,l=this.options;r=l.cropThreshold;var v=this.getExtremesFromAll||l.getExtremesFromAll,q=this.isCartesian,
l=e&&e.val2lin,u=e&&e.isLog,m,k;if(q&&!this.isDirty&&!e.isDirty&&!this.yAxis.isDirty&&!b)return!1;e&&(b=e.getExtremes(),m=b.min,k=b.max);if(q&&this.sorted&&!v&&(!r||d>r||this.forceCrop))if(c[d-1]<m||c[0]>k)c=[],f=[];else if(c[0]<m||c[d-1]>k)n=this.cropData(this.xData,this.yData,m,k),c=n.xData,f=n.yData,n=n.start,g=!0;for(r=c.length||1;--r;)d=u?l(c[r])-l(c[r-1]):c[r]-c[r-1],0<d&&(void 0===h||d<h)?h=d:0>d&&this.requireSorting&&a.error(15);this.cropped=g;this.cropStart=n;this.processedXData=c;this.processedYData=
f;this.closestPointRange=h},cropData:function(a,b,c,f){var d=a.length,g=0,n=d,h=q(this.cropShoulder,1),e;for(e=0;e<d;e++)if(a[e]>=c){g=Math.max(0,e-h);break}for(c=e;c<d;c++)if(a[c]>f){n=c+h;break}return{xData:a.slice(g,n),yData:b.slice(g,n),start:g,end:n}},generatePoints:function(){var a=this.options.data,b=this.data,c,f=this.processedXData,d=this.processedYData,g=this.pointClass,e=f.length,r=this.cropStart||0,l,v=this.hasGroupedData,q,u=[],m;b||v||(b=[],b.length=a.length,b=this.data=b);for(m=0;m<
e;m++)l=r+m,v?(q=(new g).init(this,[f[m]].concat(h(d[m]))),q.dataGroup=this.groupMap[m]):(q=b[l])||void 0===a[l]||(b[l]=q=(new g).init(this,a[l],f[m])),q.index=l,u[m]=q;if(b&&(e!==(c=b.length)||v))for(m=0;m<c;m++)m!==r||v||(m+=e),b[m]&&(b[m].destroyElements(),b[m].plotX=void 0);this.data=b;this.points=u},getExtremes:function(a){var c=this.yAxis,f=this.processedXData,d,h=[],g=0;d=this.xAxis.getExtremes();var n=d.min,e=d.max,r,l,v,q;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(q=0;q<
d;q++)if(l=f[q],v=a[q],r=(u(v,!0)||b(v))&&(!c.positiveValuesOnly||v.length||0<v),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(f[q+1]||l)>=n&&(f[q-1]||l)<=e,r&&l)if(r=v.length)for(;r--;)null!==v[r]&&(h[g++]=v[r]);else h[g++]=v;this.dataMin=H(h);this.dataMax=G(h)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,f=c.categories,d=this.yAxis,g=this.points,h=g.length,e=!!this.modifyValue,r=a.pointPlacement,
l="between"===r||u(r),v=a.threshold,m=a.startFromThreshold?v:0,k,z,E,t,C=Number.MAX_VALUE;"between"===r&&(r=.5);u(r)&&(r*=q(a.pointRange||c.pointRange));for(a=0;a<h;a++){var x=g[a],A=x.x,D=x.y;z=x.low;var G=b&&d.stacks[(this.negStacks&&D<(m?0:v)?"-":"")+this.stackKey],H;d.positiveValuesOnly&&null!==D&&0>=D&&(x.isNull=!0);x.plotX=k=w(Math.min(Math.max(-1E5,c.translate(A,0,0,0,1,r,"flags"===this.type)),1E5));b&&this.visible&&!x.isNull&&G&&G[A]&&(t=this.getStackIndicator(t,A,this.index),H=G[A],D=H.points[t.key],
z=D[0],D=D[1],z===m&&t.key===G[A].base&&(z=q(v,d.min)),d.positiveValuesOnly&&0>=z&&(z=null),x.total=x.stackTotal=H.total,x.percentage=H.total&&x.y/H.total*100,x.stackY=D,H.setOffset(this.pointXOffset||0,this.barW||0));x.yBottom=p(z)?d.translate(z,0,1,0,1):null;e&&(D=this.modifyValue(D,x));x.plotY=z="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,d.translate(D,0,1,0,1)),1E5):void 0;x.isInside=void 0!==z&&0<=z&&z<=d.len&&0<=k&&k<=c.len;x.clientX=l?w(c.translate(A,0,0,0,1,r)):k;x.negative=x.y<
(v||0);x.category=f&&void 0!==f[x.x]?f[x.x]:x.x;x.isNull||(void 0!==E&&(C=Math.min(C,Math.abs(k-E))),E=k);x.zone=this.zones.length&&x.getZone()}this.closestPointRangePx=C},getValidPoints:function(a,b){var c=this.chart;return z(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,f=b.renderer,d=b.inverted,g=this.clipBox,h=g||b.clipBox,n=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,
c.xAxis,c.yAxis].join(),e=b[n],r=b[n+"m"];e||(a&&(h.width=0,b[n+"m"]=r=f.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[n]=e=f.clipRect(h),e.count={length:0});a&&!e.count[this.index]&&(e.count[this.index]=!0,e.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?e:b.clipRect),this.markerGroup.clip(r),this.sharedClipKey=n);a||(e.count[this.index]&&(delete e.count[this.index],--e.count.length),0===e.count.length&&n&&b[n]&&(g||(b[n]=b[n].destroy()),b[n+"m"]&&(this.markerGroup.clip(),
b[n+"m"]=b[n+"m"].destroy())))},animate:function(a){var b=this.chart,c=A(this.options.animation),f;a?this.setClip(c):(f=this.sharedClipKey,(a=b[f])&&a.animate({width:b.plotSizeX},c),b[f+"m"]&&b[f+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();l(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,f,d,g,h=this.options.marker,e,r,l,v,m=this.markerGroup,k=q(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);
if(!1!==h.enabled||this._hasPointMarkers)for(f=0;f<a.length;f++)d=a[f],c=d.plotY,g=d.graphic,e=d.marker||{},r=!!d.marker,l=k&&void 0===e.enabled||e.enabled,v=d.isInside,l&&u(c)&&null!==d.y?(c=q(e.symbol,this.symbol),d.hasImage=0===c.indexOf("url"),l=this.markerAttribs(d,d.selected&&"select"),g?g[v?"show":"hide"](!0).animate(l):v&&(0<l.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(c,l.x,l.y,l.width,l.height,r?e:h).add(m)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),
!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,f=a.marker||{},d=q(f.radius,c.radius);b&&(c=c.states[b],b=f.states&&f.states[b],d=q(b&&b.radius,c&&c.radius,d+(c&&c.radiusPlus||0)));a.hasImage&&(d=0);a={x:Math.floor(a.plotX)-d,y:a.plotY-d};d&&(a.width=a.height=2*d);return a},pointAttribs:function(a,b){var c=this.options.marker,f=a&&a.options,d=f&&f.marker||{},g=this.color,h=f&&f.color,n=a&&a.color,f=q(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=h||a||
n||g;a=d.fillColor||c.fillColor||g;g=d.lineColor||c.lineColor||g;b&&(c=c.states[b],b=d.states&&d.states[b]||{},f=q(b.lineWidth,c.lineWidth,f+q(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":f,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(v.navigator.userAgent),f,d=a.data||[],g,h,q;l(a,"destroy");r(a);m(a.axisTypes||[],function(b){(q=a[b])&&q.series&&(e(q.series,a),q.isDirty=q.forceRedraw=
!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=d.length;f--;)(g=d[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);for(h in a)a[h]instanceof E&&!a[h].survive&&(f=c&&"group"===h?"hide":"destroy",a[h][f]());b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();for(h in a)delete a[h]},getGraphPath:function(a,b,c){var f=this,d=f.options,g=d.step,h,n=[],e=[],r;a=a||f.points;(h=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&h&&(g=4-g);!d.connectNulls||
b||c||(a=this.getValidPoints(a));m(a,function(h,l){var v=h.plotX,y=h.plotY,q=a[l-1];(h.leftCliff||q&&q.rightCliff)&&!c&&(r=!0);h.isNull&&!p(b)&&0<l?r=!d.connectNulls:h.isNull&&!b?r=!0:(0===l||r?l=["M",h.plotX,h.plotY]:f.getPointSpline?l=f.getPointSpline(a,h,l):g?(l=1===g?["L",q.plotX,y]:2===g?["L",(q.plotX+v)/2,q.plotY,"L",(q.plotX+v)/2,y]:["L",v,q.plotY],l.push("L",v,y)):l=["L",v,y],e.push(h.x),g&&e.push(h.x),n.push.apply(n,l),r=!1)});n.xMap=e;return f.graphPath=n},drawGraph:function(){var a=this,
b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),f=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];m(this.zones,function(c,g){f.push(["zone-graph-"+g,"highcharts-graph highcharts-zone-graph-"+g+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});m(f,function(f,g){var d=f[0],h=a[d];h?(h.endX=c.xMap,h.animate({d:c})):c.length&&(a[d]=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group),h={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
a.color||"none"},f[3]?h.dashstyle=f[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[d].attr(h).shadow(2>g&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,f=this.zones,d,g,h=this.clips||[],e,r=this.graph,l=this.area,v=Math.max(b.chartWidth,b.chartHeight),u=this[(this.zoneAxis||"y")+"Axis"],k,z,E=b.inverted,p,t,C,x,w=!1;f.length&&(r||l)&&u&&void 0!==u.min&&(z=u.reversed,p=u.horiz,r&&r.hide(),l&&l.hide(),
k=u.getExtremes(),m(f,function(f,n){d=z?p?b.plotWidth:0:p?0:u.toPixels(k.min);d=Math.min(Math.max(q(g,d),0),v);g=Math.min(Math.max(Math.round(u.toPixels(q(f.value,k.max),!0)),0),v);w&&(d=g=u.toPixels(k.max));t=Math.abs(d-g);C=Math.min(d,g);x=Math.max(d,g);u.isXAxis?(e={x:E?x:C,y:0,width:t,height:v},p||(e.x=b.plotHeight-e.x)):(e={x:0,y:E?x:C,width:v,height:t},p&&(e.y=b.plotWidth-e.y));E&&c.isVML&&(e=u.isXAxis?{x:0,y:z?C:x,height:e.width,width:b.chartWidth}:{x:e.y-b.plotLeft-b.spacingBox.x,y:0,width:e.height,
height:b.chartHeight});h[n]?h[n].animate(e):(h[n]=c.clipRect(e),r&&a["zone-graph-"+n].clip(h[n]),l&&a["zone-area-"+n].clip(h[n]));w=f.value>k.max}),this.clips=h)},invertGroups:function(a){function b(){m(["group","markerGroup"],function(b){c[b]&&(f.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,f=c.chart,d;c.xAxis&&(d=D(f,"resize",b),D(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,f,d){var g=
this[a],h=!g;h&&(this[a]=g=this.chart.renderer.g(b).attr({zIndex:f||.1}).add(d),g.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));g.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,c,d=a.options,h=!!a.animate&&b.renderer.isSVG&&A(d.animation).duration,g=a.visible?"inherit":"hidden",e=d.zIndex,r=a.hasRendered,l=b.seriesGroup,v=b.inverted;c=a.plotGroup("group","series",g,e,l);a.markerGroup=a.plotGroup("markerGroup","markers",g,e,l);h&&a.animate(!0);c.inverted=a.isCartesian?v:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(v);
!1===d.clip||a.sharedClipKey||r||c.clip(b.clipRect);h&&a.animate();r||(a.animationTimeout=f(function(){a.afterAnimate()},h));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,f=this.xAxis,d=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:q(f&&f.left,a.plotLeft),translateY:q(d&&d.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX",
"plotY"],searchPoint:function(a,b){var c=this.xAxis,f=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?f.len-a.chartX+f.pos:a.chartY-f.pos},b)},buildKDTree:function(){function a(c,f,g){var d,h;if(h=c&&c.length)return d=b.kdAxisArray[f%g],c.sort(function(a,b){return a[d]-b[d]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),f+1,g),right:a(c.slice(h+1),f+1,g)}}this.buildingKdTree=!0;var b=this,c=b.kdDimensions;delete b.kdTree;f(function(){b.kdTree=
a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,e,n){var r=b.point,l=f.kdAxisArray[e%n],v,q,y=r;q=p(a[d])&&p(r[d])?Math.pow(a[d]-r[d],2):null;v=p(a[g])&&p(r[g])?Math.pow(a[g]-r[g],2):null;v=(q||0)+(v||0);r.dist=p(v)?Math.sqrt(v):Number.MAX_VALUE;r.distX=p(q)?Math.sqrt(q):Number.MAX_VALUE;l=a[l]-r[l];v=0>l?"left":"right";q=0>l?"right":"left";b[v]&&(v=c(a,b[v],e+1,n),y=v[h]<y[h]?v:r);b[q]&&Math.sqrt(l*l)<y[h]&&(a=c(a,
b[q],e+1,n),y=a[h]<y[h]?a:y);return y}var f=this,d=this.kdAxisArray[0],g=this.kdAxisArray[1],h=b?"distX":"dist";this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(K);(function(a){function D(a,e,d,l,k){var b=a.chart.inverted;this.axis=a;this.isNegative=d;this.options=e;this.x=l;this.total=null;this.points={};this.stack=k;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(b?d?"left":"right":"center"),
verticalAlign:e.verticalAlign||(b?"middle":d?"bottom":"top"),y:p(e.y,b?4:d?14:-6),x:p(e.x,b?d?-6:6:0)};this.textAlign=e.textAlign||(b?d?"right":"left":"center")}var A=a.Axis,G=a.Chart,H=a.correctFloat,w=a.defined,k=a.destroyObjectProperties,t=a.each,x=a.format,p=a.pick;a=a.Series;D.prototype={destroy:function(){k(this,this.axis)},render:function(a){var e=this.options,d=e.format,d=d?x(d,this):e.formatter.call(this);this.label?this.label.attr({text:d,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(d,
null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var d=this.axis,l=d.chart,m=l.inverted,b=d.reversed,b=this.isNegative&&!b||!this.isNegative&&b,u=d.translate(d.usePercentage?100:this.total,0,0,0,1),d=d.translate(0),d=Math.abs(u-d);a=l.xAxis[0].translate(this.x)+a;var c=l.plotHeight,m={x:m?b?u:u-d:a,y:m?c-a-e:b?c-u-d:c-u,width:m?d:e,height:m?e:d};if(e=this.label)e.align(this.alignOptions,null,m),m=e.alignAttr,e[!1===
this.options.crop||l.isInsidePlot(m.x,m.y)?"show":"hide"](!0)}};G.prototype.getStacks=function(){var a=this;t(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});t(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+p(e.options.stack,""))})};A.prototype.buildStacks=function(){var a=this.series,e,d=p(this.options.reversedStacks,!0),l=a.length,k;if(!this.isXAxis){this.usePercentage=!1;for(k=l;k--;)a[d?k:l-k-1].setStackedPoints();
for(k=l;k--;)e=a[d?k:l-k-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(k=0;k<l;k++)a[k].setPercentStacks()}};A.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,d=this.stacks,l,k,b=this.stackTotalGroup;b||(this.stackTotalGroup=b=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());b.translate(a.plotLeft,a.plotTop);for(l in d)for(k in a=d[l],a)a[k].render(b)};A.prototype.resetStacks=function(){var a=this.stacks,e,d;if(!this.isXAxis)for(e in a)for(d in a[e])a[e][d].touched<
this.stacksTouched?(a[e][d].destroy(),delete a[e][d]):(a[e][d].total=null,a[e][d].cum=null)};A.prototype.cleanStacks=function(){var a,e,d;if(!this.isXAxis)for(e in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(d in a[e])a[e][d].cum=a[e][d].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,d=[],l=e.length,k=this.options,b=k.threshold,u=k.startFromThreshold?
b:0,c=k.stack,k=k.stacking,t=this.stackKey,q="-"+t,r=this.negStacks,h=this.yAxis,E=h.stacks,f=h.oldStacks,v,n,y,x,F,I,g;h.stacksTouched+=1;for(F=0;F<l;F++)I=a[F],g=e[F],v=this.getStackIndicator(v,I,this.index),x=v.key,y=(n=r&&g<(u?0:b))?q:t,E[y]||(E[y]={}),E[y][I]||(f[y]&&f[y][I]?(E[y][I]=f[y][I],E[y][I].total=null):E[y][I]=new D(h,h.options.stackLabels,n,I,c)),y=E[y][I],null!==g&&(y.points[x]=y.points[this.index]=[p(y.cum,u)],w(y.cum)||(y.base=x),y.touched=h.stacksTouched,0<v.index&&!1===this.singleStacks&&
(y.points[x][0]=y.points[this.index+","+I+",0"][0])),"percent"===k?(n=n?t:q,r&&E[n]&&E[n][I]?(n=E[n][I],y.total=n.total=Math.max(n.total,y.total)+Math.abs(g)||0):y.total=H(y.total+(Math.abs(g)||0))):y.total=H(y.total+(g||0)),y.cum=p(y.cum,u)+(g||0),null!==g&&(y.points[x].push(y.cum),d[F]=y.cum);"percent"===k&&(h.usePercentage=!0);this.stackedYData=d;h.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,d=a.yAxis.stacks,l=a.processedXData,k;t([e,"-"+e],function(b){for(var e=
l.length,c,m;e--;)if(c=l[e],k=a.getStackIndicator(k,c,a.index,b),c=(m=d[b]&&d[b][c])&&m.points[k.key])m=m.total?100/m.total:0,c[0]=H(c[0]*m),c[1]=H(c[1]*m),a.stackedYData[e]=c[1]})};a.prototype.getStackIndicator=function(a,e,d,l){!w(a)||a.x!==e||l&&a.key!==l?a={x:e,index:0,key:l}:a.index++;a.key=[d,e,a.index].join();return a}})(K);(function(a){var D=a.addEvent,A=a.animate,G=a.Axis,H=a.createElement,w=a.css,k=a.defined,t=a.each,x=a.erase,p=a.extend,m=a.fireEvent,e=a.inArray,d=a.isNumber,l=a.isObject,
z=a.merge,b=a.pick,u=a.Point,c=a.Series,C=a.seriesTypes,q=a.setAnimation,r=a.splat;p(a.Chart.prototype,{addSeries:function(a,c,f){var d,h=this;a&&(c=b(c,!0),m(h,"addSeries",{options:a},function(){d=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();c&&h.redraw(f)}));return d},addAxis:function(a,c,f,d){var h=c?"xAxis":"yAxis",e=this.options;a=z(a,{index:this[h].length,isX:c});new G(this,a);e[h]=r(e[h]||{});e[h].push(a);b(f,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,
h=c.loading,e=function(){d&&w(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=H("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=H("span",{className:"highcharts-loading-inner"},null,d),D(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;w(d,p(h.style,{zIndex:10}));w(b.loadingSpan,h.labelStyle);b.loadingShown||(w(d,{opacity:0,display:""}),A(d,{opacity:h.style.opacity||
.5},{duration:h.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){w(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,c){var f,h={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},n=a.chart,l,q;if(n){z(!0,this.options.chart,n);"className"in n&&this.setClassName(n.className);if("inverted"in n||"polar"in n)this.propFromSeries(),l=!0;for(f in n)n.hasOwnProperty(f)&&(-1!==e("chart."+f,this.propsRequireUpdateSeries)&&(q=!0),-1!==e(f,this.propsRequireDirtyBox)&&(this.isDirtyBox=
!0));"style"in n&&this.renderer.setStyle(n.style)}for(f in a){if(this[f]&&"function"===typeof this[f].update)this[f].update(a[f],!1);else if("function"===typeof this[h[f]])this[h[f]](a[f]);"chart"!==f&&-1!==e(f,this.propsRequireUpdateSeries)&&(q=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&z(!0,this.options.plotOptions,a.plotOptions);t(["xAxis","yAxis","series"],function(b){a[b]&&t(r(a[b]),function(a,c){(c=k(a.id)&&this.get(a.id)||this[b][c])&&c.coll===b&&c.update(a,!1)},this)},this);
l&&t(this.axes,function(a){a.update({},!1)});q&&t(this.series,function(a){a.update({},!1)});a.loading&&z(!0,this.options.loading,a.loading);f=n&&n.width;n=n&&n.height;d(f)&&f!==this.chartWidth||d(n)&&n!==this.chartHeight?this.setSize(f,n):b(c,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});p(u.prototype,{update:function(a,c,f,d){function h(){e.applyOptions(a);null===e.y&&v&&(e.graphic=v.destroy());l(a,!0)&&(v&&v.element&&a&&a.marker&&a.marker.symbol&&(e.graphic=v.destroy()),
a&&a.dataLabels&&e.dataLabel&&(e.dataLabel=e.dataLabel.destroy()));q=e.index;r.updateParallelArrays(e,q);u.data[q]=l(u.data[q],!0)||l(a,!0)?e.options:a;r.isDirty=r.isDirtyData=!0;!r.fixedBox&&r.hasCartesianSeries&&(g.isDirtyBox=!0);"point"===u.legendType&&(g.isDirtyLegend=!0);c&&g.redraw(f)}var e=this,r=e.series,v=e.graphic,q,g=r.chart,u=r.options;c=b(c,!0);!1===d?h():e.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});p(c.prototype,
{addPoint:function(a,c,f,d){var h=this.options,e=this.data,r=this.chart,l=this.xAxis,l=l&&l.hasNames&&l.names,v=h.data,g,q,u=this.xData,k,m;c=b(c,!0);g={series:this};this.pointClass.prototype.applyOptions.apply(g,[a]);m=g.x;k=u.length;if(this.requireSorting&&m<u[k-1])for(q=!0;k&&u[k-1]>m;)k--;this.updateParallelArrays(g,"splice",k,0,0);this.updateParallelArrays(g,k);l&&g.name&&(l[m]=g.name);v.splice(k,0,a);q&&(this.data.splice(k,0,null),this.processData());"point"===h.legendType&&this.generatePoints();
f&&(e[0]&&e[0].remove?e[0].remove(!1):(e.shift(),this.updateParallelArrays(g,"shift"),v.shift()));this.isDirtyData=this.isDirty=!0;c&&r.redraw(d)},removePoint:function(a,c,f){var d=this,h=d.data,e=h[a],r=d.points,l=d.chart,u=function(){r&&r.length===h.length&&r.splice(a,1);h.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(e||{series:d},"splice",a,1);e&&e.destroy();d.isDirty=!0;d.isDirtyData=!0;c&&l.redraw()};q(f,l);c=b(c,!0);e?e.firePointEvent("remove",null,u):u()},remove:function(a,
c,f){function d(){h.destroy();e.isDirtyLegend=e.isDirtyBox=!0;e.linkSeries();b(a,!0)&&e.redraw(c)}var h=this,e=h.chart;!1!==f?m(h,"remove",null,d):d()},update:function(a,c){var f=this,d=this.chart,h=this.userOptions,e=this.oldType||this.type,r=a.type||h.type||d.options.chart.type,l=C[e].prototype,q=["group","markerGroup","dataLabelsGroup"],g;if(r&&r!==e||void 0!==a.zIndex)q.length=0;t(q,function(a){q[a]=f[a];delete f[a]});a=z(h,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},
a);this.remove(!1,null,!1);for(g in l)this[g]=void 0;p(this,C[r||e].prototype);t(q,function(a){f[a]=q[a]});this.init(d,a);this.oldType=e;d.linkSeries();b(c,!0)&&d.redraw(!1)}});p(G.prototype,{update:function(a,c){var f=this.chart;a=f.options[this.coll][this.options.index]=z(this.userOptions,a);this.destroy(!0);this.init(f,p(a,{events:void 0}));f.isDirtyBox=!0;b(c,!0)&&f.redraw()},remove:function(a){for(var c=this.chart,f=this.coll,d=this.series,h=d.length;h--;)d[h]&&d[h].remove(!1);x(c.axes,this);
x(c[f],this);c.options[f].splice(this.options.index,1);t(c[f],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var D=a.color,A=a.each,G=a.map,H=a.pick,w=a.Series,k=a.seriesType;k("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],k=[],p=this.xAxis,m=this.yAxis,e=m.stacks[this.stackKey],d={},
l=this.points,z=this.index,b=m.series,u=b.length,c,C=H(m.options.reversedStacks,!0)?1:-1,q,r;if(this.options.stacking){for(q=0;q<l.length;q++)d[l[q].x]=l[q];for(r in e)null!==e[r].total&&k.push(r);k.sort(function(a,b){return a-b});c=G(b,function(){return this.visible});A(k,function(b,r){var f=0,h,n;if(d[b]&&!d[b].isNull)a.push(d[b]),A([-1,1],function(a){var f=1===a?"rightNull":"leftNull",l=0,v=e[k[r+a]];if(v)for(q=z;0<=q&&q<u;)h=v.points[q],h||(q===z?d[b][f]=!0:c[q]&&(n=e[b].points[q])&&(l-=n[1]-
n[0])),q+=C;d[b][1===a?"rightCliff":"leftCliff"]=l});else{for(q=z;0<=q&&q<u;){if(h=e[b].points[q]){f=h[1];break}q+=C}f=m.translate(f,0,1,0,1);a.push({isNull:!0,plotX:p.translate(b,0,0,0,1),x:b,plotY:f,yBottom:f})}})}return a},getGraphPath:function(a){var k=w.prototype.getGraphPath,p=this.options,m=p.stacking,e=this.yAxis,d,l,z=[],b=[],u=this.index,c,t=e.stacks[this.stackKey],q=p.threshold,r=e.getThreshold(p.threshold),h,p=p.connectNulls||"percent"===m,E=function(f,d,h){var n=a[f];f=m&&t[n.x].points[u];
var l=n[h+"Null"]||0;h=n[h+"Cliff"]||0;var v,k,n=!0;h||l?(v=(l?f[0]:f[1])+h,k=f[0]+h,n=!!l):!m&&a[d]&&a[d].isNull&&(v=k=q);void 0!==v&&(b.push({plotX:c,plotY:null===v?r:e.getThreshold(v),isNull:n,isCliff:!0}),z.push({plotX:c,plotY:null===k?r:e.getThreshold(k),doCurve:!1}))};a=a||this.points;m&&(a=this.getStackPoints());for(d=0;d<a.length;d++)if(l=a[d].isNull,c=H(a[d].rectPlotX,a[d].plotX),h=H(a[d].yBottom,r),!l||p)p||E(d,d-1,"left"),l&&!m&&p||(b.push(a[d]),z.push({x:d,plotX:c,plotY:h})),p||E(d,d+
1,"right");d=k.call(this,b,!0,!0);z.reversed=!0;l=k.call(this,z,!0,!0);l.length&&(l[0]="L");l=d.concat(l);k=k.call(this,b,!1,p);l.xMap=d.xMap;this.areaPath=l;return k},drawGraph:function(){this.areaPath=[];w.prototype.drawGraph.apply(this);var a=this,k=this.areaPath,p=this.options,m=[["area","highcharts-area",this.color,p.fillColor]];A(this.zones,function(e,d){m.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+e.className,e.color||a.color,e.fillColor||p.fillColor])});A(m,function(e){var d=
e[0],l=a[d];l?(l.endX=k.xMap,l.animate({d:k})):(l=a[d]=a.chart.renderer.path(k).addClass(e[1]).attr({fill:H(e[3],D(e[2]).setOpacity(H(p.fillOpacity,.75)).get()),zIndex:0}).add(a.group),l.isArea=!0);l.startX=k.xMap;l.shiftUnit=p.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var D=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,H){var w=G.plotX,k=G.plotY,t=a[H-1];H=a[H+1];var x,p,m,e;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&H&&!H.isNull&&
!1!==H.doCurve&&!G.isCliff){a=t.plotY;m=H.plotX;H=H.plotY;var d=0;x=(1.5*w+t.plotX)/2.5;p=(1.5*k+a)/2.5;m=(1.5*w+m)/2.5;e=(1.5*k+H)/2.5;m!==x&&(d=(e-p)*(m-w)/(m-x)+k-e);p+=d;e+=d;p>a&&p>k?(p=Math.max(a,k),e=2*k-p):p<a&&p<k&&(p=Math.min(a,k),e=2*k-p);e>H&&e>k?(e=Math.max(H,k),p=2*k-e):e<H&&e<k&&(e=Math.min(H,k),p=2*k-e);G.rightContX=m;G.rightContY=e}G=["C",D(t.rightContX,t.plotX),D(t.rightContY,t.plotY),D(x,w),D(p,k),w,k];t.rightContX=t.rightContY=null;return G}})})(K);(function(a){var D=a.seriesTypes.area.prototype,
A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:D.getStackPoints,getGraphPath:D.getGraphPath,setStackCliffs:D.setStackCliffs,drawGraph:D.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var D=a.animObject,A=a.color,G=a.each,H=a.extend,w=a.isNumber,k=a.merge,t=a.pick,x=a.Series,p=a.seriesType,m=a.svg;p("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,
brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){x.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&G(d.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=
this,d=a.options,l=a.xAxis,k=a.yAxis,b=l.reversed,u,c={},m=0;!1===d.grouping?m=1:G(a.chart.series,function(b){var f=b.options,d=b.yAxis,h;b.type===a.type&&b.visible&&k.len===d.len&&k.pos===d.pos&&(f.stacking?(u=b.stackKey,void 0===c[u]&&(c[u]=m++),h=c[u]):!1!==f.grouping&&(h=m++),b.columnIndex=h)});var q=Math.min(Math.abs(l.transA)*(l.ordinalSlope||d.pointRange||l.closestPointRange||l.tickInterval||1),l.len),r=q*d.groupPadding,h=(q-2*r)/(m||1),d=Math.min(d.maxPointWidth||l.len,t(d.pointWidth,h*(1-
2*d.pointPadding)));a.columnMetrics={width:d,offset:(h-d)/2+(r+((a.columnIndex||0)+(b?1:0))*h-q/2)*(b?-1:1)};return a.columnMetrics},crispCol:function(a,d,l,k){var b=this.chart,e=this.borderWidth,c=-(e%2?.5:0),e=e%2?.5:1;b.inverted&&b.renderer.isVML&&(e+=1);l=Math.round(a+l)+c;a=Math.round(a)+c;k=Math.round(d+k)+e;c=.5>=Math.abs(d)&&.5<k;d=Math.round(d)+e;k-=d;c&&k&&(--d,k+=1);return{x:a,y:d,width:l-a,height:k}},translate:function(){var a=this,d=a.chart,l=a.options,k=a.dense=2>a.closestPointRange*
a.xAxis.transA,k=a.borderWidth=t(l.borderWidth,k?0:1),b=a.yAxis,u=a.translatedThreshold=b.getThreshold(l.threshold),c=t(l.minPointLength,5),m=a.getColumnMetrics(),q=m.width,r=a.barW=Math.max(q,1+2*k),h=a.pointXOffset=m.offset;d.inverted&&(u-=.5);l.pointPadding&&(r=Math.ceil(r));x.prototype.translate.apply(a);G(a.points,function(e){var f=t(e.yBottom,u),l=999+Math.abs(f),l=Math.min(Math.max(-l,e.plotY),b.len+l),n=e.plotX+h,k=r,m=Math.min(l,f),F,p=Math.max(l,f)-m;Math.abs(p)<c&&c&&(p=c,F=!b.reversed&&
!e.negative||b.reversed&&e.negative,m=Math.abs(m-u)>c?f-c:u-(F?c:0));e.barX=n;e.pointWidth=q;e.tooltipPos=d.inverted?[b.len+b.pos-d.plotLeft-l,a.xAxis.len-n-k/2,p]:[n+k/2,l+b.pos-d.plotTop,p];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[e.plotX,b.len/2,0,0]:[n,m,k,p])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var e=this.options,m,b=this.pointAttrToOptions||
{};m=b.stroke||"borderColor";var u=b["stroke-width"]||"borderWidth",c=a&&a.color||this.color,p=a[m]||e[m]||this.color||c,q=a[u]||e[u]||this[u]||0,b=e.dashStyle;a&&this.zones.length&&(c=(c=a.getZone())&&c.color||a.options.color||this.color);d&&(a=k(e.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,c=a.color||void 0!==d&&A(c).brighten(a.brightness).get()||c,p=a[m]||p,q=a[u]||q,b=a.dashStyle||b);m={fill:c,stroke:p,"stroke-width":q};e.borderRadius&&(m.r=e.borderRadius);b&&(m.dashstyle=
b);return m},drawPoints:function(){var a=this,d=this.chart,l=a.options,m=d.renderer,b=l.animationLimit||250,u;G(a.points,function(c){var e=c.graphic;if(w(c.plotY)&&null!==c.y){u=c.shapeArgs;if(e)e[d.pointCount<b?"animate":"attr"](k(u));else c.graphic=e=m[c.shapeType](u).add(c.group||a.group);e.attr(a.pointAttribs(c,c.selected&&"select")).shadow(l.shadow,null,l.stacking&&!l.borderRadius);e.addClass(c.getClassName(),!0)}else e&&(c.graphic=e.destroy())})},animate:function(a){var d=this,e=this.yAxis,
k=d.options,b=this.chart.inverted,u={};m&&(a?(u.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(k.threshold))),b?u.translateX=a-e.len:u.translateY=a,d.group.attr(u)):(u[b?"translateX":"translateY"]=e.pos,d.group.animate(u,H(D(d.options.animation),{step:function(a,b){d.group.attr({scaleY:Math.max(.001,b.pos)})}})),d.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&G(d.series,function(d){d.type===a.type&&(d.isDirty=!0)});x.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var D=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group",
"markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&D.prototype.drawGraph.call(this)}})})(K);(function(a){var D=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,H=this.chart,w=2*(a.slicedOffset||0),k=H.plotWidth-2*w,H=H.plotHeight-2*w,t=a.center,t=[D(t[0],"50%"),D(t[1],"50%"),a.size||"100%",a.innerSize||0],x=Math.min(k,H),p,m;for(p=0;4>p;++p)m=t[p],a=2>p||2===p&&/%$/.test(m),t[p]=A(m,[k,H,x,t[2]][p])+
(a?w:0);t[3]>t[2]&&(t[3]=t[2]);return t}}})(K);(function(a){var D=a.addEvent,A=a.defined,G=a.each,H=a.extend,w=a.inArray,k=a.noop,t=a.pick,x=a.Point,p=a.Series,m=a.seriesType,e=a.setAnimation;m("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",
borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var d=this,e=d.points,b=d.startAngleRad;a||(G(e,function(a){var c=a.graphic,e=a.shapeArgs;c&&(c.attr({r:a.startR||d.center[3]/2,start:b,end:b}),c.animate({r:e.r,start:e.start,end:e.end},d.options.animation))}),d.animate=null)},updateTotals:function(){var a,
e=0,k=this.points,b=k.length,u,c=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)u=k[a],0>u.y&&(u.y=null),e+=c&&!u.visible?0:u.y;this.total=e;for(a=0;a<b;a++)u=k[a],u.percentage=0<e&&(u.visible||!c)?u.y/e*100:0,u.total=e},generatePoints:function(){p.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var d=0,e=this.options,b=e.slicedOffset,k=b+(e.borderWidth||0),c,m,q,r=e.startAngle||0,h=this.startAngleRad=Math.PI/180*(r-90),r=(this.endAngleRad=Math.PI/
180*(t(e.endAngle,r+360)-90))-h,p=this.points,f=e.dataLabels.distance,e=e.ignoreHiddenPoint,v,n=p.length,y;a||(this.center=a=this.getCenter());this.getX=function(b,c){q=Math.asin(Math.min((b-a[1])/(a[2]/2+f),1));return a[0]+(c?-1:1)*Math.cos(q)*(a[2]/2+f)};for(v=0;v<n;v++){y=p[v];c=h+d*r;if(!e||y.visible)d+=y.percentage/100;m=h+d*r;y.shapeType="arc";y.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*c)/1E3,end:Math.round(1E3*m)/1E3};q=(m+c)/2;q>1.5*Math.PI?q-=2*Math.PI:q<-Math.PI/
2&&(q+=2*Math.PI);y.slicedTranslation={translateX:Math.round(Math.cos(q)*b),translateY:Math.round(Math.sin(q)*b)};c=Math.cos(q)*a[2]/2;m=Math.sin(q)*a[2]/2;y.tooltipPos=[a[0]+.7*c,a[1]+.7*m];y.half=q<-Math.PI/2||q>Math.PI/2?1:0;y.angle=q;k=Math.min(k,f/5);y.labelPos=[a[0]+c+Math.cos(q)*f,a[1]+m+Math.sin(q)*f,a[0]+c+Math.cos(q)*k,a[1]+m+Math.sin(q)*k,a[0]+c,a[1]+m,0>f?"center":y.half?"right":"left",q]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,k,b,m,c,p=a.options.shadow;p&&
!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));G(a.points,function(d){if(null!==d.y){b=d.graphic;c=d.shapeArgs;k=d.getTranslate();var r=d.shadowGroup;p&&!r&&(r=d.shadowGroup=e.g("shadow").add(a.shadowGroup));r&&r.attr(k);m=a.pointAttribs(d,d.selected&&"select");b?b.setRadialReference(a.center).attr(m).animate(H(c,k)):(d.graphic=b=e[d.shapeType](c).setRadialReference(a.center).attr(k).add(a.group),d.visible||b.attr({visibility:"hidden"}),b.attr(m).attr({"stroke-linejoin":"round"}).shadow(p,
r));b.addClass(d.getClassName())}})},searchPoint:k,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:k},{init:function(){x.prototype.init.apply(this,arguments);var a=this,e;a.name=t(a.name,"Slice");e=function(d){a.slice("select"===d.type)};D(a,"select",e);D(a,"unselect",e);return a},setVisible:function(a,e){var d=this,b=d.series,l=b.chart,c=b.options.ignoreHiddenPoint;
e=t(e,c);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,b.options.data[w(d,b.data)]=d.options,G(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&l.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),c&&(b.isDirty=!0),e&&l.redraw())},slice:function(a,l,k){var b=this.series;e(k,b.chart);t(l,!0);this.sliced=this.options.sliced=A(a)?a:!this.sliced;b.options.data[w(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var d=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:this.shapeArgs.r,start:d.start,end:d.end})}})})(K);(function(a){var D=a.addEvent,A=a.arrayMax,G=a.defined,H=a.each,w=a.extend,k=a.format,t=a.map,x=a.merge,p=a.noop,m=a.pick,e=a.relativeLength,d=a.Series,
l=a.seriesTypes,z=a.stableSort;a.distribute=function(a,d){function b(a,b){return a.target-b.target}var e,l=!0,r=a,h=[],k;k=0;for(e=a.length;e--;)k+=a[e].size;if(k>d){z(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(k=e=0;k<=d;)k+=a[e].size,e++;h=a.splice(e-1,a.length)}z(a,b);for(a=t(a,function(a){return{size:a.size,targets:[a.target]}});l;){for(e=a.length;e--;)l=a[e],k=(Math.min.apply(0,l.targets)+Math.max.apply(0,l.targets))/2,l.pos=Math.min(Math.max(0,k-l.size/2),d-l.size);e=a.length;for(l=
!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-1].pos+a[e-1].size>d&&(a[e-1].pos=d-a[e-1].size),a.splice(e,1),l=!0)}e=0;H(a,function(a){var b=0;H(a.targets,function(){r[e].pos=a.pos+b;b+=r[e].size;e++})});r.push.apply(r,h);z(r,b)};d.prototype.drawDataLabels=function(){var a=this,d=a.options,c=d.dataLabels,e=a.points,l,r,h=a.hasRendered||0,p,f,v=m(c.defer,!0),n=a.chart.renderer;if(c.enabled||a._hasPointLabels)a.dlProcessOptions&&
a.dlProcessOptions(c),f=a.plotGroup("dataLabelsGroup","data-labels",v&&!h?"hidden":"visible",c.zIndex||6),v&&(f.attr({opacity:+h}),h||D(a,"afterAnimate",function(){a.visible&&f.show(!0);f[d.animation?"animate":"attr"]({opacity:1},{duration:200})})),r=c,H(e,function(b){var h,e=b.dataLabel,q,g,v,u=b.connector,y=!e,t;l=b.dlOptions||b.options&&b.options.dataLabels;if(h=m(l&&l.enabled,r.enabled)&&null!==b.y)for(g in c=x(r,l),q=b.getLabelConfig(),p=c.format?k(c.format,q):c.formatter.call(q,c),t=c.style,
v=c.rotation,t.color=m(c.color,t.color,a.color,"#000000"),"contrast"===t.color&&(t.color=c.inside||0>c.distance||d.stacking?n.getContrast(b.color||a.color):"#000000"),d.cursor&&(t.cursor=d.cursor),q={fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.borderWidth,r:c.borderRadius||0,rotation:v,padding:c.padding,zIndex:1},q)void 0===q[g]&&delete q[g];!e||h&&G(p)?h&&G(p)&&(e?q.text=p:(e=b.dataLabel=n[v?"text":"label"](p,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),e.addClass("highcharts-data-label-color-"+
b.colorIndex+" "+(c.className||"")+(c.useHTML?"highcharts-tracker":""))),e.attr(q),e.css(t).shadow(c.shadow),e.added||e.add(f),a.alignDataLabel(b,e,c,null,y)):(b.dataLabel=e.destroy(),u&&(b.connector=u.destroy()))})};d.prototype.alignDataLabel=function(a,d,c,e,l){var b=this.chart,h=b.inverted,k=m(a.plotX,-9999),f=m(a.plotY,-9999),q=d.getBBox(),n,u=c.rotation,p=c.align,F=this.visible&&(a.series.forceDL||b.isInsidePlot(k,Math.round(f),h)||e&&b.isInsidePlot(k,h?e.x+1:e.y+e.height-1,h)),t="justify"===
m(c.overflow,"justify");F&&(n=c.style.fontSize,n=b.renderer.fontMetrics(n,d).b,e=w({x:h?b.plotWidth-f:k,y:Math.round(h?b.plotHeight-k:f),width:0,height:0},e),w(c,{width:q.width,height:q.height}),u?(t=!1,h=b.renderer.rotCorr(n,u),h={x:e.x+c.x+e.width/2+h.x,y:e.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},d[l?"attr":"animate"](h).attr({align:p}),k=(u+720)%360,k=180<k&&360>k,"left"===p?h.y-=k?q.height:0:"center"===p?(h.x-=q.width/2,h.y-=q.height/2):"right"===p&&(h.x-=q.width,h.y-=k?0:
q.height)):(d.align(c,null,e),h=d.alignAttr),t?this.justifyDataLabel(d,c,h,q,e,l):m(c.crop,!0)&&(F=b.isInsidePlot(h.x,h.y)&&b.isInsidePlot(h.x+q.width,h.y+q.height)),c.shape&&!u&&d.attr({anchorX:a.plotX,anchorY:a.plotY}));F||(d.attr({y:-9999}),d.placed=!1)};d.prototype.justifyDataLabel=function(a,d,c,e,l,r){var b=this.chart,k=d.align,f=d.verticalAlign,q,n,m=a.box?0:a.padding||0;q=c.x+m;0>q&&("right"===k?d.align="left":d.x=-q,n=!0);q=c.x+e.width-m;q>b.plotWidth&&("left"===k?d.align="right":d.x=b.plotWidth-
q,n=!0);q=c.y+m;0>q&&("bottom"===f?d.verticalAlign="top":d.y=-q,n=!0);q=c.y+e.height-m;q>b.plotHeight&&("top"===f?d.verticalAlign="bottom":d.y=b.plotHeight-q,n=!0);n&&(a.placed=!r,a.align(d,null,l))};l.pie&&(l.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,c,l=b.chart,q=b.options.dataLabels,r=m(q.connectorPadding,10),h=m(q.connectorWidth,1),k=l.plotWidth,f=l.plotHeight,v,n=q.distance,y=b.center,p=y[2]/2,F=y[1],z=0<n,g,w,x,D,M=[[],[]],G,B,N,R,O=[0,0,0,0];b.visible&&(q.enabled||b._hasPointLabels)&&
(H(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(b),H(e,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),H(M,function(d,h){var e,v,m=d.length,u,z,I;if(m)for(b.sortByAngle(d,h-.5),0<n&&(e=Math.max(0,F-p-n),v=Math.min(F+p+n,l.plotHeight),u=t(d,function(a){if(a.dataLabel)return I=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-
e+I/2,size:I,rank:a.y}}),a.distribute(u,v+I-e)),R=0;R<m;R++)c=d[R],x=c.labelPos,g=c.dataLabel,N=!1===c.visible?"hidden":"inherit",z=x[1],u?void 0===u[R].pos?N="hidden":(D=u[R].size,B=e+u[R].pos):B=z,G=q.justify?y[0]+(h?-1:1)*(p+n):b.getX(B<e+2||B>v-2?z:B,h),g._attr={visibility:N,align:x[6]},g._pos={x:G+q.x+({left:r,right:-r}[x[6]]||0),y:B+q.y-10},x.x=G,x.y=B,null===b.options.size&&(w=g.getBBox().width,z=null,G-w<r?(z=Math.round(w-G+r),O[3]=Math.max(z,O[3])):G+w>k-r&&(z=Math.round(G+w-k+r),O[1]=Math.max(z,
O[1])),0>B-D/2?O[0]=Math.max(Math.round(-B+D/2),O[0]):B+D/2>f&&(O[2]=Math.max(Math.round(B+D/2-f),O[2])),g.sideOverflow=z)}),0===A(O)||this.verifyDataLabelOverflow(O))&&(this.placeDataLabels(),z&&h&&H(this.points,function(a){var c;v=a.connector;if((g=a.dataLabel)&&g._pos&&a.visible){N=g._attr.visibility;if(c=!v)a.connector=v=l.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),v.attr({"stroke-width":h,stroke:q.connectorColor||a.color||
"#666666"});v[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});v.attr("visibility",N)}else v&&(a.connector=v.destroy())}))},l.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return m(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},l.pie.prototype.placeDataLabels=function(){H(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&
(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},l.pie.prototype.alignDataLabel=p,l.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,l=c.minSize||80,r,h;null!==d[0]?r=Math.max(b[2]-Math.max(a[1],a[3]),l):(r=Math.max(b[2]-a[1]-a[3],l),b[0]+=(a[3]-a[1])/2);null!==d[1]?r=Math.max(Math.min(r,b[2]-
Math.max(a[0],a[2])),l):(r=Math.max(Math.min(r,b[2]-a[0]-a[2]),l),b[1]+=(a[0]-a[2])/2);r<b[2]?(b[2]=r,b[3]=Math.min(e(c.innerSize||0,r),r),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):h=!0;return h});l.column&&(l.column.prototype.alignDataLabel=function(a,e,c,l,k){var b=this.chart.inverted,h=a.series,q=a.dlBox||a.shapeArgs,f=m(a.below,a.plotY>m(this.translatedThreshold,h.yAxis.len)),v=m(c.inside,!!this.options.stacking);q&&(l=x(q),0>l.y&&(l.height+=l.y,l.y=0),q=l.y+l.height-h.yAxis.len,
0<q&&(l.height-=q),b&&(l={x:h.yAxis.len-l.y-l.height,y:h.xAxis.len-l.x-l.width,width:l.height,height:l.width}),v||(b?(l.x+=f?0:l.width,l.width=0):(l.y+=f?l.height:0,l.height=0)));c.align=m(c.align,!b||v?"center":f?"right":"left");c.verticalAlign=m(c.verticalAlign,b||v?"middle":f?"top":"bottom");d.prototype.alignDataLabel.call(this,a,e,c,l,k)})})(K);(function(a){var D=a.Chart,A=a.each,G=a.pick,H=a.addEvent;D.prototype.callbacks.push(function(a){function k(){var k=[];A(a.series||[],function(a){var p=
a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(p.enabled||a._hasPointLabels)&&!p.allowOverlap&&a.visible&&A(m,function(e){A(a.points,function(a){a[e]&&(a[e].labelrank=G(a.labelrank,a.shapeArgs&&a.shapeArgs.height),k.push(a[e]))})})});a.hideOverlappingLabels(k)}k();H(a,"redraw",k)});D.prototype.hideOverlappingLabels=function(a){var k=a.length,t,x,p,m,e,d,l,z,b,u=function(a,b,d,e,h,l,f,k){return!(h>a+d||h+f<a||l>b+e||l+k<b)};for(x=0;x<k;x++)if(t=a[x])t.oldOpacity=t.opacity,t.newOpacity=
1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(x=0;x<k;x++)for(p=a[x],t=x+1;t<k;++t)if(m=a[t],p&&m&&p.placed&&m.placed&&0!==p.newOpacity&&0!==m.newOpacity&&(e=p.alignAttr,d=m.alignAttr,l=p.parentGroup,z=m.parentGroup,b=2*(p.box?0:p.padding),e=u(e.x+l.translateX,e.y+l.translateY,p.width-b,p.height-b,d.x+z.translateX,d.y+z.translateY,m.width-b,m.height-b)))(p.labelrank<m.labelrank?p:m).newOpacity=0;A(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):
b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var D=a.addEvent,A=a.Chart,G=a.createElement,H=a.css,w=a.defaultOptions,k=a.defaultPlotOptions,t=a.each,x=a.extend,p=a.fireEvent,m=a.hasTouch,e=a.inArray,d=a.isObject,l=a.Legend,z=a.merge,b=a.pick,u=a.Point,c=a.Series,C=a.seriesTypes,q=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);if(void 0!==c)c.onMouseOver(a)};
t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(m)a[d].on("touchstart",c);a.options.cursor&&a[d].css(H).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?
a.areaPath:a.graphPath),e=d.length,n=a.chart,l=n.pointer,k=n.renderer,u=n.options.tooltip.snap,p=a.tracker,g,z=function(){if(n.hoverSeries!==a)a.onMouseOver()},x="rgba(192,192,192,"+(q?.0001:.002)+")";if(e&&!c)for(g=e+1;g--;)"M"===d[g]&&d.splice(g+1,0,d[g+1]-u,d[g+2],"L"),(g&&"M"===d[g]||g===e)&&d.splice(g,0,"L",d[g-2]+u,d[g-1]);p?p.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:x,fill:c?x:"none","stroke-width":a.graph.strokeWidth()+
(c?0:2*u),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",z).on("mouseout",function(a){l.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(m)a.on("touchstart",z)}))}};C.column&&(C.column.prototype.drawTracker=a.drawTrackerPoint);C.pie&&(C.pie.prototype.drawTracker=a.drawTrackerPoint);C.scatter&&(C.scatter.prototype.drawTracker=a.drawTrackerPoint);x(l.prototype,{setItemEvents:function(a,b,c){var d=this,h=d.chart.renderer.boxWrapper,
e="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");h.addClass(e);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);h.removeClass(e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):p(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",
{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);D(a.checkbox,"click",function(b){p(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});w.legend.itemStyle.cursor="pointer";x(A.prototype,{showResetZoom:function(){var a=this,b=w.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,n="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},
d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,n)},zoomOut:function(){var a=this;p(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var c,e=this.pointer,f=!1,l;!a||a.resetSelection?t(this.axes,function(a){c=a.zoom()}):t(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(c=b.zoom(a.min,a.max),b.displayBtn&&(f=!0))});l=this.resetZoomButton;f&&!l?this.showResetZoom():
!f&&d(l)&&(this.resetZoomButton=l.destroy());c&&this.redraw(b(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,h;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",e=c[d],l=(b.pointRange||0)/2,g=b.getExtremes(),n=b.toValue(e-f,!0)+l,l=b.toValue(e+b.len-f,!0)-l,r=l<n,e=r?l:n,n=r?n:l,r=b.toValue(b.toPixels(g.min)-b.minPixelPadding),
l=b.toValue(b.toPixels(g.max)+b.minPixelPadding),r=Math.min(g.dataMin,r)-e,g=n-Math.max(g.dataMax,l);b.series.length&&0>r&&0>g&&(b.setExtremes(e,n,!1,!1,{trigger:"pan"}),h=!0);c[d]=f});h&&c.redraw(!1);H(c.container,{cursor:"move"})}});x(u.prototype,{select:function(a,c){var d=this,f=d.series,h=f.chart;a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;f.options.data[e(d,f.data)]=d.options;d.setState(a&&"select");c||t(h.getSelectedPoints(),
function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,f.options.data[e(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart.pointer;this.firePointEvent("mouseOver");b.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=z(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)D(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,c){var d=Math.floor(this.plotX),f=this.plotY,e=this.series,h=e.options.states[a]||{},l=k[e.type].marker&&e.options.marker,r=l&&!1===l.enabled,q=l&&l.states&&l.states[a]||{},m=!1===q.enabled,g=e.stateMarkerGraphic,u=this.marker||{},p=e.chart,t=e.halo,z,w=l&&e.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===h.enabled||a&&(m||r&&!1===q.enabled)||a&&u.states&&
u.states[a]&&!1===u.states[a].enabled)){w&&(z=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(e.pointAttribs(this,a)),z&&this.graphic.animate(z,b(p.options.chart.animation,q.animation,l.animation)),g&&g.hide();else{if(a&&q){l=u.symbol||e.symbol;g&&g.currentSymbol!==l&&(g=g.destroy());if(g)g[c?"animate":"attr"]({x:z.x,y:z.y});else l&&(e.stateMarkerGraphic=g=p.renderer.symbol(l,
z.x,z.y,z.width,z.height).add(e.markerGroup),g.currentSymbol=l);g&&g.attr(e.pointAttribs(this,a))}g&&(g[a&&p.isInsidePlot(d,f,p.inverted)?"show":"hide"](),g.element.point=this)}(d=h.halo)&&d.size?(t||(e.halo=t=p.renderer.path().add(w?e.markerGroup:e.group)),t[c?"animate":"attr"]({d:this.haloPath(d.size)}),t.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,e.colorIndex)}),t.point=this,t.attr(x({fill:this.color||e.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):t&&t.point&&
t.point.haloPath&&t.animate({d:t.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});x(c.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&p(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();
this&&a.events.mouseOut&&p(this,"mouseOut");!c||a.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var c=this,d=c.options,f=c.graph,e=d.states,l=d.lineWidth,d=0;a=a||"";if(c.state!==a&&(t([c.group,c.markerGroup,c.dataLabelsGroup],function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(l=e[a].lineWidth||l+(e[a].lineWidthPlus||0)),f&&!f.dashstyle))for(l={"stroke-width":l},
f.animate(l,b(c.chart.options.chart.animation,e[a]&&e[a].animation));c["zone-graph-"+d];)c["zone-graph-"+d].attr(l),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,h,l=d.options.chart.ignoreHiddenSeries,k=c.visible;h=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][h]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,
a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});l&&(d.isDirtyBox=!0);!1!==b&&d.redraw();p(c,h)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);p(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(K);(function(a){var D=a.Chart,A=a.each,G=a.inArray,H=
a.isArray,w=a.isObject,k=a.pick,t=a.splat;D.prototype.setResponsive=function(k){var p=this.options.responsive,m=[],e=this.currentResponsive;p&&p.rules&&A(p.rules,function(d){void 0===d._id&&(d._id=a.uniqueKey());this.matchResponsiveRule(d,m,k)},this);var d=a.merge.apply(0,a.map(m,function(d){return a.find(p.rules,function(a){return a._id===d}).chartOptions})),m=m.toString()||void 0;m!==(e&&e.ruleIds)&&(e&&this.update(e.undoOptions,k),m?(this.currentResponsive={ruleIds:m,mergedOptions:d,undoOptions:this.currentOptions(d)},
this.update(d,k)):this.currentResponsive=void 0)};D.prototype.matchResponsiveRule=function(a,p){var m=a.condition;(m.callback||function(){return this.chartWidth<=k(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=k(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=k(m.minWidth,0)&&this.chartHeight>=k(m.minHeight,0)}).call(this)&&p.push(a._id)};D.prototype.currentOptions=function(a){function k(a,d,l,m){var b,e;for(b in a)if(!m&&-1<G(b,["series","xAxis","yAxis"]))for(a[b]=t(a[b]),l[b]=[],e=0;e<a[b].length;e++)d[b][e]&&
(l[b][e]={},k(a[b][e],d[b][e],l[b][e],m+1));else w(a[b])?(l[b]=H(a[b])?[]:{},k(a[b],d[b]||{},l[b],m+1)):l[b]=d[b]||null}var m={};k(a,this.options,m,0);return m}})(K);(function(a){var D=a.addEvent,A=a.Axis,G=a.Chart,H=a.css,w=a.dateFormat,k=a.defined,t=a.each,x=a.extend,p=a.noop,m=a.Series,e=a.timeUnits;a=a.wrap;a(m.prototype,"init",function(a){var d;a.apply(this,Array.prototype.slice.call(arguments,1));(d=this.xAxis)&&d.options.ordinal&&D(this,"updatedData",function(){delete d.ordinalIndex})});a(A.prototype,
"getTimeTicks",function(a,l,m,b,u,c,p,q){var d=0,h,t,f={},v,n,y,z=[],F=-Number.MAX_VALUE,x=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||!c||3>c.length||void 0===m)return a.call(this,l,m,b,u);n=c.length;for(h=0;h<n;h++){y=h&&c[h-1]>b;c[h]<m&&(d=h);if(h===n-1||c[h+1]-c[h]>5*p||y){if(c[h]>F){for(t=a.call(this,l,c[d],c[h],u);t.length&&t[0]<=F;)t.shift();t.length&&(F=t[t.length-1]);z=z.concat(t)}d=h+1}if(y)break}a=t.info;if(q&&a.unitRange<=e.hour){h=z.length-1;for(d=1;d<
h;d++)w("%d",z[d])!==w("%d",z[d-1])&&(f[z[d]]="day",v=!0);v&&(f[z[0]]="day");a.higherRanks=f}z.info=a;if(q&&k(x)){q=a=z.length;h=[];var g;for(v=[];q--;)d=this.translate(z[q]),g&&(v[q]=g-d),h[q]=g=d;v.sort();v=v[Math.floor(v.length/2)];v<.6*x&&(v=null);q=z[a-1]>b?a-1:a;for(g=void 0;q--;)d=h[q],b=Math.abs(g-d),g&&b<.8*x&&(null===v||b<.8*v)?(f[z[q]]&&!f[z[q+1]]?(b=q+1,g=d):b=q,z.splice(b,1)):g=d}return z});x(A.prototype,{beforeSetTickPositions:function(){var a,e=[],k=!1,b,m=this.getExtremes(),c=m.min,
p=m.max,q,r=this.isXAxis&&!!this.options.breaks,m=this.options.ordinal,h=this.chart.options.chart.ignoreHiddenSeries;if(m||r){t(this.series,function(b,c){if(!(h&&!1===b.visible||!1===b.takeOrdinalPosition&&!r)&&(e=e.concat(b.processedXData),a=e.length,e.sort(function(a,b){return a-b}),a))for(c=a-1;c--;)e[c]===e[c+1]&&e.splice(c,1)});a=e.length;if(2<a){b=e[1]-e[0];for(q=a-1;q--&&!k;)e[q+1]-e[q]!==b&&(k=!0);!this.options.keepOrdinalPadding&&(e[0]-c>b||p-e[e.length-1]>b)&&(k=!0)}k?(this.ordinalPositions=
e,b=this.ordinal2lin(Math.max(c,e[0]),!0),q=Math.max(this.ordinal2lin(Math.min(p,e[e.length-1]),!0),1),this.ordinalSlope=p=(p-c)/(q-b),this.ordinalOffset=c-b*p):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=m&&k;this.groupIntervalFactor=null},val2lin:function(a,e){var d=this.ordinalPositions;if(d){var b=d.length,l,c;for(l=b;l--;)if(d[l]===a){c=l;break}for(l=b-1;l--;)if(a>d[l]||0===l){a=(a-d[l])/(d[l+1]-d[l]);c=l+a;break}e=e?c:this.ordinalSlope*(c||0)+this.ordinalOffset}else e=
a;return e},lin2val:function(a,e){var d=this.ordinalPositions;if(d){var b=this.ordinalSlope,l=this.ordinalOffset,c=d.length-1,k;if(e)0>a?a=d[0]:a>c?a=d[c]:(c=Math.floor(a),k=a-c);else for(;c--;)if(e=b*c+l,a>=e){b=b*(c+1)+l;k=(a-e)/(b-e);break}return void 0!==k&&void 0!==d[c]?d[c]+(k?k*(d[c+1]-d[c]):0):a}return a},getExtendedPositions:function(){var a=this.chart,e=this.series[0].currentDataGrouping,k=this.ordinalIndex,b=e?e.count+e.unitName:"raw",m=this.getExtremes(),c,w;k||(k=this.ordinalIndex={});
k[b]||(c={series:[],chart:a,getExtremes:function(){return{min:m.dataMin,max:m.dataMax}},options:{ordinal:!0},val2lin:A.prototype.val2lin,ordinal2lin:A.prototype.ordinal2lin},t(this.series,function(b){w={xAxis:c,xData:b.xData,chart:a,destroyGroupedData:p};w.options={dataGrouping:e?{enabled:!0,forced:!0,approximation:"open",units:[[e.unitName,[e.count]]]}:{enabled:!1}};b.processData.apply(w);c.series.push(w)}),this.beforeSetTickPositions.apply(c),k[b]=c.ordinalPositions);return k[b]},getGroupIntervalFactor:function(a,
e,k){var b;k=k.processedXData;var d=k.length,c=[];b=this.groupIntervalFactor;if(!b){for(b=0;b<d-1;b++)c[b]=k[b+1]-k[b];c.sort(function(a,b){return a-b});c=c[Math.floor(d/2)];a=Math.max(a,k[0]);e=Math.min(e,k[d-1]);this.groupIntervalFactor=b=d*c/(e-a)}return b},postProcessTickInterval:function(a){var d=this.ordinalSlope;return d?this.options.breaks?this.closestPointRange:a/(d/this.closestPointRange):a}});A.prototype.ordinal2lin=A.prototype.val2lin;a(G.prototype,"pan",function(a,e){var d=this.xAxis[0],
b=e.chartX,l=!1;if(d.options.ordinal&&d.series.length){var c=this.mouseDownX,k=d.getExtremes(),q=k.dataMax,r=k.min,h=k.max,m=this.hoverPoints,f=d.closestPointRange,c=(c-b)/(d.translationSlope*(d.ordinalSlope||f)),v={ordinalPositions:d.getExtendedPositions()},f=d.lin2val,n=d.val2lin,p;v.ordinalPositions?1<Math.abs(c)&&(m&&t(m,function(a){a.setState()}),0>c?(m=v,p=d.ordinalPositions?d:v):(m=d.ordinalPositions?d:v,p=v),v=p.ordinalPositions,q>v[v.length-1]&&v.push(q),this.fixedRange=h-r,c=d.toFixedRange(null,
null,f.apply(m,[n.apply(m,[r,!0])+c,!0]),f.apply(p,[n.apply(p,[h,!0])+c,!0])),c.min>=Math.min(k.dataMin,r)&&c.max<=Math.max(q,h)&&d.setExtremes(c.min,c.max,!0,!1,{trigger:"pan"}),this.mouseDownX=b,H(this.container,{cursor:"move"})):l=!0}else l=!0;l&&a.apply(this,Array.prototype.slice.call(arguments,1))});m.prototype.gappedPath=function(){var a=this.options.gapSize,e=this.points.slice(),k=e.length-1;if(a&&0<k)for(;k--;)e[k+1].x-e[k].x>this.closestPointRange*a&&e.splice(k+1,0,{isNull:!0});return this.getGraphPath(e)}})(K);
(function(a){function D(){return Array.prototype.slice.call(arguments,1)}function A(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,G(this.pointArrayMap,["y"]))}var G=a.pick,H=a.wrap,w=a.each,k=a.extend,t=a.isArray,x=a.fireEvent,p=a.Axis,m=a.Series;k(p.prototype,{isInBreak:function(a,d){var e=a.repeat||Infinity,k=a.from,b=a.to-a.from;d=d>=k?(d-k)%e:e-(k-d)%e;return a.inclusive?d<=b:d<b&&0!==d},isInAnyBreak:function(a,d){var e=this.options.breaks,k=e&&e.length,b,m,c;if(k){for(;k--;)this.isInBreak(e[k],
a)&&(b=!0,m||(m=G(e[k].showPoints,this.isXAxis?!1:!0)));c=b&&d?b&&!m:b}return c}});H(p.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var d=this.tickPositions,e=this.tickPositions.info,k=[],b;for(b=0;b<d.length;b++)this.isInAnyBreak(d[b])||k.push(d[b]);this.tickPositions=k;this.tickPositions.info=e}});H(p.prototype,"init",function(a,d,l){var e=this;l.breaks&&l.breaks.length&&(l.ordinal=!1);a.call(this,d,l);a=this.options.breaks;
e.isBroken=t(a)&&!!a.length;e.isBroken&&(e.val2lin=function(a){var b=a,c,d;for(d=0;d<e.breakArray.length;d++)if(c=e.breakArray[d],c.to<=a)b-=c.len;else if(c.from>=a)break;else if(e.isInBreak(c,a)){b-=a-c.from;break}return b},e.lin2val=function(a){var b,c;for(c=0;c<e.breakArray.length&&!(b=e.breakArray[c],b.from>=a);c++)b.to<a?a+=b.len:e.isInBreak(b,a)&&(a+=b.len);return a},e.setExtremes=function(a,d,c,e,l){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(d);)d-=this.closestPointRange;
p.prototype.setExtremes.call(this,a,d,c,e,l)},e.setAxisTranslation=function(a){p.prototype.setAxisTranslation.call(this,a);var b=e.options.breaks;a=[];var c=[],d=0,l,k,h=e.userMin||e.min,m=e.userMax||e.max,f=G(e.pointRangePadding,0),v,n;for(n in b)k=b[n],l=k.repeat||Infinity,e.isInBreak(k,h)&&(h+=k.to%l-h%l),e.isInBreak(k,m)&&(m-=m%l-k.from%l);for(n in b){k=b[n];v=k.from;for(l=k.repeat||Infinity;v-l>h;)v-=l;for(;v<h;)v+=l;for(;v<m;v+=l)a.push({value:v,move:"in"}),a.push({value:v+(k.to-k.from),move:"out",
size:k.breakSize})}a.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});b=0;v=h;for(n in a)k=a[n],b+="in"===k.move?1:-1,1===b&&"in"===k.move&&(v=k.value),0===b&&(c.push({from:v,to:k.value,len:k.value-v-(k.size||0)}),d+=k.value-v-(k.size||0));e.breakArray=c;e.unitLength=m-h-d+f;x(e,"afterBreaks");e.transA=e.options.staticScale?e.options.staticScale:(m-e.min+f)/e.unitLength*e.transA;f&&(e.minPixelPadding=e.transA*e.minPointOffset);e.min=h;e.max=m})});
H(m.prototype,"generatePoints",function(a){a.apply(this,D(arguments));var d=this.xAxis,e=this.yAxis,k=this.points,b,m=k.length,c=this.options.connectNulls,p;if(d&&e&&(d.options.breaks||e.options.breaks))for(;m--;)b=k[m],p=null===b.y&&!1===c,p||!d.isInAnyBreak(b.x,!0)&&!e.isInAnyBreak(b.y,!0)||(k.splice(m,1),this.data[m]&&this.data[m].destroyElements())});a.Series.prototype.drawBreaks=function(a,d){var e=this,k=e.points,b,m,c,p;a&&w(d,function(d){b=a.breakArray||[];m=a.isXAxis?a.min:G(e.options.threshold,
a.min);w(k,function(e){p=G(e["stack"+d.toUpperCase()],e[d]);w(b,function(b){c=!1;if(m<b.from&&p>b.to||m>b.from&&p<b.from)c="pointBreak";else if(m<b.from&&p>b.from&&p<b.to||m>b.from&&p>b.to&&p<b.from)c="pointInBreak";c&&x(a,c,{point:e,brk:b})})})})};H(a.seriesTypes.column.prototype,"drawPoints",A);H(a.Series.prototype,"drawPoints",A)})(K);(function(a){var D=a.arrayMax,A=a.arrayMin,G=a.Axis,H=a.defaultPlotOptions,w=a.defined,k=a.each,t=a.extend,x=a.format,p=a.isNumber,m=a.merge,e=a.pick,d=a.Point,l=
a.Tooltip,z=a.wrap,b=a.Series.prototype,u=b.processData,c=b.generatePoints,C=b.destroy,q={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e",
"-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},r={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},h=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",
[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],E={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=a.length;a=E.sum(a);p(a)&&b&&(a/=b);return a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?D(a):a.hasNulls?null:void 0},low:function(a){return a.length?A(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-
1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,d){a=E.open(a);b=E.high(b);c=E.low(c);d=E.close(d);if(p(a)||p(b)||p(c)||p(d))return[a,b,c,d]},range:function(a,b){a=E.low(a);b=E.high(b);if(p(a)||p(b))return[a,b]}};b.groupData=function(a,b,c,d){var f=this.data,e=this.options.data,h=[],g=[],k=[],l=a.length,n,m,q=!!b,r=[[],[],[],[]];d="function"===typeof d?d:E[d];var v=this.pointArrayMap,y=v&&v.length,t,u=0;for(t=m=0;t<=l&&!(a[t]>=c[0]);t++);for(t;t<=l;t++){for(;(void 0!==c[u+1]&&a[t]>=c[u+1]||t===l)&&
(n=c[u],this.dataGroupInfo={start:m,length:r[0].length},m=d.apply(this,r),void 0!==m&&(h.push(n),g.push(m),k.push(this.dataGroupInfo)),m=t,r[0]=[],r[1]=[],r[2]=[],r[3]=[],u+=1,t!==l););if(t===l)break;if(v){n=this.cropStart+t;n=f&&f[n]||this.pointClass.prototype.applyOptions.apply({series:this},[e[n]]);var w,x;for(w=0;w<y;w++)x=n[v[w]],p(x)?r[w].push(x):null===x&&(r[w].hasNulls=!0)}else n=q?b[t]:null,p(n)?r[0].push(n):null===n&&(r[0].hasNulls=!0)}return[h,g,k]};b.processData=function(){var a=this.chart,
c=this.options.dataGrouping,d=!1!==this.allowDG&&c&&e(c.enabled,a.options.isStock),k=this.visible||!a.options.chart.ignoreHiddenSeries,l;this.forceCrop=d;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==u.apply(this,arguments)&&d){this.destroyGroupedData();var m=this.processedXData,q=this.processedYData,g=a.plotSizeX,a=this.xAxis,r=a.options.ordinal,p=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(p){this.isDirty=l=!0;var t=a.getExtremes(),d=t.min,t=t.max,r=r&&a.getGroupIntervalFactor(d,
t,this)||1,g=p*(t-d)/g*r,p=a.getTimeTicks(a.normalizeTimeTickInterval(g,c.units||h),Math.min(d,m[0]),Math.max(t,m[m.length-1]),a.options.startOfWeek,m,this.closestPointRange),m=b.groupData.apply(this,[m,q,p,c.approximation]),q=m[0],r=m[1];if(c.smoothed){c=q.length-1;for(q[c]=Math.min(q[c],t);c--&&0<c;)q[c]+=g/2;q[0]=Math.max(q[0],d)}this.currentDataGrouping=p.info;this.closestPointRange=p.info.totalRange;this.groupMap=m[2];w(q[0])&&q[0]<a.dataMin&&k&&(a.min===a.dataMin&&(a.min=q[0]),a.dataMin=q[0]);
this.processedXData=q;this.processedYData=r}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=l}};b.destroyGroupedData=function(){var a=this.groupedData;k(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};b.generatePoints=function(){c.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};z(d.prototype,"update",function(b){this.dataGroup?a.error(24):b.apply(this,[].slice.call(arguments,1))});z(l.prototype,"tooltipFooterHeaderFormatter",
function(b,c,d){var f=c.series,e=f.tooltipOptions,h=f.options.dataGrouping,k=e.xDateFormat,g,l=f.xAxis,n=a.dateFormat;return l&&"datetime"===l.options.type&&h&&p(c.key)?(b=f.currentDataGrouping,h=h.dateTimeLabelFormats,b?(l=h[b.unitName],1===b.count?k=l[0]:(k=l[1],g=l[2])):!k&&h&&(k=this.getXDateFormat(c,e,l)),k=n(k,c.key),g&&(k+=n(g,c.key+b.totalRange-1)),x(e[(d?"footer":"header")+"Format"],{point:t(c.point,{key:k}),series:f})):b.call(this,c,d)});b.destroy=function(){for(var a=this.groupedData||
[],b=a.length;b--;)a[b]&&a[b].destroy();C.apply(this)};z(b,"setOptions",function(a,b){a=a.call(this,b);var c=this.type,d=this.chart.options.plotOptions,e=H[c].dataGrouping;r[c]&&(e||(e=m(q,r[c])),a.dataGrouping=m(e,d.series&&d.series.dataGrouping,d[c].dataGrouping,b.dataGrouping));this.chart.options.isStock&&(this.requireSorting=!0);return a});z(G.prototype,"setScale",function(a){a.call(this);k(this.series,function(a){a.hasProcessed=!1})});G.prototype.getGroupPixelWidth=function(){var a=this.series,
b=a.length,c,d=0,e=!1,h;for(c=b;c--;)(h=a[c].options.dataGrouping)&&(d=Math.max(d,h.groupPixelWidth));for(c=b;c--;)(h=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&h.forced)&&(e=!0);return e?d:0};G.prototype.setDataGrouping=function(a,b){var c;b=e(b,!0);a||(a={forced:!1,units:null});if(this instanceof G)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else k(this.chart.options.series,
function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()}})(K);(function(a){var D=a.each,A=a.Point,G=a.seriesType,H=a.seriesTypes;G("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},threshold:null,states:{hover:{lineWidth:3}}},{pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,
a.high,a.low,a.close]},pointValKey:"high",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,k){k=H.column.prototype.pointAttribs.call(this,a,k);var t=this.options;delete k.fill;!a.options.color&&t.upColor&&a.open<a.close&&(k.stroke=t.upColor);return k},translate:function(){var a=this,k=a.yAxis,t=!!a.modifyValue,x=["plotOpen","yBottom","plotClose"];H.column.prototype.translate.apply(a);D(a.points,function(p){D([p.open,p.low,p.close],function(m,e){null!==m&&(t&&
(m=a.modifyValue(m)),p[x[e]]=k.toPixels(m,!0))})})},drawPoints:function(){var a=this,k=a.chart;D(a.points,function(t){var x,p,m,e,d=t.graphic,l,w=!d;void 0!==t.plotY&&(d||(t.graphic=d=k.renderer.path().add(a.group)),d.attr(a.pointAttribs(t,t.selected&&"select")),p=d.strokeWidth()%2/2,l=Math.round(t.plotX)-p,m=Math.round(t.shapeArgs.width/2),e=["M",l,Math.round(t.yBottom),"L",l,Math.round(t.plotY)],null!==t.open&&(x=Math.round(t.plotOpen)+p,e.push("M",l,x,"L",l-m,x)),null!==t.close&&(x=Math.round(t.plotClose)+
p,e.push("M",l,x,"L",l+m,x)),d[w?"attr":"animate"]({d:e}).addClass(t.getClassName(),!0))})},animate:null},{getClassName:function(){return A.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(K);(function(a){var D=a.defaultPlotOptions,A=a.each,G=a.merge,H=a.seriesType,w=a.seriesTypes;H("candlestick","ohlc",G(D.column,{states:{hover:{lineWidth:2}},tooltip:D.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff"}),{pointAttribs:function(a,
t){var k=w.column.prototype.pointAttribs.call(this,a,t),p=this.options,m=a.open<a.close,e=p.lineColor||this.color;k["stroke-width"]=p.lineWidth;k.fill=a.options.color||(m?p.upColor||this.color:this.color);k.stroke=a.lineColor||(m?p.upLineColor||e:e);t&&(a=p.states[t],k.fill=a.color||k.fill,k.stroke=a.lineColor||k.stroke,k["stroke-width"]=a.lineWidth||k["stroke-width"]);return k},drawPoints:function(){var a=this,t=a.chart;A(a.points,function(k){var p=k.graphic,m,e,d,l,w,b,u,c=!p;void 0!==k.plotY&&
(p||(k.graphic=p=t.renderer.path().add(a.group)),p.attr(a.pointAttribs(k,k.selected&&"select")).shadow(a.options.shadow),w=p.strokeWidth()%2/2,b=Math.round(k.plotX)-w,m=k.plotOpen,e=k.plotClose,d=Math.min(m,e),m=Math.max(m,e),u=Math.round(k.shapeArgs.width/2),e=Math.round(d)!==Math.round(k.plotY),l=m!==k.yBottom,d=Math.round(d)+w,m=Math.round(m)+w,w=[],w.push("M",b-u,m,"L",b-u,d,"L",b+u,d,"L",b+u,m,"Z","M",b,d,"L",b,e?Math.round(k.plotY):d,"M",b,m,"L",b,l?Math.round(k.yBottom):m),p[c?"attr":"animate"]({d:w}).addClass(k.getClassName(),
!0))})}})})(K);(function(a){var D=a.addEvent,A=a.each,G=a.merge,H=a.noop,w=a.Renderer,k=a.seriesType,t=a.seriesTypes,x=a.TrackerMixin,p=a.VMLRenderer,m=a.SVGRenderer.prototype.symbols;k("flags","column",{pointRange:0,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,
takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,d){var e=this.options,k=a&&a.color||this.color,b=e.lineColor,m=a&&a.lineWidth;a=a&&a.fillColor||e.fillColor;d&&(a=e.states[d].fillColor,b=e.states[d].lineColor,m=e.states[d].lineWidth);return{fill:a||k,stroke:b||k,"stroke-width":m||e.lineWidth||0}},translate:function(){t.column.prototype.translate.apply(this);var a=this.options,d=this.chart,k=this.points,m=k.length-1,b,p,c=a.onSeries;
b=c&&d.get(c);var a=a.onKey||"y",c=b&&b.options.step,w=b&&b.points,q=w&&w.length,r=this.xAxis,h=r.getExtremes(),x=0,f,v,n;if(b&&b.visible&&q)for(x=(b.pointXOffset||0)+(b.barW||0)/2,b=b.currentDataGrouping,v=w[q-1].x+(b?b.totalRange:0),k.sort(function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);q--&&k[m]&&!(b=k[m],f=w[q],f.x<=b.x&&void 0!==f[a]&&(b.x<=v&&(b.plotY=f[a],f.x<b.x&&!c&&(n=w[q+1])&&void 0!==n[a]&&(b.plotY+=(b.x-f.x)/(n.x-f.x)*(n[a]-f[a]))),m--,q++,0>m)););A(k,function(a,
b){var c;void 0===a.plotY&&(a.x>=h.min&&a.x<=h.max?a.plotY=d.chartHeight-r.bottom-(r.opposite?r.height:0)+r.offset-d.plotTop:a.shapeArgs={});a.plotX+=x;(p=k[b-1])&&p.plotX===a.plotX&&(void 0===p.stackIndex&&(p.stackIndex=0),c=p.stackIndex+1);a.stackIndex=c})},drawPoints:function(){var a=this.points,d=this.chart,k=d.renderer,m,b,p=this.options,c=p.y,t,q,r,h,w,f,v,n=this.yAxis;for(q=a.length;q--;)r=a[q],v=r.plotX>this.xAxis.len,m=r.plotX,h=r.stackIndex,t=r.options.shape||p.shape,b=r.plotY,void 0!==
b&&(b=r.plotY+c-(void 0!==h&&h*p.stackDistance)),w=h?void 0:r.plotX,f=h?void 0:r.plotY,h=r.graphic,void 0!==b&&0<=m&&!v?(h||(h=r.graphic=k.label("",null,null,t,null,null,p.useHTML).attr(this.pointAttribs(r)).css(G(p.style,r.style)).attr({align:"flag"===t?"left":"center",width:p.width,height:p.height,"text-align":p.textAlign}).addClass("highcharts-point").add(this.markerGroup),h.shadow(p.shadow)),0<m&&(m-=h.strokeWidth()%2),h.attr({text:r.options.title||p.title||"A",x:m,y:b,anchorX:w,anchorY:f}),r.tooltipPos=
d.inverted?[n.len+n.pos-d.plotLeft-b,this.xAxis.len-m]:[m,b+n.pos-d.plotTop]):h&&(r.graphic=h.destroy())},drawTracker:function(){var a=this.points;x.drawTrackerPoint.apply(this);A(a,function(d){var e=d.graphic;e&&D(e.element,"mouseover",function(){0<d.stackIndex&&!d.raised&&(d._y=e.y,e.attr({y:d._y-8}),d.raised=!0);A(a,function(a){a!==d&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:H,buildKDTree:H,setClip:H});m.flag=function(a,d,k,m,b){return["M",b&&b.anchorX||a,b&&b.anchorY||
d,"L",a,d+m,a,d,a+k,d,a+k,d+m,a,d+m,"Z"]};A(["circle","square"],function(a){m[a+"pin"]=function(d,e,k,b,p){var c=p&&p.anchorX;p=p&&p.anchorY;"circle"===a&&b>k&&(d-=Math.round((b-k)/2),k=b);d=m[a](d,e,k,b);c&&p&&d.push("M",c,e>p?e:e+b,"L",c,p);return d}});w===p&&A(["flag","circlepin","squarepin"],function(a){p.prototype.symbols[a]=m[a]})})(K);(function(a){function D(a,b,c){this.init(a,b,c)}var A=a.addEvent,G=a.Axis,H=a.correctFloat,w=a.defaultOptions,k=a.defined,t=a.destroyObjectProperties,x=a.doc,
p=a.each,m=a.fireEvent,e=a.hasTouch,d=a.isTouchDevice,l=a.merge,z=a.pick,b=a.removeEvent,u=a.wrap,c,C={height:d?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!d,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};w.scrollbar=
l(!0,C,w.scrollbar);a.swapXY=c=function(a,b){var c=a.length,d;if(b)for(b=0;b<c;b+=3)d=a[b+1],a[b+1]=a[b+2],a[b+2]=d;return a};D.prototype={init:function(a,b,c){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=l(C,b);this.chart=c;this.size=z(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,b=this.options,d=this.size,e;this.group=e=a.g("scrollbar").attr({zIndex:b.zIndex,translateY:-99999}).add();
this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,r:b.trackBorderRadius||0,height:d,width:d}).add(e);this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(e);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:d,width:d,r:b.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=
a.path(c(["M",-3,d/4,"L",-3,2*d/3,"M",0,d/4,"L",0,2*d/3,"M",3,d/4,"L",3,2*d/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:b.barBackgroundColor,stroke:b.barBorderColor,"stroke-width":b.barBorderWidth});this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);
this.drawScrollbarButton(1)},position:function(a,b,c,d){var e=this.options.vertical,h=0,k=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=c;this.xOffset=this.height=d;this.yOffset=h;e?(this.width=this.yOffset=c=h=this.size,this.xOffset=b=0,this.barWidth=d-2*c,this.x=a+=this.options.margin):(this.height=this.xOffset=d=b=this.size,this.barWidth=c-2*d,this.y+=this.options.margin);this.group[k]({translateX:a,translateY:this.y});this.track[k]({width:c,height:d});this.scrollbarButtons[1][k]({translateX:e?
0:c-b,translateY:e?d-h:0})},drawScrollbarButton:function(a){var b=this.renderer,d=this.scrollbarButtons,e=this.options,f=this.size,k;k=b.g().add(this.group);d.push(k);k=b.rect().addClass("highcharts-scrollbar-button").add(k);k.attr({stroke:e.buttonBorderColor,"stroke-width":e.buttonBorderWidth,fill:e.buttonBackgroundColor});k.attr(k.crisp({x:-.5,y:-.5,width:f+1,height:f+1,r:e.buttonBorderRadius},k.strokeWidth()));k=b.path(c(["M",f/2+(a?-1:1),f/2-3,"L",f/2+(a?-1:1),f/2+3,"L",f/2+(a?2:-2),f/2],e.vertical)).addClass("highcharts-scrollbar-arrow").add(d[a]);
k.attr({fill:e.buttonArrowColor})},setRange:function(a,b){var c=this.options,d=c.vertical,e=c.minWidth,l=this.barWidth,n,m,q=this.rendered&&!this.hasDragged?"animate":"attr";k(l)&&(a=Math.max(a,0),n=l*a,this.calculatedWidth=m=H(l*Math.min(b,1)-n),m<e&&(n=(l-e+m)*a,m=e),e=Math.floor(n+this.xOffset+this.yOffset),l=m/2-.5,this.from=a,this.to=b,d?(this.scrollbarGroup[q]({translateY:e}),this.scrollbar[q]({height:m}),this.scrollbarRifles[q]({translateY:l}),this.scrollbarTop=e,this.scrollbarLeft=0):(this.scrollbarGroup[q]({translateX:e}),
this.scrollbar[q]({width:m}),this.scrollbarRifles[q]({translateX:l}),this.scrollbarLeft=e,this.scrollbarTop=0),12>=m?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===c.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var c=a.chart.pointer.normalize(b),d=a.options.vertical?"chartY":"chartX",e=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][d]||(c=a.cursorToScrollbarPosition(c)[d],
d=a[d],d=c-d,a.hasDragged=!0,a.updatePosition(e[0]+d,e[1]+d),a.hasDragged&&m(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&m(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;a.initPositions=[a.from,a.to];a.grabbedCenter=
!0};a.buttonToMinClick=function(b){var c=H(a.to-a.from)*a.options.step;a.updatePosition(H(a.from-c),H(a.to-c));m(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var c=(a.to-a.from)*a.options.step;a.updatePosition(a.from+c,a.to+c);m(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var c=a.chart.pointer.normalize(b),d=a.to-a.from,e=a.y+a.scrollbarTop,k=a.x+a.scrollbarLeft;a.options.vertical&&c.chartY>e||!a.options.vertical&&
c.chartX>k?a.updatePosition(a.from+d,a.to+d):a.updatePosition(a.from-d,a.to-d);m(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=H(1-H(b-a)),b=1);0>a&&(b=H(b-a),a=0);this.from=a;this.to=b},update:function(a){this.destroy();
this.init(this.chart.renderer,l(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,c=this.scrollbarGroup.element,d=this.mouseDownHandler,f=this.mouseMoveHandler,k=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[c,"mousedown",d],[x,"mousemove",f],[x,"mouseup",k]];e&&a.push([c,"touchstart",d],[x,"touchmove",f],[x,"touchend",
k]);p(a,function(a){A.apply(null,a)});this._events=a},removeEvents:function(){p(this._events,function(a){b.apply(null,a)});this._events=void 0},destroy:function(){var a=this.chart.scroller;this.removeEvents();p(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,t(a.scrollbarButtons))}};u(G.prototype,"init",function(a){var b=this;a.apply(b,[].slice.call(arguments,1));b.options.scrollbar&&
b.options.scrollbar.enabled&&(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new D(b.chart.renderer,b.options.scrollbar,b.chart),A(b.scrollbar,"changed",function(a){var c=Math.min(z(b.options.min,b.min),b.min,b.dataMin),d=Math.max(z(b.options.max,b.max),b.max,b.dataMax)-c,e;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(e=c+d*this.to,c+=d*this.from):(e=c+d*(1-this.from),c+=d*(1-this.to));b.setExtremes(c,e,!0,!1,a)}))});u(G.prototype,"render",function(a){var b=
Math.min(z(this.options.min,this.min),this.min,this.dataMin),c=Math.max(z(this.options.max,this.max),this.max,this.dataMax),d=this.scrollbar,e;a.apply(this,[].slice.call(arguments,1));d&&(this.horiz?d.position(this.left,this.top+this.height+this.offset+2+(this.opposite?0:this.axisTitleMargin),this.width,this.height):d.position(this.left+this.width+2+this.offset+(this.opposite?this.axisTitleMargin:0),this.top,this.width,this.height),isNaN(b)||isNaN(c)||!k(this.min)||!k(this.max)?d.setRange(0,0):(e=
(this.min-b)/(c-b),b=(this.max-b)/(c-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?d.setRange(e,b):d.setRange(1-b,1-e)))});u(G.prototype,"getOffset",function(a){var b=this.horiz?2:1,c=this.scrollbar;a.apply(this,[].slice.call(arguments,1));c&&(this.chart.axisOffset[b]+=c.size+c.options.margin)});u(G.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,[].slice.call(arguments,1))});a.Scrollbar=D})(K);(function(a){function D(a){this.init(a)}
var A=a.addEvent,G=a.Axis,H=a.Chart,w=a.color,k=a.defaultOptions,t=a.defined,x=a.destroyObjectProperties,p=a.doc,m=a.each,e=a.erase,d=a.error,l=a.extend,z=a.grep,b=a.hasTouch,u=a.isNumber,c=a.isObject,C=a.merge,q=a.pick,r=a.removeEvent,h=a.Scrollbar,E=a.Series,f=a.seriesTypes,v=a.wrap,n=a.swapXY,y=[].concat(a.defaultDataGroupingUnits),L=function(a){var b=z(arguments,u);if(b.length)return Math[a].apply(0,b)};y[4]=["day",[1,2,3,4]];y[5]=["week",[1,2,3]];f=void 0===f.areaspline?"line":"areaspline";l(k,
{navigator:{height:40,margin:25,maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:w("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:f,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:y},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,
threshold:null},xAxis:{className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});D.prototype={drawHandle:function(a,b,c,d){this.handles[b][d](c?{translateX:Math.round(this.left+
this.height/2-8),translateY:Math.round(this.top+parseInt(a,10)+.5)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-8)})},getHandlePath:function(a){return n(["M",-4.5,.5,"L",3.5,.5,"L",3.5,15.5,"L",-4.5,15.5,"L",-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12],a)},drawOutline:function(a,b,c,d){var g=this.navigatorOptions.maskInside,e=this.outline.strokeWidth(),f=e/2,e=e%2/2,h=this.outlineHeight,k=this.scrollbarHeight,l=this.size,n=this.left-k,m=this.top;
c?(n-=f,c=m+b+e,b=m+a+e,a=["M",n+h,m-k-e,"L",n+h,c,"L",n,c,"L",n,b,"L",n+h,b,"L",n+h,m+l+k].concat(g?["M",n+h,c-f,"L",n+h,b+f]:[])):(a+=n+k-e,b+=n+k-e,m+=f,a=["M",n,m,"L",a,m,"L",a,m+h,"L",b,m+h,"L",b,m,"L",n+l+2*k,m].concat(g?["M",a-f,m,"L",b+f,m]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var g=this.left,e=this.top,f=this.height,h,k,l,n;c?(l=[g,g,g],n=[e,e+a,e+b],k=[f,f,f],h=[a,b-a,this.size-b]):(l=[g,g+a,g+b],n=[e,e,e],k=[a,b-a,this.size-b],h=[f,f,f]);m(this.shades,function(a,b){a[d]({x:l[b],
y:n[b],width:k[b],height:h[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=d.renderer,h;a.navigatorGroup=h=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var k={cursor:e?"ns-resize":"ew-resize"};m([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"transparent"}).css(1===d&&k).add(h)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,
stroke:b.outlineColor}).add(h);m([0,1],function(c){a.handles[c]=f.path(a.getHandlePath(e)).attr({zIndex:7-c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(h);var d=b.handles;a.handles[c].attr({fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":1}).css(k)})},update:function(a){this.destroy();C(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var g=this.chart,e,f,h=this.scrollbarHeight,k,l=this.xAxis;
e=this.navigatorEnabled;var n,m=this.rendered;f=g.inverted;var p=g.xAxis[0].minRange;if(!this.hasDragged||t(c)){if(!u(a)||!u(b))if(m)c=0,d=l.width;else return;this.left=q(l.left,g.plotLeft+h+(f?g.plotWidth:0));this.size=n=k=q(l.len,(f?g.plotHeight:g.plotWidth)-2*h);g=f?h:k+2*h;c=q(c,l.toPixels(a,!0));d=q(d,l.toPixels(b,!0));u(c)&&Infinity!==Math.abs(c)||(c=0,d=g);a=l.toValue(c,!0);b=l.toValue(d,!0);if(Math.abs(b-a)<p)if(this.grabbedLeft)c=l.toPixels(b-p,!0);else if(this.grabbedRight)d=l.toPixels(a+
p,!0);else return;this.zoomedMax=Math.min(Math.max(c,d,0),n);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(c,d),0),n);this.range=this.zoomedMax-this.zoomedMin;n=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);e&&(this.navigatorGroup.attr({visibility:"visible"}),m=m&&!this.hasDragged?"animate":"attr",this.drawMasks(c,n,f,m),this.drawOutline(c,n,f,m),this.drawHandle(c,0,f,m),this.drawHandle(n,1,f,m));this.scrollbar&&(f?(f=this.top-h,e=this.left-h+(e?
0:this.height),h=k+2*h):(f=this.top+(e?this.height:-h),e=this.left-h),this.scrollbar.position(e,f,g,h),this.scrollbar.setRange(c/k,n/k));this.rendered=!0}},addMouseEvents:function(){var a=this,c=a.chart,d=c.container,e=[],f,h,k=b?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"];a.mouseMoveHandler=f=function(b){a.onMouseMove(b)};a.mouseUpHandler=h=function(b){a.onMouseUp(b)};e=a.getPartsEvents(k[0]);e.push(A(d,k[1],f),A(p,k[2],h));a.eventsToUnbind=e;a.series&&a.series[0]&&
e.push(A(a.series[0].xAxis,"foundExtremes",function(){c.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];m(["shades","handles"],function(d){m(b[d],function(e,g){c.push(A(e.element,a,function(a){b[d+"Mousedown"](a,g)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,h=this.size,k=this.range,l=a.chartX,n;c.inverted&&(l=a.chartY,f=this.top);1===b?(this.grabbedCenter=l,this.fixedWidth=
k,this.dragOffset=l-e):(a=l-f-k/2,0===b?a=Math.max(0,a):2===b&&a+k>=h&&(a=h-k,n=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=k,b=d.toFixedRange(a,a+k,null,n),c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=a.inverted&&!c.reversed||!a.inverted&&c.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:
c.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},onMouseMove:function(a){var b=this,c=b.chart,d=b.left,e=b.navigatorSize,f=b.range,h=b.dragOffset,k=c.inverted;a.touches&&0===a.touches[0].pageX||(a=c.pointer.normalize(a),c=a.chartX,k&&(d=b.top,c=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,c-d,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,c-d)):b.grabbedCenter&&(b.hasDragged=!0,c<h?c=h:c>
e+h-f&&(c=e+h-f),b.render(0,0,c-h,c-h+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,setTimeout(function(){b.onMouseUp(a)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,e,f,h=a.DOMEvent||a;(!this.hasDragged||d&&d.hasDragged)&&"scrollbar"!==a.trigger||(this.zoomedMin===this.otherHandlePos?e=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(f=this.fixedExtreme),this.zoomedMax===this.size&&(f=this.getUnionExtremes().dataMax),c=c.toFixedRange(this.zoomedMin,
this.zoomedMax,e,f),t(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:h}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(m(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},
removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==this.navigatorOptions.adaptToUpdatedData&&(m(a,function(a){r(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&r(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,f=e.enabled,b=d?c.height:0,k=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=k;this.scrollbarEnabled=
f;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=e;this.outlineHeight=b+k;this.opposite=q(c.opposite,!d&&a.inverted);var l=this,e=l.baseSeries,f=a.xAxis.length,n=a.yAxis.length,m=e&&e[0]&&e[0].xAxis||a.xAxis[0];a.extraMargin={type:l.opposite?"plotTop":"marginBottom",value:(d||!a.inverted?l.outlineHeight:0)+c.margin};a.inverted&&(a.extraMargin.type=l.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;l.navigatorEnabled?(l.xAxis=new G(a,C({breaks:m.options.breaks,ordinal:m.options.ordinal},
c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:f,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[k,0,-k,0],width:b}:{offsets:[0,-k,0,k],height:b})),l.yAxis=new G(a,C(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:n,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),e||c.series.data?l.addBaseSeries():0===a.series.length&&v(a,"redraw",function(b,c){0<a.series.length&&!l.series&&
(l.setBaseSeries(),a.redraw=b);b.call(a,c)}),l.renderElements(),l.addMouseEvents()):l.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),g=d.len-2*k,f=L("min",d.options.min,e.dataMin),d=L("max",d.options.max,e.dataMax)-f;return c?b*d/g+f:g*(b-f)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:G.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=l.scrollbar=new h(a.renderer,C(a.options.scrollbar,{margin:l.navigatorEnabled?
0:10,vertical:a.inverted}),a),A(l.scrollbar,"changed",function(b){var c=l.size,d=c*this.to,c=c*this.from;l.hasDragged=l.scrollbar.hasDragged;l.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){l.onMouseUp(b)})}));l.addBaseSeriesEvents();l.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:q(d&&d.min,L("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:q(d&&d.max,
L("max",e.max,b.dataMax,c.dataMax,c.max))});return f},setBaseSeries:function(a){var b=this.chart,c;a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),m(this.series,function(a){a.destroy()}));c=this.baseSeries=[];m(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],d=a.baseSeries,
e,f,h=a.navigatorOptions.series,k,l={enableMouseTracking:!1,index:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};d?m(d,function(d,g){l.name="Navigator "+(g+1);e=d.options||{};k=e.navigatorOptions||{};f=C(e,l,h,k);g=k.data||h.data;a.hasNavigatorData=a.hasNavigatorData||!!g;f.data=g||e.data&&e.data.slice(0);d.navigatorSeries=b.initSeries(f);c.push(d.navigatorSeries)}):(f=C(h,l),f.data=h.data,a.hasNavigatorData=!!f.data,
c.push(b.initSeries(f)));this.addBaseSeriesEvents()},addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&A(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&m(b,function(b){b.xAxis&&A(b,"updatedData",this.updatedDataHandler);A(b,"remove",function(){this.navigatorSeries&&(e(a.series,this.navigatorSeries),this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=
this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,f=a.stickToMax,h,k,l=a.series&&a.series[0],n=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(k=c,h=k+b),f&&(h=d,e||(k=Math.max(h-b,l&&l.xData?l.xData[0]:-Number.MAX_VALUE))),n&&(e||f)&&u(k)&&
(this.min=this.userMin=k,this.max=this.userMax=h));a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries;a.stickToMin=u(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.size);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){A(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&
a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max)})},destroy:function(){this.removeEvents();this.xAxis&&(e(this.chart.xAxis,this.xAxis),e(this.chart.axes,this.xAxis));this.yAxis&&(e(this.chart.yAxis,this.yAxis),e(this.chart.axes,this.yAxis));m(this.series||[],function(a){a.destroy&&a.destroy()});m("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();
this[a]=null},this);m([this.handles],function(a){x(a)},this)}};a.Navigator=D;v(G.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,h;this.isXAxis&&(g&&g.enabled||e&&e.enabled)&&("x"===f?d.resetZoomButton="blocked":"y"===f?h=!1:"xy"===f&&(d=this.previousZoom,t(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==h?h:a.call(this,b,c)});v(H.prototype,"init",function(a,b,c){A(this,"beforeRender",
function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new D(this)});a.call(this,b,c)});v(H.prototype,"setChartSize",function(a){var b=this.legend,c=this.navigator,d,e,f,h;a.apply(this,[].slice.call(arguments,1));c&&(e=b.options,f=c.xAxis,h=c.yAxis,d=c.scrollbarHeight,this.inverted?(c.left=c.opposite?this.chartWidth-d-c.height:this.spacing[3]+d,c.top=this.plotTop+d):(c.left=this.plotLeft+d,c.top=c.navigatorOptions.top||this.chartHeight-c.height-d-this.spacing[2]-
("bottom"===e.verticalAlign&&e.enabled&&!e.floating?b.legendHeight+q(e.margin,10):0)),f&&h&&(this.inverted?f.options.left=h.options.left=c.left:f.options.top=h.options.top=c.top,f.setAxisSize(),h.setAxisSize()))});v(E.prototype,"addPoint",function(a,b,e,f,h){var g=this.options.turboThreshold;g&&this.xData.length>g&&c(b,!0)&&this.chart.navigator&&d(20,!0);a.call(this,b,e,f,h)});v(H.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.navigator&&this.navigator.setBaseSeries();q(c,!0)&&
this.redraw();return a});v(E.prototype,"update",function(a,b,c){a.call(this,b,!1);this.chart.navigator&&this.chart.navigator.setBaseSeries();q(c,!0)&&this.chart.redraw()});H.prototype.callbacks.push(function(a){var b=a.navigator;b&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))})})(K);(function(a){function D(a){this.init(a)}var A=a.addEvent,G=a.Axis,H=a.Chart,w=a.css,k=a.createElement,t=a.dateFormat,x=a.defaultOptions,p=x.global.useUTC,m=a.defined,e=a.destroyObjectProperties,d=a.discardElement,
l=a.each,z=a.extend,b=a.fireEvent,u=a.Date,c=a.isNumber,C=a.merge,q=a.pick,r=a.pInt,h=a.splat,E=a.wrap;z(x,{rangeSelector:{buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});x.lang=C(x.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});D.prototype={clickButton:function(a,b){var d=this,e=d.chart,f=d.buttonOptions[a],k=e.xAxis[0],m=e.scroller&&e.scroller.getUnionExtremes()||k||{},g=
m.dataMin,r=m.dataMax,t,v=k&&Math.round(Math.min(k.max,q(r,k.max))),u=f.type,w,m=f._range,x,z,C,D=f.dataGrouping;if(null!==g&&null!==r){e.fixedRange=m;D&&(this.forcedDataGrouping=!0,G.prototype.setDataGrouping.call(k||{chart:this.chart},D,!1));if("month"===u||"year"===u)k?(u={range:f,max:v,dataMin:g,dataMax:r},t=k.minFromRange.call(u),c(u.newMax)&&(v=u.newMax)):m=f;else if(m)t=Math.max(v-m,g),v=Math.min(t+m,r);else if("ytd"===u)if(k)void 0===r&&(g=Number.MAX_VALUE,r=Number.MIN_VALUE,l(e.series,function(a){a=
a.xData;g=Math.min(a[0],g);r=Math.max(a[a.length-1],r)}),b=!1),v=d.getYTDExtremes(r,g,p),t=x=v.min,v=v.max;else{A(e,"beforeRender",function(){d.clickButton(a)});return}else"all"===u&&k&&(t=g,v=r);d.setSelected(a);k?k.setExtremes(t,v,q(b,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:f}):(w=h(e.options.xAxis)[0],C=w.range,w.range=m,z=w.min,w.min=x,A(e,"load",function(){w.range=C;w.min=z}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,
text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var c=this,d=a.options.rangeSelector,e=d.buttons||[].concat(c.defaultButtons),f=d.selected,h=function(){var a=c.minInput,d=c.maxInput;a&&a.blur&&b(a,"blur");d&&d.blur&&b(d,"blur")};c.chart=a;c.options=d;c.buttons=[];a.extraTopMargin=d.height;c.buttonOptions=e;this.unMouseDown=A(a.container,"mousedown",h);this.unResize=A(a,"resize",
h);l(e,c.computeButtonRange);void 0!==f&&e[f]&&this.clickButton(f,!1);A(a,"load",function(){A(a.xAxis[0],"setExtremes",function(b){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==b.trigger&&"updatedData"!==b.trigger&&c.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this.chart,b=a.xAxis[0],d=Math.round(b.max-b.min),e=!b.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||b,h=a.dataMin,k=a.dataMax,a=this.getYTDExtremes(k,h,p),m=a.min,g=a.max,
q=this.selected,r=c(q),t=this.options.allButtonsEnabled,u=this.buttons;l(this.buttonOptions,function(a,c){var f=a._range,l=a.type,n=a.count||1;a=u[c];var p=0;c=c===q;var v=f>k-h,y=f<b.minRange,w=!1,x=!1,f=f===d;("month"===l||"year"===l)&&d>=864E5*{month:28,year:365}[l]*n&&d<=864E5*{month:31,year:366}[l]*n?f=!0:"ytd"===l?(f=g-m===d,w=!c):"all"===l&&(f=b.max-b.min>=k-h,x=!c&&r&&f);l=!t&&(v||y||x||e);f=c&&f||f&&!r&&!w;l?p=3:f&&(r=!0,p=2);a.state!==p&&a.setState(p)})},computeButtonRange:function(a){var b=
a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];m(b)&&(d.previousValue=d.HCTime,d.HCTime=b);d.value=t(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:t(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];
w(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){w(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=q.value,b=(l.inputDateParser||Date.parse)(a),f=e.xAxis[0],g=e.scroller&&e.scroller.xAxis?e.scroller.xAxis:f,h=g.dataMin,g=g.dataMax;b!==q.previousValue&&(q.previousValue=b,c(b)||(b=a.split("-"),b=Date.UTC(r(b[0]),r(b[1])-
1,r(b[2]))),c(b)&&(p||(b+=6E4*(new Date).getTimezoneOffset()),m?b>d.maxInput.HCTime?b=void 0:b<h&&(b=h):b<d.minInput.HCTime?b=void 0:b>g&&(b=g),void 0!==b&&f.setExtremes(m?b:f.min,m?f.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var d=this,e=d.chart,f=e.renderer.style||{},h=e.renderer,l=e.options.rangeSelector,g=d.div,m="min"===a,q,t,u=this.inputGroup;this[a+"Label"]=t=h.label(x.lang[m?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(u);
u.offset+=t.width+5;this[a+"DateBox"]=h=h.label("",u.offset).addClass("highcharts-range-input").attr({padding:2,width:l.inputBoxWidth||90,height:l.inputBoxHeight||17,stroke:l.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){d.showInput(a);d[a+"Input"].focus()}).add(u);u.offset+=h.width+(m?10:0);this[a+"Input"]=q=k("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:e.plotTop+"px"},g);t.css(C(f,l.labelStyle));h.css(C({color:"#333333"},
f,l.inputStyle));w(q,z({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:f.fontSize,fontFamily:f.fontFamily,left:"-9em"},l.inputStyle));q.onfocus=function(){d.showInput(a)};q.onblur=function(){d.hideInput(a)};q.onchange=b;q.onkeypress=function(a){13===a.keyCode&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=q((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,
b,c){var d=new u(a),e=d[u.hcGetFullYear]();c=c?u.UTC(e,0,1):+new u(e,0,1);b=Math.max(b||0,c);d=d.getTime();return{max:Math.min(a||d,d),min:b}},render:function(a,b){var c=this,d=c.chart,e=d.renderer,f=d.container,h=d.options,g=h.exporting&&!1!==h.exporting.enabled&&h.navigation&&h.navigation.buttonOptions,p=h.rangeSelector,r=c.buttons,h=x.lang,t=c.div,t=c.inputGroup,u=p.buttonTheme,v=p.buttonPosition||{},w=p.inputEnabled,A=u&&u.states,C=d.plotLeft,D,E=this.getPosition(),G=c.group,H=c.rendered;!1!==
p.enabled&&(H||(c.group=G=e.g("range-selector-buttons").add(),c.zoomText=e.text(h.rangeSelectorZoom,q(v.x,C),15).css(p.labelStyle).add(G),D=q(v.x,C)+c.zoomText.getBBox().width+5,l(c.buttonOptions,function(a,b){r[b]=e.button(a.text,D,0,function(){c.clickButton(b);c.isActive=!0},u,A&&A.hover,A&&A.select,A&&A.disabled).attr({"text-align":"center"}).add(G);D+=r[b].width+q(p.buttonSpacing,5)}),!1!==w&&(c.div=t=k("div",null,{position:"relative",height:0,zIndex:1}),f.parentNode.insertBefore(t,f),c.inputGroup=
t=e.g("input-group").add(),t.offset=0,c.drawInput("min"),c.drawInput("max"))),c.updateButtonStates(),G[H?"animate":"attr"]({translateY:E.buttonTop}),!1!==w&&(t.align(z({y:E.inputTop,width:t.offset,x:g&&E.inputTop<(g.y||0)+g.height-d.spacing[0]?-40:0},p.inputPosition),!0,d.spacingBox),m(w)||(d=G.getBBox(),t[t.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;C(!0,b.options.rangeSelector,a);this.destroy();
this.init(b)},destroy:function(){var a=this.minInput,b=this.maxInput,c;this.unMouseDown();this.unResize();e(this.buttons);a&&(a.onfocus=a.onblur=a.onchange=null);b&&(b.onfocus=b.onblur=b.onchange=null);for(c in this)this[c]&&"chart"!==c&&(this[c].destroy?this[c].destroy():this[c].nodeType&&d(this[c])),this[c]!==D.prototype[c]&&(this[c]=null)}};G.prototype.toFixedRange=function(a,b,d,e){var f=this.chart&&this.chart.fixedRange;a=q(d,this.translate(a,!0,!this.horiz));b=q(e,this.translate(b,!0,!this.horiz));
d=f&&(b-a)/f;.7<d&&1.3>d&&(e?a=b-f:b=a+f);c(a)||(a=b=void 0);return{min:a,max:b}};G.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],d,e=this.max,h,k,l=function(a,c){var d=new Date(a);d["set"+b](d["get"+b]()+c);return d.getTime()-a};c(a)?(d=e-a,k=a):(d=e+l(e,-a.count),this.chart&&(this.chart.fixedRange=e-d));h=q(this.dataMin,Number.MIN_VALUE);c(d)||(d=h);d<=h&&(d=h,void 0===k&&(k=l(d,a.count)),this.newMax=Math.min(d+k,this.dataMax));c(e)||(d=void 0);return d};
E(H.prototype,"init",function(a,b,c){A(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new D(this))});a.call(this,b,c)});H.prototype.callbacks.push(function(a){function b(){d=a.xAxis[0].getExtremes();c(d.min)&&e.render(d.min,d.max)}var d,e=a.rangeSelector,f,h;e&&(h=A(a.xAxis[0],"afterSetExtremes",function(a){e.render(a.min,a.max)}),f=A(a,"redraw",b),b());A(a,"destroy",function(){e&&(f(),h())})});a.RangeSelector=D})(K);(function(a){var D=a.arrayMax,A=a.arrayMin,G=a.Axis,
H=a.Chart,w=a.defined,k=a.each,t=a.extend,x=a.format,p=a.inArray,m=a.isNumber,e=a.isString,d=a.map,l=a.merge,z=a.pick,b=a.Point,u=a.Renderer,c=a.Series,C=a.splat,q=a.SVGRenderer,r=a.VMLRenderer,h=a.wrap,E=c.prototype,f=E.init,v=E.processData,n=b.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(b,c,f){var h=e(b)||b.nodeName,g=arguments[h?1:0],k=g.series,m=a.getOptions(),n,p=z(g.navigator&&g.navigator.enabled,m.navigator.enabled,!0),q=p?{startOnTick:!1,endOnTick:!1}:null,r={marker:{enabled:!1,
radius:2}},t={shadow:!1,borderWidth:0};g.xAxis=d(C(g.xAxis||{}),function(a){return l({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},m.xAxis,a,{type:"datetime",categories:null},q)});g.yAxis=d(C(g.yAxis||{}),function(a){n=z(a.opposite,!0);return l({labels:{y:-2},opposite:n,showLastLabel:!1,title:{text:null}},m.yAxis,a)});g.series=null;g=l({chart:{panning:!0,pinchType:"x"},navigator:{enabled:p},scrollbar:{enabled:z(m.scrollbar.enabled,!0)},rangeSelector:{enabled:z(m.rangeSelector.enabled,
!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:r,spline:r,area:r,areaspline:r,arearange:r,areasplinerange:r,column:t,columnrange:t,candlestick:t,ohlc:t}},g,{isStock:!0});g.series=k;return h?new H(b,g,f):new H(g,c)};h(G.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&
(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):a.call(this,[].slice.call(arguments,1))});h(G.prototype,"destroy",function(a){var b=this.chart,c=this.options&&this.options.top+","+this.options.height;c&&b._labelPanes&&b._labelPanes[c]===this&&delete b._labelPanes[c];return a.call(this,Array.prototype.slice.call(arguments,1))});h(G.prototype,"getPlotLinePath",function(a,b,c,f,g,h){var l=this,n=this.isLinked&&!this.series?this.linkedParent.series:this.series,q=l.chart,r=q.renderer,t=
l.left,u=l.top,v,x,y,A,F=[],D=[],C,E;if("colorAxis"===l.coll)return a.apply(this,[].slice.call(arguments,1));D=function(a){var b="xAxis"===a?"yAxis":"xAxis";a=l.options[b];return m(a)?[q[b][a]]:e(a)?[q.get(a)]:d(n,function(a){return a[b]})}(l.coll);k(l.isXAxis?q.yAxis:q.xAxis,function(a){if(w(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=w(a.options[b])?q[b][a.options[b]]:q[b][0];l===b&&D.push(a)}});C=D.length?[]:[l.isXAxis?q.yAxis[0]:q.xAxis[0]];k(D,function(a){-1===
p(a,C)&&C.push(a)});E=z(h,l.translate(b,null,null,f));m(E)&&(l.horiz?k(C,function(a){var b;x=a.pos;A=x+a.len;v=y=Math.round(E+l.transB);if(v<t||v>t+l.width)g?v=y=Math.min(Math.max(t,v),t+l.width):b=!0;b||F.push("M",v,x,"L",y,A)}):k(C,function(a){var b;v=a.pos;y=v+a.len;x=A=Math.round(u+l.height-E);if(x<u||x>u+l.height)g?x=A=Math.min(Math.max(u,x),l.top+l.height):b=!0;b||F.push("M",v,x,"L",y,A)}));return 0<F.length?r.crispPolyLine(F,c||1):null});G.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,
null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b)if(a.toString()===b.toString())c=a,c.flat=!0;else for(d=0;d<a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");else c=null;return c};q.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};u===r&&(r.prototype.crispPolyLine=q.prototype.crispPolyLine);
h(G.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});h(G.prototype,"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(w(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){a=this.chart;var f=this.options.crosshair.label,h=this.horiz;d=this.opposite;e=this.left;var k=this.top,l=this.crossLabel,m,n=f.format,p="",q="inside"===this.options.tickPosition,r=!1!==this.crosshair.snap,u=0;b||(b=this.cross&&this.cross.e);
m=h?"center":d?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";l||(l=this.crossLabel=a.renderer.label(null,null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:f.align||m,padding:z(f.padding,8),r:z(f.borderRadius,3),zIndex:2}).add(this.labelGroup),l.attr({fill:f.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||
0}).css(t({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));h?(m=r?c.plotX+e:b.chartX,k+=d?0:this.height):(m=d?this.width+e:0,k=r?c.plotY+k:b.chartY);n||f.formatter||(this.isDatetimeAxis&&(p="%b %d, %Y"),n="{value"+(p?":"+p:"")+"}");b=r?c[this.isXAxis?"x":"y"]:this.toValue(h?b.chartX:b.chartY);l.attr({text:n?x(n,{value:b}):f.formatter.call(this,b),x:m,y:k,visibility:"visible"});b=l.getBBox();if(h){if(q&&!d||!q&&d)k=l.y-b.height}else k=l.y-b.height/2;h?(d=e-b.x,e=
e+this.width-b.x):(d="left"===this.labelAlign?e:0,e="right"===this.labelAlign?e+this.width:a.chartWidth);l.translateX<d&&(u=d-l.translateX);l.translateX+b.width>=e&&(u=-(l.translateX+b.width-e));l.attr({x:m+u,y:k,anchorX:h?m:this.opposite?0:a.chartWidth,anchorY:h?this.opposite?a.chartHeight:0:k+b.height/2})}});E.init=function(){f.apply(this,arguments);this.setCompare(this.options.compare)};E.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==
b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};E.processData=function(){var a,b=-1,c,d,e,f;v.apply(this,arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=p("close",this.pointArrayMap),-1===b&&(b=p(this.pointValKey||"y",this.pointArrayMap))),a=0;a<e-1;a++)if(f=-1<b?d[a][b]:d[a],m(f)&&c[a+1]>=
this.xAxis.min&&0!==f){this.compareValue=f;break}};h(E,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=A(b),this.dataMax=D(b))});G.prototype.setCompare=function(a,b){this.isXAxis||(k(this.series,function(b){b.setCompare(a)}),z(b,!0)&&this.chart.redraw())};b.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",(0<this.change?"+":"")+a.numberFormat(this.change,z(this.series.tooltipOptions.changeDecimals,
2)));return n.apply(this,[b])};h(c.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=l(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)})})(K);
return K});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel/resources/assets/js/components/FighterGraph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FighterGraph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-178bb272", Component.options)
  } else {
    hotAPI.reload("data-v-178bb272", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel/resources/assets/js/components/Ranking.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Ranking.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc7a4f36", Component.options)
  } else {
    hotAPI.reload("data-v-bc7a4f36", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.2.1
  * (c) 2017 Evan You
  * @license MIT
  */


/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // inject instance registration hooks
    var hooks = data.hook || (data.hook = {});
    hooks.init = function (vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.prepatch = function (oldVnode, vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.destroy = function (vnode) {
      if (matched.instances[name] === vnode.child) {
        matched.instances[name] = undefined;
      }
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more comformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = location.path ? createRoute(null, location) : route;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.target && e.target.getAttribute) {
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (
  routes,
  oldPathMap,
  oldNameMap
) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null);

function getRouteRegex (path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      );
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
  }
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, onAbort);
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function () { onAbort && onAbort(); };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true);
        abort();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
        abort();
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl ? baseEl.getAttribute('href') : '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  return function boundRouteGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = once(function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        });

        var reject = once(function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        });

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady (cb) {
  this.history.onReady(cb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(to, current || this.history.current, append);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.2.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(39);


Vue.component('FighterGraph', __webpack_require__(10));
Vue.component('Ranking', __webpack_require__(11));
var app = new Vue({
    el: '#app',
    data: {
        wcs: ['wsw', 'flw', 'wbw', 'bw', 'fw', 'wfw', 'lw', 'ww', 'mw', 'lhw', 'hw']
    },
    computed: {
        capwcs: function capwcs() {
            return this.wcs.map(function (x) {
                return x.toUpperCase();
            });
        }
    },
    router: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]
}).$mount('#app');

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(18);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5);
axios.CancelToken = __webpack_require__(17);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(5);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(19);
var dispatchRequest = __webpack_require__(20);
var isAbsoluteURL = __webpack_require__(28);
var combineURLs = __webpack_require__(26);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(23);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(3);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//

var Highcharts = __webpack_require__(9);
module.exports = {
  name: "FighterGraph",
  data: function data() {
    return {
      fighter: [],
      target: undefined
    };
  },
  watch: {
    '$route': function $route(to, from) {
      var _this = this;

      axios.get('/api/fighters/history/' + this.$route.params.fighter).then(function (response) {
        console.log(response);
        _this.fighter = response.data;
        console.log(_this.fighter.name);
        _this.target = Highcharts.chart(_this.$el, {

          title: {
            text: _this.fighter.name + ' Rankings History',
            x: -20 //center
          },
          subtitle: {
            text: 'Source: UnofficialUFC rankings algorithm',
            x: -20
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            inverted: true,
            min: 0, max: 100,
            title: {
              text: 'UUFC Ranking'
            }
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: false
              }
            }
          },
          tooltip: {
            valuePrefix: 'Rank '
          },
          legend: {
            enabled: true
          },
          series: _this.fighter.series
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},

  mounted: function mounted() {
    var _this2 = this;

    axios.get('/api/fighters/history/' + this.$route.params.fighter).then(function (response) {
      console.log(response);
      _this2.fighter = response.data;
      console.log(_this2.fighter.name);
      _this2.target = Highcharts.chart(_this2.$el, {

        title: {
          text: _this2.fighter.name + ' Rankings History',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: UnofficialUFC rankings algorithm',
          x: -20
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          inverted: true,
          min: 0, max: 100,
          title: {
            text: 'UUFC Ranking'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: false
            }
          }
        },
        tooltip: {
          valuePrefix: 'Rank '
        },
        legend: {
          enabled: true
        },
        series: _this2.fighter.series
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  data: function data() {
    return {
      fighters: []
    };
  },
  watch: {
    '$route': function $route(to, from) {
      var _this = this;

      axios.get('/api/fighters/' + this.$route.params.wc).then(function (response) {
        console.log(response);
        _this.fighters = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    axios.get('/api/fighters/' + this.$route.params.wc).then(function (response) {
      console.log(response);
      _this2.fighters = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//

var Highcharts = __webpack_require__(9);
module.exports = {
  name: "WCGraph",
  data: function data() {
    return {
      wcdata: [],
      target: undefined
    };
  },
  watch: {
    '$route': function $route(to, from) {
      var _this = this;

      axios.get('/api/division/history/' + this.$route.params.wc).then(function (response) {
        console.log(response);
        _this.wcdata = response.data;
        console.log(_this.wcdata);
        _this.target = Highcharts.chart(_this.$el, {
          chart: {
            zoomType: 'xy'
          },
          title: {
            text: _this.wcdata.division + ' Ranking History',
            x: -20 //center
          },
          subtitle: {
            text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
            x: -20
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            min: 0, max: 100,
            title: {
              text: 'UUFC Ranking'
            }
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: false
              },
              states: {
                hover: {
                  enabled: true,
                  lineWidth: 5,
                  color: '#FF0000'
                }
              }
            },
            series: {
              states: {
                hover: {
                  enabled: true,
                  lineWidth: 5,
                  color: '#FF0000'
                }
              }
            }
          },

          legend: {
            enabled: false
          },

          tooltip: {
            valuePrefix: 'Rank '
          },
          series: _this.wcdata.series
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},

  mounted: function mounted() {
    var _this2 = this;

    axios.get('/api/division/history/' + this.$route.params.wc).then(function (response) {
      console.log(response);
      _this2.wcdata = response.data;
      console.log(_this2.wcdata);
      _this2.target = Highcharts.chart(_this2.$el, {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: _this2.wcdata.division + ' Ranking History',
          x: -20 //center
        },
        subtitle: {
          text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
          x: -20
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          min: 0, max: 100,
          title: {
            text: 'UUFC Ranking'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: false
            },
            states: {
              hover: {
                enabled: true,
                lineWidth: 5,
                color: '#FF0000'
              }
            }
          },
          series: {
            states: {
              hover: {
                enabled: true,
                lineWidth: 5,
                color: '#FF0000'
              }
            }
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          valuePrefix: 'Rank '
        },
        series: _this2.wcdata.series
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        console.log('Component mounted.');
    }
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        console.log('Component mounted.');
    }
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);




window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_2_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_router__);


var routes = [{
    path: '/',

    component: __webpack_require__(42)
}, {
    path: '/about',

    component: __webpack_require__(41)
}, {
    path: '/:wc',

    component: __webpack_require__(11)
}, {
    path: '/history/fighter/:fighter',

    component: __webpack_require__(10)
}, {
    path: '/history/division/:wc',

    component: __webpack_require__(40)
}];

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_0_vue_router___default.a({
    routes: routes
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel/resources/assets/js/components/WCGraph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] WCGraph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2bf579e", Component.options)
  } else {
    hotAPI.reload("data-v-f2bf579e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel/resources/assets/js/pages/About.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] About.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d5e026c", Component.options)
  } else {
    hotAPI.reload("data-v-9d5e026c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Code/laravel/resources/assets/js/pages/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18fb1f9c", Component.options)
  } else {
    hotAPI.reload("data-v-18fb1f9c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-178bb272", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18fb1f9c", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    About\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9d5e026c", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tfoot', [_c('tr', [_c('th', [_c('abbr', {
    attrs: {
      "title": "Position"
    }
  }, [_vm._v("Pos")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Photo"
    }
  }, [_vm._v("Photo")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Name"
    }
  }, [_vm._v("Name")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Rank Points"
    }
  }, [_vm._v("RP")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Record (3 yrs)"
    }
  }, [_vm._v("Record (3 yrs)")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Move"
    }
  }, [_vm._v("+/-")])])])]), _vm._v(" "), _c('tbody', _vm._l((_vm.fighters), function(fighter) {
    return _c('tr', [_c('td', [_c('figure', {
      staticClass: "image is-64x64"
    }, [_c('img', {
      staticClass: "img-circle",
      attrs: {
        "src": 'https://placehold.it/160x160/348899/F2EBC7/&text=' + fighter.rank,
        "alt": "Ranking Image"
      }
    })])]), _vm._v(" "), _c('td', [_c('figure', {
      staticClass: "image maxwidth"
    }, [_c('img', {
      attrs: {
        "src": fighter.pic,
        "alt": "Image"
      }
    })])]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "name"
    }, [_c('a', {
      attrs: {
        "href": '/#/history/fighter/' + fighter.id
      }
    }, [_c('strong', [_vm._v(_vm._s(fighter.name))])])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(fighter.rp))])]), _vm._v(" "), _c('td', _vm._l((fighter.fights), function(f1) {
      return _c('span', {
        class: 'result-' + f1
      }, [_vm._v("\n                            " + _vm._s(f1) + "\n                      ")])
    })), _vm._v(" "), _c('td', [(fighter.fights[fighter.fights.length - 1] == 'W') ? _c('span', {
      staticClass: "result-W"
    }, [_c('i', {
      staticClass: "fa fa-arrow-up",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _vm._v(" "), (fighter.fights[fighter.fights.length - 1] == 'D') ? _c('span', {
      staticClass: "result-D"
    }, [_c('i', {
      staticClass: "fa fa-arrows-h",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _vm._v(" "), (fighter.fights[fighter.fights.length - 1] == 'L') ? _c('span', {
      staticClass: "result-L"
    }, [_c('i', {
      staticClass: "fa fa-arrow-down",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e()])])
  }))], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_c('abbr', {
    attrs: {
      "title": "Position"
    }
  }, [_vm._v("Pos")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Photo"
    }
  }, [_vm._v("Photo")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Name"
    }
  }, [_vm._v("Name")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Rank Points"
    }
  }, [_vm._v("RP")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Record (3 yrs)"
    }
  }, [_vm._v("Record (3 yrs)")])]), _vm._v(" "), _c('th', [_c('abbr', {
    attrs: {
      "title": "Move"
    }
  }, [_vm._v("+/-")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bc7a4f36", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f2bf579e", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * Vue.js v2.1.10
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind$1 (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove$1(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set$1 (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set$1(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$3) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove$1,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind$1,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	identity: identity,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	isServerRendering: isServerRendering,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (
  vnode,
  hydrating,
  parentElm,
  refElm
) {
  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    );
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.componentInstance = oldVnode.componentInstance;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.componentInstance._isMounted) {
    vnode.componentInstance._isMounted = true;
    callHook(vnode.componentInstance, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.componentInstance._inactive = false;
    callHook(vnode.componentInstance, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.componentInstance._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.componentInstance.$destroy();
    } else {
      vnode.componentInstance._inactive = true;
      callHook(vnode.componentInstance, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var once = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once,
    capture: capture
  }
});

function createEventHandle (fn) {
  var handle = {
    fn: fn,
    invoker: function () {
      var arguments$1 = arguments;

      var fn = handle.fn;
      if (Array.isArray(fn)) {
        for (var i = 0; i < fn.length; i++) {
          fn[i].apply(null, arguments$1);
        }
      } else {
        fn.apply(null, arguments);
      }
    }
  };
  return handle
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      if (!cur.invoker) {
        cur = on[name] = createEventHandle(cur);
      }
      add(event.name, cur.invoker, event.once, event.capture);
    } else if (cur !== old) {
      old.fn = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name].invoker, event.capture);
    }
  }
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// nomralization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constrcuts that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = {};
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (_parentVnode && _parentVnode.data.scopedSlots) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots;
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
        }
        throw e
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // toString for mustaches
  Vue.prototype._s = _toString;
  // convert text to vnode
  Vue.prototype._v = createTextVNode;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = createEmptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        extend(props, bindObject);
      }
      return scopedSlotFn(props) || fallback
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && process.env.NODE_ENV !== 'production') {
        slotNodes._rendered && warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
        slotNodes._rendered = true;
      }
      return slotNodes || fallback
    }
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    tag,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        process.env.NODE_ENV !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var type = data.attrs && data.attrs.type;
            var hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // check v-on keyCodes
  Vue.prototype._k = function checkKeyCodes (
    eventKeyCode,
    key,
    builtInAlias
  ) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  };
}

function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add$1 (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$2 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true;
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      if (process.env.NODE_ENV !== 'production') {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function updateComponent () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      if (process.env.NODE_ENV !== 'production') {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      if (process.env.NODE_ENV !== 'production') {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$1(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // call updated hooks
  index = queue.length;
  while (index--) {
    watcher = queue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            process.env.NODE_ENV !== 'production' && warn(
              ("Error in watcher \"" + (this.expression) + "\""),
              this.vm
            );
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove$1(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, props) {
  var propsData = vm.$options.propsData || {};
  var keys = vm.$options._propKeys = Object.keys(props);
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( i ) {
    var key = keys[i];
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
    }
  };

  for (var i = 0; i < keys.length; i++) loop( i );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm, computed) {
  for (var key in computed) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && key in vm) {
      warn(
        "existing instance property \"" + key + "\" will be " +
        "overwritten by a computed property with the same name.",
        vm
      );
    }
    var userDef = computed[key];
    if (typeof userDef === 'function') {
      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
      computedSharedDefinition.set = noop;
    } else {
      computedSharedDefinition.get = userDef.get
        ? userDef.cache !== false
          ? makeComputedGetter(userDef.get, vm)
          : bind$1(userDef.get, vm)
        : noop;
      computedSharedDefinition.set = userDef.set
        ? bind$1(userDef.set, vm)
        : noop;
    }
    Object.defineProperty(vm, key, computedSharedDefinition);
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm, methods) {
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
    if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
      warn(
        "method \"" + key + "\" has an undefined value in the component definition. " +
        "Did you reference the function correctly?",
        vm
      );
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set$1;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      extendOptions._scopeId = options._scopeId;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else {
    return pattern.test(name)
  }
}

function pruneCache (cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set$1;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Vue$3.version = '2.1.10';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + selector
      );
      return document.createElement('div')
    }
  }
  return el
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove$1(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (parent) {
      if (ref) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parentElm$1 !== null) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var target$1;

function add$2 (
  event,
  handler,
  once,
  capture
) {
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      remove$3(event, handler, capture, _target);
      arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
    };
  }
  target$1.addEventListener(event, handler, capture);
}

function remove$3 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  updateListeners(on, oldOn, add$2, remove$3, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(vnode, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (vnode, newVal) {
  var value = vnode.elm.value;
  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove$1(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear ? appearClass : enterClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var toClass = isAppear ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    }, 'transition-insert');
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb);
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb);
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    leaveClass: (name + "-leave"),
    appearClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    leaveToClass: (name + "-leave-to"),
    appearToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveActiveClass: (name + "-leave-active"),
    appearActiveClass: (name + "-enter-active")
  }
});

function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model = {
  inserted: function inserted (el, binding, vnode) {
    if (process.env.NODE_ENV !== 'production') {
      if (!modelableTagRE.test(vnode.tag)) {
        warn(
          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          vnode.context
        );
      }
    }
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1].fn;
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    var key = child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        }, key);
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave, key);
        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        }, key);
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts
            ? (opts.Ctor.options.name || opts.tag)
            : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var f = document.body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      addTransitionClass(el, moveClass);
      var info = getTransitionInfo(el);
      removeTransitionClass(el, moveClass);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.isUnknownElement = isUnknownElement;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.mustUseProp = mustUseProp;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

// wrap mount
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return this._mount(el, hydrating)
};

if (process.env.NODE_ENV !== 'production' &&
    inBrowser && typeof console !== 'undefined') {
  console[console.info ? 'info' : 'log'](
    "You are running Vue in development mode.\n" +
    "Make sure to turn on production mode when deploying for production.\n" +
    "See more tips at https://vuejs.org/guide/deployment.html"
  );
}

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (
      process.env.NODE_ENV !== 'production' &&
      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
    ) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var decoder;

function decode (html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr',
  true
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
  true
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track',
  true
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isScriptOrStyle = makeMap('script,style', true);
var reCache = {};

var ltRE = /&lt;/g;
var gtRE = /&gt;/g;
var nlRE = /&#10;/g;
var ampRE = /&amp;/g;
var quoteRE = /&quot;/g;

function decodeAttr (value, shouldDecodeNewlines) {
  if (shouldDecodeNewlines) {
    value = value.replace(nlRE, '\n');
  }
  return value
    .replace(ltRE, '<')
    .replace(gtRE, '>')
    .replace(ampRE, '&')
    .replace(quoteRE, '"')
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a script or style element
    if (!lastTag || !isScriptOrStyle(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd > 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last && options.chars) {
      options.chars(html);
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
      unarySlash = '';
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !/[\w$]/.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue parser]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important
) {
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
var bindRE = /^:|^v-bind:/;
var onRE = /^@|^v-on:/;
var argRE = /:(.*)$/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$1;
var platformGetTagNamespace;
var platformMustUseProp;
var platformIsPreTag;
var preTransforms;
var transforms;
var postTransforms;
var delimiters;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$1 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;
  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;
  parseHTML(template, {
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$1(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production' && !warned) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warned = true;
            warn$1(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes:\n' + template
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warned = true;
            warn$1(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements:\n' + template
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production' && !warned) {
          warned = true;
          warn$1(
            "Component template should contain exactly one root element:" +
            "\n\n" + template + "\n\n" +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production' && !warned && text === template) {
          warned = true;
          warn$1(
            'Component template requires a root element, rather than just text:\n\n' + template
          );
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || children[children.length - 1].text !== ' ') {
          currentParent.children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$1(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$1(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once = getAndRemoveAttr(el, 'v-once');
  if (once != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$1(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, arg, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        if (argMatch && (arg = argMatch[1])) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$1(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
      warn$1('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: 'if($event.target !== $event.currentTarget)return;',
  ctrl: 'if(!$event.ctrlKey)return;',
  shift: 'if(!$event.shiftKey)return;',
  alt: 'if(!$event.altKey)return;',
  meta: 'if(!$event.metaKey)return;'
};

function genHandlers (events, native) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  } else if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  } else if (!handler.modifiers) {
    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
      ? handler.value
      : ("function($event){" + (handler.value) + "}")
  } else {
    var code = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        code += modifierCode[key];
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code = genKeyFilter(keys) + code;
    }
    var handlerCode = simplePathRE.test(handler.value)
      ? handler.value + '($event)'
      : handler.value;
    return 'function($event){' + code + handlerCode + '}'
  }
}

function genKeyFilter (keys) {
  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function bind$2 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  bind: bind$2,
  cloak: noop
};

/*  */

// configurable state
var warn$2;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$2 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && warn$2(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice())
}

function genIfConditions (conditions) {
  if (!conditions.length) {
    return '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return el.once ? genOnce(el) : genElement(el)
  }
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots)) + ",";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$2);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    warn$2('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (slots) {
  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
}

function genScopedSlot (key, el) {
  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el) || 'void 0'
      : genElement(el)) + "}"
}

function genChildren (el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot') {
      return genElement(el$1)
    }
    var normalizationType = getNormalizationType(children);
    return ("[" + (children.map(genNode).join(',')) + "]" + (checkSkip
        ? normalizationType ? ("," + normalizationType) : ''
        : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function maybeComponent (el) {
  return !isPlatformReservedTag$1(el.tag)
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

/**
 * Compile a template.
 */
function compile$1 (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

/*  */

// operators like typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');
// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "- avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + text
      );
    } else {
      errors.push(("- invalid expression: " + text));
    }
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

var warn$3;

function model$1 (
  el,
  dir,
  _warn
) {
  warn$3 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;
  if (process.env.NODE_ENV !== 'production') {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$3(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
  }
  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else {
    genDefaultModel(el, value, modifiers);
  }
  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  if (process.env.NODE_ENV !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    );
  }
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'click',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + value + "=$$c}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  if (process.env.NODE_ENV !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    );
  }
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'click', genAssignmentCode(value, valueBinding), null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  if (process.env.NODE_ENV !== 'production') {
    if (el.tag === 'input' && el.attrsMap.value) {
      warn$3(
        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
        'inline value attributes will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      );
    }
    if (el.tag === 'textarea' && el.children.length) {
      warn$3(
        "<textarea v-model=\"" + value + "\">:\n" +
        'inline content inside <textarea> will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      );
    }
  }

  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
  var needCompositionGuard = !lazy && type !== 'range';
  var isNative = el.tag === 'input' || el.tag === 'textarea';

  var valueExpression = isNative
    ? ("$event.target.value" + (trim ? '.trim()' : ''))
    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
  valueExpression = number || type === 'number'
    ? ("_n(" + valueExpression + ")")
    : valueExpression;

  var code = genAssignmentCode(value, valueExpression);
  if (isNative && needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  // inputs with type="file" are read only and setting the input's
  // value will throw an error.
  if (process.env.NODE_ENV !== 'production' &&
      type === 'file') {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
      "File inputs are read only. Use a v-on:change listener instead."
    );
  }

  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

function genSelect (
    el,
    value,
    modifiers
) {
  if (process.env.NODE_ENV !== 'production') {
    el.children.some(checkOptionWarning);
  }

  var number = modifiers && modifiers.number;
  var assignment = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})" +
    (el.attrsMap.multiple == null ? '[0]' : '');

  var code = genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function checkOptionWarning (option) {
  if (option.type === 1 &&
    option.tag === 'option' &&
    option.attrsMap.selected != null) {
    warn$3(
      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
      'inline selected attributes on <option> will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
    );
    return true
  }
  return false
}

function genAssignmentCode (value, assignment) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model$1,
  text: text,
  html: html
};

/*  */

var cache = Object.create(null);

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  staticKeys: genStaticKeys(modules$1),
  directives: directives$1,
  isReservedTag: isReservedTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  getTagNamespace: getTagNamespace,
  isPreTag: isPreTag
};

function compile$$1 (
  template,
  options
) {
  options = options
    ? extend(extend({}, baseOptions), options)
    : baseOptions;
  return compile$1(template, options)
}

function compileToFunctions (
  template,
  options,
  vm
) {
  var _warn = (options && options.warn) || warn;
  // detect possible CSP restriction
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    try {
      new Function('return 1');
    } catch (e) {
      if (e.toString().match(/unsafe-eval|CSP/)) {
        _warn(
          'It seems you are using the standalone build of Vue.js in an ' +
          'environment with Content Security Policy that prohibits unsafe-eval. ' +
          'The template compiler cannot work in this environment. Consider ' +
          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
          'templates into render functions.'
        );
      }
    }
  }
  var key = options && options.delimiters
    ? String(options.delimiters) + template
    : template;
  if (cache[key]) {
    return cache[key]
  }
  var res = {};
  var compiled = compile$$1(template, options);
  res.render = makeFunction(compiled.render);
  var l = compiled.staticRenderFns.length;
  res.staticRenderFns = new Array(l);
  for (var i = 0; i < l; i++) {
    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
  }
  if (process.env.NODE_ENV !== 'production') {
    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
      _warn(
        "failed to compile template:\n\n" + template + "\n\n" +
        detectErrors(compiled.ast).join('\n') +
        '\n\n',
        vm
      );
    }
  }
  return (cache[key] = res)
}

function makeFunction (code) {
  try {
    return new Function(code)
  } catch (e) {
    return noop
  }
}

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      var ref = compileToFunctions(template, {
        warn: warn,
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(49)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(14);


/***/ })
/******/ ]);
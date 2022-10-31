/*!
 * service-worker-router v1.7.5 by berstend
 * https://github.com/berstend/service-worker-router#readme
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var UrlPattern = _interopDefault(require('url-pattern'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var patternOpts = {
    segmentNameCharset: 'a-zA-Z0-9_-',
    segmentValueCharset: 'a-zA-Z0-9@.+-_'
};
var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.prototype.all = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: '' }));
    };
    Router.prototype.get = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'GET' }));
    };
    Router.prototype.post = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'POST' }));
    };
    Router.prototype.put = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'PUT' }));
    };
    Router.prototype.patch = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'PATCH' }));
    };
    Router.prototype["delete"] = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'DELETE' }));
    };
    Router.prototype.head = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'HEAD' }));
    };
    Router.prototype.options = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'OPTIONS' }));
    };
    Router.prototype.addRoute = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        if (!(pattern instanceof UrlPattern)) {
            pattern = new UrlPattern(pattern, patternOpts);
        }
        this.routes.push({ pattern: pattern, handler: handler, options: options });
        return this;
    };
    Router.prototype.match = function (url, method) {
        if (!(url instanceof URL)) {
            url = url.startsWith('/') ? new URL("http://domain" + url) : new URL(url);
        }
        for (var _i = 0, _a = this.routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var pattern = route.pattern, options = route.options, handler = route.handler;
            if (options.method && options.method !== method)
                continue;
            var params = pattern.match(options.matchUrl ? url.href : url.pathname);
            if (params)
                return { params: params, handler: handler, url: url, method: method, route: route, ctx: this.ctx };
        }
        return null;
    };
    Router.prototype.matchRequest = function (request) {
        return this.match(request.url, request.method);
    };
    Router.prototype.matchEvent = function (event) {
        return this.matchRequest(event.request);
    };
    Router.prototype.handle = function (url, method) {
        var match = this.match(url, method);
        if (!match)
            return null;
        var context = __assign({}, match);
        var handlerPromise = match.handler(context);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.handleRequest = function (request) {
        var match = this.matchRequest(request);
        if (!match)
            return null;
        var context = __assign(__assign({}, match), { request: request });
        var handlerPromise = match.handler(context);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.handleEvent = function (event) {
        var request = event.request;
        var match = this.matchRequest(request);
        if (!match)
            return null;
        var context = __assign(__assign({}, match), { request: request, event: event });
        var handlerPromise = match.handler(context);
        event.respondWith(handlerPromise);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.clear = function () {
        this.routes.length = 0;
    };
    return Router;
}());

exports.UrlPattern = UrlPattern;
exports.Router = Router;
//# sourceMappingURL=router.js.map

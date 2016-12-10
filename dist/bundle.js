(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
_post2.default.findAll().then(_ui2.default.renderPosts).catch(function (error) {
    console.log(error);
});

// Left off on 22:35

},{"./post":2,"./ui":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Post = {
    findAll: function findAll() {
        return new Promise(function (res, rej) {
            var uri = "http://localhost:3000/posts";
            var request = new XMLHttpRequest();

            request.open("GET", uri, true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    res(JSON.parse(request.response));
                }
            };
            request.onerror = function () {
                rej(new Error("Something went wrong in the API."));
            };

            request.send();
            console.log("Hello still.");
        });
    }
};

exports.default = Post;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ui = {
    renderPosts: function renderPosts(posts) {
        console.log(posts);
    }
};

exports.default = ui;

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
// This is the entry point file. This is where it all happens, but we don't really want to write code here.

_post2.default.findAll().then(_ui2.default.renderPosts).catch(function (error) {
    console.log(error);
});

// Left off on 25:16

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
// This is the user interface file. This is where you render stuff to the DOM.

var ui = {
    renderPosts: function renderPosts(posts) {
        console.log(posts);
        // Creates an array of article posts' in template form.
        var elements = posts.map(function (post) {
            return articleTemplate;
        });

        console.log(elements);
        // Finds the target, then adds the elements.
        var target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    }
};

// We add the post to the DOM here.
var articleTemplate = "\n        <article class=\"post\">\n          <h2 class=\"post-title\">\n            In hybrid moments, give me a moment\n          </h2>\n          <p class=\"post-meta\">\n            last reply on July 15, 1997\n          </p>\n        </article>";

exports.default = ui;

},{}]},{},[1]);

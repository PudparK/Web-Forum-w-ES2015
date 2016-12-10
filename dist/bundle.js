(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

var ui = {
    renderPosts: function renderPosts(posts) {
        console.log(posts);
    }
};

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
Post.findAll().then(ui.renderPosts).catch(function (error) {
    console.log(error);
});

// Left off on 22:35

},{}]},{},[1]);

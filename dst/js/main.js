"use strict";

var _highlightPackMin = require("./highlight.pack.min.js");

var _highlightPackMin2 = _interopRequireDefault(_highlightPackMin);

var _Markdown = require("./Markdown.js");

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Editor = require("./Editor.js");

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    //hljs.initHighlightingOnLoad();
    _highlightPackMin2.default.initHighlighting();
    var m = new _Markdown2.default();
    //console.log(document.body);
    //m.ToAppend(document.body);
    m.ToAppend(document.getElementById('Viewer'));
    var e = new _Editor2.default();
    e.Editor.setValue(m.Source, -1);
    console.log(e.Editor);
    //import {Sub} from "./Sub";
    //let sub = new Sub();
    //sub.Show();
    //import {hello} from "./sub";
    //hello();
}, false); //import {Markdown} from "./Markdown";
//import hljs from "./node_modules/highlightjs/highlight.pack.min.js";
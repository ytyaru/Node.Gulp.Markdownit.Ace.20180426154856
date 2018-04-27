'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function () {
    function Editor() {
        _classCallCheck(this, Editor);

        //require('ace-min-noconflict');
        //require('ace-min-noconflict/mode-javascript');
        //require('ace-builds');
        /*
        require('ace-builds/src-min-noconflict/ace');
        require('ace-builds/src-min-noconflict/mode-javascript');
        require('ace-builds/src-min-noconflict/theme-twilight');
        require('ace-builds/src-min-noconflict/worker-javascript');
        */
        //this._ace = require('brace');
        this._ace = require('brace');
        console.log('ace', ace);
        this._editor = null;
        this._CreateEditor();
    }

    _createClass(Editor, [{
        key: '_CreateEditor',
        value: function _CreateEditor() {
            require('brace/mode/markdown');
            require('brace/theme/twilight');
            console.log('_CreateEditor() start');
            //require('../../node_modules/brace/mode/javascript');
            //require('../../node_modules/brace/theme/twilight');
            console.log('require');
            //require('./node_modules/brace/mode/javascript');
            //require('./node_modules/brace/theme/twilight');
            this._editor = this._ace.edit("Editor"); // HTML id属性=Editor
            this.Editor.setOptions({
                maxLines: Infinity
            });
            console.log('editor', this._editor);
            //this.Editor.setTheme("ace/theme/twilight");
            this.Editor.getSession().setMode("ace/mode/markdown");
        }
    }, {
        key: 'Editor',
        get: function get() {
            return this._editor;
        }
    }]);

    return Editor;
}();

exports.default = Editor;
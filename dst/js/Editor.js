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
        require('ace-builds/src-min-noconflict/ace');
        require('ace-builds/src-min-noconflict/mode-javascript');
        this._editor = null;
        this._CreateEditor();
    }

    _createClass(Editor, [{
        key: '_CreateEditor',
        value: function _CreateEditor() {
            this._editor = ace.edit("Editor"); // HTML id属性=Editor
            editor.setTheme("ace/theme/twilight");
            editor.session.setMode("ace/mode/javascript");
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
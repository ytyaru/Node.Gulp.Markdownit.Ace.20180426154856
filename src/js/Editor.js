export default class Editor {
    constructor () {
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
        console.log('ace',ace);
        this._editor = null;
        this._CreateEditor();
    }
    get Editor() { return this._editor; }
    _CreateEditor() {
        require('brace/mode/javascript');
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
        console.log('editor',this._editor);
        //this.Editor.setTheme("ace/theme/twilight");
        this.Editor.getSession().setMode("ace/mode/javascript");
    }
}

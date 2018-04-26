export default class Editor {
    constructor () {
        //require('ace-min-noconflict');
        //require('ace-min-noconflict/mode-javascript');
        //require('ace-builds');
        require('ace-builds/src-min-noconflict/ace');
        require('ace-builds/src-min-noconflict/mode-javascript');
        require('ace-builds/src-min-noconflict/theme-twilight');
        require('ace-builds/src-min-noconflict/worker-javascript');
        this._editor = null;
        this._CreateEditor();
    }
    get Editor() { return this._editor; }
    _CreateEditor() {
        this._editor = ace.edit("Editor"); // HTML id属性=Editor
        this.Editor.setTheme("ace/theme/twilight");
        this.Editor.session.setMode("ace/mode/javascript");
    }
}

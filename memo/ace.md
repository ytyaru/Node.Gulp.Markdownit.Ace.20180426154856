# Ace

テキストエディタAceをNode.jsで使いたい。

* [ace-builds](https://github.com/ajaxorg/ace-builds)
* [brace](https://github.com/thlorenz/brace)

## [ace-builds](https://github.com/ajaxorg/ace-builds)

https://stackoverflow.com/questions/29683677/how-to-require-ace-builds-ace-with-webpack-and-noparse-option

worker がサーバに存在する必要があるためエラーになる？

## [brace](https://github.com/thlorenz/brace)

https://asterisks.netlify.com/2016/07/03/errored-in-ace/

```sh
$ gulp
/tmp/work/Node.Gulp.Markdownit.Ace.20180426154856/webpack.config.js:16
  plugins: [new webpack.ResolverPlugin(
                ^

ReferenceError: webpack is not defined
    at Object.<anonymous> (/tmp/work/Node.Gulp.Markdownit.Ace.20180426154856/webpack.config.js:16:17)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/tmp/work/Node.Gulp.Markdownit.Ace.20180426154856/gulpfile.js:9:23)
    at Module._compile (module.js:660:30)
```
webpack.config.js
```js
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  // メインのJS
  entry: "./src/js/main.js",
  // 出力ファイル
  output: {
    filename: "./dst/js/bundle.js"
  },
  // ace start
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [new webpack.ResolverPlugin(
    new webpack.ResolverPlugin
      .DirectoryDescriptionFilePlugin("package.json", ["main"])
  )]
  // ace end
}
```

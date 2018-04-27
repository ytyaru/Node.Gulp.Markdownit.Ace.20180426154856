const webpack = require('webpack');
const path = require('path');

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
  /*
  // https://qiita.com/ryusaka/items/8778e3b2afcffc8e7ca6
  resolve: {
    //modules: [path.join(__dirname, 'src')],
    modules: [__dirname],
    extensions: ['.js', '.jsx'],
  }
  */
  /*
  resolve: {
    root: [path.resolve('./')],
    //extensions: ['', '.js']
  }
  // ace start
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [new webpack.ResolverPlugin(
    new webpack.ResolverPlugin
      .DirectoryDescriptionFilePlugin("package.json", ["main"])
  )]
  */
  // ace end
}

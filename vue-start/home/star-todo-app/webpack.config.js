const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    //진입점
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    //결과물에 대한 설정
    output: {
        filename: '[name].js', //app.js
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
    plugins: [
        new VueLoaderPlugin()
    ]
}
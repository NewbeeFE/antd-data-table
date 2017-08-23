const path = require('path')
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(less)/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  // plugins: [
  //   new DeclarationBundlerPlugin({
  //     moduleName: 'some.path.moduleName',
  //     out: 'index.d.ts',
  //   })
  // ]
}

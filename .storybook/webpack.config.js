const path = require('path')
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

module.exports = {
  entry: {
    DataTable: path.resolve(__dirname, '../src/index')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
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
  externals: process.env.CHOPPING === 'build' ? require('../package.json').external : [],
  // plugins: [
  //   new DeclarationBundlerPlugin({
  //     moduleName: 'some.path.moduleName',
  //     out: 'index.d.ts',
  //   })
  // ]
}

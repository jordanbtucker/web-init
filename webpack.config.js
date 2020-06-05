/* eslint-env node */
require('dotenv/config')
const path = require('path')
const {HotModuleReplacementPlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const serverConfig = require('./lib/server/config')

const config = {
  devtool: serverConfig.isDev ? 'source-map' : undefined,
  entry: ['./src/client/index.js'],
  mode: serverConfig.isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve('./dist/client'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      cache: false,
      template: './src/client/index.html',
    }),
  ],
}

if (serverConfig.isDev) {
  config.devServer = {
    contentBase: false,
    historyApiFallback: true,
    host: serverConfig.devClientHost,
    hot: true,
    index: '',
    overlay: true,
    port: serverConfig.devClientPort,
    proxy: {
      context: pathname => !pathname.match(/^\/sockjs-node\//),
      target: `http://${serverConfig.devServerHost}:${serverConfig.devServerPort}`,
      ws: true,
    },
    public: serverConfig.ngrokSubdomain
      ? `${serverConfig.ngrokSubdomain}.ngrok.io`
      : serverConfig.publicHost,
    writeToDisk: true,
  }

  config.plugins.push(new HotModuleReplacementPlugin())
}

module.exports = config

require('dotenv').config();
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: mode === 'development' ? 'bundle.js' : '[hash].bundle.js',
    globalObject: 'this',
    publicPath: '/'
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            name: () => {
              if (mode === 'development') {
                return 'assets/[name].[ext]';
              }

              return 'assets/[hash].[ext]';
            },
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.WEBPACK_PORT,
    open: false,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`,
      '/connect': {
        target: `ws://localhost:${process.env.PORT}`,
        ws: true,
      }
    },
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
      },
    })
  ]
};

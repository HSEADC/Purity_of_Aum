const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPages = require('./webpack.pages.js')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve('.', 'docs'),
    filename: '[name].js',
    clean: true,
    publicPath: './' 
  },
    module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
       test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
       type: 'asset/resource',
       generator: {
         filename: 'images/[hash][ext][query]'
       }
     },
       {
       test: /\.(ttf|otf|woff|woff2)$/i,
       type: 'asset/resource',
       generator: {
         filename: 'fonts/[hash][ext][query]'
       }
     }
    ],
  },
    plugins: [
      new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/share/"),
          to: path.resolve(__dirname, "dev_build/share/")
        },
        {
          from: path.resolve(__dirname, "src/share/"),
          to: path.resolve(__dirname, "docs/share/")
        },
      ],
    }),
      ...htmlPages, new MiniCssExtractPlugin()]
};


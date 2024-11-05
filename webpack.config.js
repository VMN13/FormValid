const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const express = require('express');
module.exports = (env) => {
  return {
   entry: {
    entry: path.join(__dirname, 'scripts', './script.js'),
   },
  mode: env.mode ?? 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  resolve: {
  
    fallback: {
     
      async_hooks: false,
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9090,
  },
  target: 'node',

externals: {
  express: 'express',
},
  plugins: [
   new HtmlWebpackPlugin( { template: path.resolve(__dirname, 'public', 'Form.html') }),
   new webpack.ProgressPlugin(),
   new NodePolyfillPlugin(),
  ]
 
  }
} 



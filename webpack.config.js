const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: {
                loader: "html-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template/index.html",
      filename: "./index.html",
      favicon: "./src/resources/images/favicon.ico"
    })
  ]
};
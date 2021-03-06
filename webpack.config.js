const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
            test: /\.(woff|woff2|eot|ttf)$/, 
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        { 
            test: /\.(png|svg)$/, 
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
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
    }),
    new CopyWebpackPlugin([{
        from: 'src/resources/images/', 
        to: 'images/'
    },
    {
        from: 'src/resources/data/', 
        to: 'data/'
    }])
  ]
};
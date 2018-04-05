const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'jquery', 'bootstrap'
];

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 4000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
          })
    ]
    
}

module.exports = config;
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'jquery', 'bootstrap',
];

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 4000,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        // This separate the user code from vendor code on 2 files.
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        // This extract the css in a external file.
        new ExtractTextPlugin('style.css'),
        // This append the link to load the css and the script element to load the bundle inside template.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],

};

module.exports = config;

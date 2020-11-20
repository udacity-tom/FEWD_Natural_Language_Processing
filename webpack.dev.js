const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const Myfile-loader = require{'file-loader'}
// const image-webpack-loader = require('image-webpack-loader')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //module loader for image loader
            {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader', 'url-loader',
                // Myfile-loader.loader,
                {
                    loader: 'image-webpack-loader',
                    options: {
                        name: '[path]/img/[name].[ext]',
                    }
                    // options: {
                    //     mozjpeg: {
                    //         progressive: true,
                    //         quality: 65
                    //     },
                    //     optipng: {
                    //         enabled: !isDevelopment
                    //     },
                    //     pngquant: {
                    //         quality: '65-90',
                    //         speed: 4
                    //     },
                    //     gifsicle: {
                    //         interlaced: false
                    //     },
                    //     webp: {
                    //         quality: 75
                    //     }
                    // }
                },
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.gif', '.png', '.jpg', 'jpeg', '.svg']
    },
    output: {
        libraryTarget: 'var', 
        library: 'jslib'
    },
}
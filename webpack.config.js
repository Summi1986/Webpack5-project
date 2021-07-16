const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
    mode: env.NODE_ENV || 'development',
    target: env.NODE_ENV === 'production' ? 'browserslist' : 'web',
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 8081,
        contentBase: path.join(__dirname, 'dist')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: 'babel-loader'
            }, 
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: "asset"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
})
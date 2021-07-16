const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
    mode: env.NODE_ENV || 'development',
    target: env.NODE_ENV === 'production' ? 'browserslist' : 'web',
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist')
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
})
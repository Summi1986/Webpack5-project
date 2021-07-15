const path = require('path');

module.exports = (env) => ({
    mode: env.NODE_ENV || 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: 'babel-loader'
            }
        ]
    }
})
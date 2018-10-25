const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const browserList = require('@instructure/supported-browsers');

module.exports = {
    mode: 'production',
    performance: {
        hints: 'error',
        maxEntrypointSize: 1000000,
        maxAssetSize: 1000000
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env', {
                            targets: browserList,
                            useBuiltIns: 'entry',
                            loose: true
                        }
                    ]]
                }
            }]
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};

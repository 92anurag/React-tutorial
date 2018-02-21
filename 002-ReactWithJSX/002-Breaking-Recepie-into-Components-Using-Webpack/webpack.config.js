var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
   entry: "./src/index.js",
    output: {
        path: `${BUILD_DIR}/assets`,
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader?presets[]=env,presets[]=stage-0,presets[]=react']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}

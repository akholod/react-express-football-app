const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
    path: path.join(__dirname, 'src', 'public' ,'bundle'),
    publicPath: '/src/public/',
    filename: 'bundle.js'
  },
  module: {
    //   preLoaders: [
    //         {
    //             test: /\.js$/,
    //             loaders: ['eslint'],
    //             include: [
    //                 path.resolve(__dirname,	'src'),
    //             ],
    //         }
    //     ],
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
             {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: require.resolve('file-loader')}
        ]
      },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};

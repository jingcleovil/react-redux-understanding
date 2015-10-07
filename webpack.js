var path = require('path');

var webpack = require('webpack');

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

    plugins.push(
        new webpack.optimize.DedupePlugin()
    )
}

module.exports = {
  entry: path.resolve(__dirname, './src/app/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime&stage=0'
      }
    ]
  },
  plugins: plugins
};

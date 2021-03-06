const path = require('path')

module.exports = {
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
  },
}

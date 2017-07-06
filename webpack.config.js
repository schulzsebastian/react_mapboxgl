module.exports = {
  entry: {
    'bundle': './src/index.js',
    'bundle.min': './src/index.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}

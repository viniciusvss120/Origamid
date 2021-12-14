const path = require('path')

module.exports = {
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, './'),
    __filename: 'exercicios.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-tranform-runtime'],
          },
        },
      },
    ],
  },
};
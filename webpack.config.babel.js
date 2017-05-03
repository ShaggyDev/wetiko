import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  entry: [
    path.join(__dirname, 'modules/UI/src/App.jsx'),
  ],
  output: {
    path: path.join(__dirname, "/modules/UI/dist/assets/js"),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './modules/UI/src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'modules/UI/src/'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style!css!sass',
      },
    ]
  },
});
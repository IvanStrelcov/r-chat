import path from 'path';
import webpack from 'webpack';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH = `${ROOT_PATH}/src`;
const API_URL = {
  production: JSON.stringify('http://localhost:3000/api'),
  development: JSON.stringify('http://localhost:3000/'),
};
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const CONFIG = {
  target: 'web',
  entry: `${APP_PATH}/index`,
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [APP_PATH, 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      API_URL: API_URL[environment],
    }),
  ],
};

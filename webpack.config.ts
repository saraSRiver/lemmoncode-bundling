import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "./src"),
  entry: ["./hola-mundo.ts", "./styles.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader","css-loader","sass-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
      },
    ]
  }
};

export default config;
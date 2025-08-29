const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-web-components.js",
    library: "MyWebComponents",
    libraryTarget: "umd", // gera bundle UMD para uso global
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["to-string-loader", "css-loader"] // transforma CSS em string
      },
      {
        test: /\.html$/i,
        loader: "raw-loader" // importa HTML como string
      }
    ]
  },
  mode: "production"
};

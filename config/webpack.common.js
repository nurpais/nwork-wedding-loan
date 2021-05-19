const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
  },
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
    pathinfo: false,
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // // Prettier configuration
    // new PrettierPlugin({
    //   tabWidth: 2,
    //   printWidth: 80,
    //   extensions: [".html"],
    // }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: paths.src + "/index.html", // template file
      filename: "index.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/resources.html", // template file
      filename: "resources.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/search-result.html", // template file
      filename: "search-result.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/about.html", // template file
      filename: "about.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/form.html", // template file
      filename: "form.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/article.html", // template file
      filename: "article.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/faq.html", // template file
      filename: "faq.html", // output file
      minify: false,
      scriptLoading: "blocking",
    }),
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(?:svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/svg/[name][ext]",
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
};

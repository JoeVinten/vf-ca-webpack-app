const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	entry: "./src/index.js",
	target: "web",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		port: 3000,
	},
	module: {
		rules: [
			{
				exclude: "/node_modules/",
				test: /.js$|jsx/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				loader: "css-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
	],
}

import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import ESLintPlugin from "eslint-webpack-plugin";
import { resolve } from "path";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	target: "web",
	output: {
		filename: "[name].bundle.js",
		path: resolve(__dirname, "build"),
		clean: true,
	},
	devServer: {
		static: [resolve(__dirname, "./build")],
		allowedHosts: "all",
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	plugins: [
		new ESLintPlugin({
			lintDirtyModulesOnly: true,
			extensions: ["js", "jsx"],
			exclude: ["node_modules"],
		}),
	],
});

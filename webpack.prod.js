import { merge } from "webpack-merge";
import CompressionPlugin from "compression-webpack-plugin";
import { constants } from "zlib";
import common from "./webpack.common.js";
import { resolve } from "path";

import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: resolve(__dirname, "build"),
	},
	optimization: {
		usedExports: true,
		minimize: true
	},
	plugins: [
		new CompressionPlugin({
			exclude: /.map$/,
			algorithm: "brotliCompress",
			compressionOptions: {
				params: {
					[constants.BROTLI_PARAM_QUALITY]: 11,
				},
			},
		}),
	],
});

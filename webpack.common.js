import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {
	context: path.join(__dirname, "src"),
	entry: {
		app: ["./index.tsx"]
	},
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
					reuseExistingChunk: true,
					idHint: "vendors",
				},
			},
		},
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loader: 'ts-loader'
		},
		{
			test: /\.svg/,
			type: 'asset/inline'
		}]
	},
	resolve:
	{
		extensions: ['.tsx', '.ts', '.js'],
	},
	target: ["web", "es2022"],
	plugins: [new HtmlWebpackPlugin({
		templateContent: `
			<html>
				<head>
					<meta charset="utf-8"/>
					<title>QL</title>
		  		</head>
				<body>
					<div id="root"></div>
				</body>
			</html>
  ` })],
	experiments: {
		topLevelAwait: true,
	},
};

export default config;
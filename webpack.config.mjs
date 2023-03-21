import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

const __dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname).slice(1));

export default {
	entry: {
		'kh-slider': './src/slider/Slider.js',
		main: './src/main.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [autoprefixer],
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
			chunks: ['kh-slider', 'main'],
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
};

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

export default {
	name: 'express-server',
	entry: './src/index.ts',
	target: 'node18',
	mode: NODE_ENV,
	externals: [nodeExternals()],
	// experiments: {
	// 	outputModule: true
	// },
	output: {
		path: join(dirname(fileURLToPath(import.meta.url)), './dist'),
		filename: 'index.cjs',
		// module: true,
		clean: true
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	}
	// watch: true
};

/**
 * External dependencies
 */
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import path from 'path';

/**
 * Internal dependencies
 */
const packageJson = require('./package.json');

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
	],
	external: ['react/jsx-runtime'],
	plugins: [
		scss({
			sourceMap: true,
			includePaths: [
				path.join(__dirname, '../../node_modules/'),
				'node_modules/',
			],
		}),
		// commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['**/*.stories.*'],
		}),
	],
};

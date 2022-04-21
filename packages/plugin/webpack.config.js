/**
 * External dependencies
 */
const glob = require('glob');

/**
 * WordPress dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		render: {
			import: glob.sync('src/*/render.tsx', { absolute: true }),
			filename: 'render.js',
		},
	},
};

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
// import { withSelect } from '@wordpress/data';

/**
 * External dependencies
 */
import * as React from '@wordpress/element';
// import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('kww/header', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});

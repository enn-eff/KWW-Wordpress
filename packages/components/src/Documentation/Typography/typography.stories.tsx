/**
 * External dependencies
 */
import * as React from 'react';
import { Meta, Typeset } from '@storybook/addon-docs/blocks';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Typography } from './typography';

export default {
	title: 'Documentation/Typography',
	component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => (
	<>
		<Typography style={{ maxWidth: '800px', margin: 'auto' }} />
	</>
);

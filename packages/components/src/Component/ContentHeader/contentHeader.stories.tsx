/**
 * External dependencies
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExampleBackgroundImageWithImageUrl from '../../../public/feature_icon_one.svg';
import ExampleBackgroundImageWithoutImageUrl from '../../../public/feature_icon_two.svg';

/**
 * Internal dependencies
 */
import { ContentHeader } from './contentHeader';

export default {
	title: 'Component/ContentHeader',
	argTypes: {},
	excludeStories: /Example.+/,
} as ComponentMeta<typeof ContentHeader>;

const Template: ComponentStory<typeof ContentHeader> = ({
	imageUrl,
	backgroundImageUrl,
	...rest
}) => {
	const hasImage = !!imageUrl;
	const dynamicBackgroundImageUrl = hasImage
		? ExampleBackgroundImageWithImageUrl
		: ExampleBackgroundImageWithoutImageUrl;

	return (
		<ContentHeader
			backgroundImageUrl={dynamicBackgroundImageUrl}
			imageUrl={imageUrl}
			{...rest}
		/>
	);
};

export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
	title: 'Hi there',
	imageUrl: 'test',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
	title: 'Hi there',
};

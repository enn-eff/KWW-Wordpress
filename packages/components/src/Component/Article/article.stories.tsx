/**
 * External dependencies
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExampleArticleFallbackImageUrl from '../../../public/feature_icon_two.svg';

/**
 * Internal dependencies
 */
import { Article } from './article';

export default {
	title: 'Component/Article',
	argTypes: {},
	excludeStories: /Example.+/,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = ({
	imageUrl,
	backgroundImageUrl,
	...rest
}) => {
	const hasImage = !!imageUrl;
	const dynamicBackgroundImageUrl = hasImage
		? imageUrl
		: ExampleArticleFallbackImageUrl;

	return (
		<Article
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

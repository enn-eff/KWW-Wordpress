/**
 * External dependencies
 */
import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Hero } from './hero';

// @ts-ignore
import ExampleImageUrl from '../../../public/hero_image.jpg';
import ExampleBackgroundImageUrl from '../../../public/hero_background.svg';

export const ExampleHeroText = () => (
	<span>
		Für <i>menschenzentrierte</i> Künstliche Intelligenz in kleinen und
		mittleren Unternehmen
	</span>
);

export const ExampleHeroProps = {
	imageUrl: ExampleImageUrl,
	backgroundImageUrl: ExampleBackgroundImageUrl,
};

export default {
	title: 'Component/Hero',
	component: Hero,
	excludeStories: /Example.+/,
	parameters: {
		// layout: 'centered',
	},
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = () => (
	<div
		style={{
			maxWidth: '1200px',
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
	>
		<Hero {...ExampleHeroProps}>
			<ExampleHeroText />
		</Hero>
	</div>
);

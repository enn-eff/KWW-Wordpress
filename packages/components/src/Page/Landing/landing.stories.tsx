/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import { Header } from '../../Component/Header/header';
import {
	ExampleNavigation,
	ExampleNavigationElementsMain,
} from '../../Component/Navigation/navigation.stories';
import { ExampleHeaderProps } from '../../Component/Header/header.stories';
import { Hero } from '../../Component/Hero/hero';
import {
	ExampleHeroProps,
	ExampleHeroText,
} from '../../Component/Hero/hero.stories';

export default {
	title: 'Page/Landing',
	excludeStories: /Example.+/,
	// parameters: {
	// 	layout: 'centered',
	// },
};

export const Default = () => (
	<div
		style={{
			maxWidth: '1200px',
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
	>
		<Header style={{ marginTop: '0' }} {...ExampleHeaderProps}>
			<ExampleNavigation
				navigationElements={ExampleNavigationElementsMain}
			/>
		</Header>
		<div style={{ height: '25px' }} />
		<Hero {...ExampleHeroProps}>
			<ExampleHeroText />
		</Hero>
	</div>
);

/**
 * External dependencies
 */
import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Header } from './header';
import {
	ExampleNavigation,
	ExampleNavigationElementsMain,
} from '../Navigation/navigation.stories';

import ExamplePageLogoUrl from '../../../public/page_logo.svg';
import ExampleFundingLogoUrl from '../../../public/funder_logo_two.svg';

export const ExampleHeaderProps = {
	pageLogoUrl: ExamplePageLogoUrl,
	fundingLogoUrl: ExampleFundingLogoUrl,
};

export default {
	title: 'Component/Header',
	parameters: {
		layout: 'fullscreen',
	},
	component: Header,
	excludeStories: /Example.+/,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
	<>
		<Header {...ExampleHeaderProps}>
			<ExampleNavigation
				navigationElements={ExampleNavigationElementsMain}
			/>
		</Header>
	</>
);

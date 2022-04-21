/**
 * External dependencies
 */
import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import {
	Navigation,
	NavigationElement,
	NavigationElementProps,
} from './navigation';

export const ExampleNavigationElementsMain: any[] = [
	{
		title: 'KI Wissenspool',
		isDisabled: true, // We have no "KI Wissenspool" page in first MVP but Children have still to be clickable
		url: '#',
		navigationElements: [
			{
				title: 'KI-Check einfach gemacht',
				url: '#',
			},
			{
				title: 'KI verstehen und nutzen',
				url: '#',
			},
			{
				title: 'KI für gute Arbeit',
				url: '#',
			},
		],
	},
	{
		title: 'Das KIWW',
		url: '#',
		isActive: true,
		navigationElements: [
			{
				title: 'Aktuelles',
				url: '#',
			},
			{
				title: 'Projektpartner',
				url: '#',
			},
		],
	},
	{
		title: 'Die Zukunftszentren',
		url: '#',
	},
	{
		title: 'Kontakt',
		url: '#',
		navigationElements: [
			{
				title: 'Das KIWW-Team',
				url: '#',
			},
			{
				title: 'Newsletter',
				url: '#',
			},
		],
	},
];

export const ExampleNavigationElementsLegal: any[] = [
	{
		title: 'Impressum',
		url: '#',
	},
	{
		title: 'Datenschutz',
		url: '#',
	},
	{
		title: 'Bildnachweise',
		url: '#',
	},
];

export const ExampleNavigation = ({
	navigationElements,
}: {
	navigationElements: NavigationElementProps[];
}) => (
	<Navigation>
		{navigationElements.map((navigationElement, i: number) => (
			<NavigationElement key={i} {...navigationElement} />
		))}
	</Navigation>
);

export default {
	title: 'Component/Navigation',
	component: Navigation,
	excludeStories: /Example.+/,
} as ComponentMeta<typeof Navigation>;

export const Main: ComponentStory<typeof Navigation> = () => (
	<>
		<ExampleNavigation navigationElements={ExampleNavigationElementsMain} />
	</>
);

export const Legal: ComponentStory<typeof Navigation> = () => (
	<>
		<ExampleNavigation
			navigationElements={ExampleNavigationElementsLegal}
		/>
	</>
);

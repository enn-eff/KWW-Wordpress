/**
 * External dependencies
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExampleIconUrlOne from '../../../public/feature_icon_one.svg';
import ExampleIconUrlTwo from '../../../public/feature_icon_two.svg';
import ExampleIconUrlThree from '../../../public/feature_icon_three.svg';

/**
 * Internal dependencies
 */
import { Feature } from './feature';

export default {
	title: 'Component/Feature',
	argTypes: {
		iconUrl: {
			options: [
				ExampleIconUrlOne,
				ExampleIconUrlTwo,
				ExampleIconUrlThree,
			],
			control: {
				type: 'select',
			},
		},
		highlightColor: {
			control: {
				type: 'color',
				presetsColors: ['#ff0000', '#00ff00', '#0000ff'],
			},
		},
		title: { control: 'text', defaultValue: 'KI-Check einfach gemacht' },
		description: {
			control: 'text',
			defaultValue:
				'Überprüfen Sie, wo Ihr Unternehmen bei der Anwendung von KI steht',
		},
		buttonTitle: {
			control: 'text',
			defaultValue: 'mehr',
		},

		buttonUrl: {
			control: 'text',
			defaultValue: '#',
		},
	},
	excludeStories: /Example.+/,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = ({ ...rest }) => {
	return <Feature {...rest} />;
};

export const Default = Template.bind({});

export const LonText = Template.bind({});
LonText.args = {
	title: 'Hi there',
	description:
		'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
};

export const shortText = Template.bind({});
shortText.args = {
	title: 'Hi there',
	description: 'l ipsumlorem ipsum',
};

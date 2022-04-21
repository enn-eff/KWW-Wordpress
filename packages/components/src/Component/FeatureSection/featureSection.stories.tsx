/**
 * External dependencies
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExampleIconUrlOne from '../../../public/feature_icon_one.svg';

/**
 * Internal dependencies
 */
import { FeatureSection } from './featureSection';
import { Feature } from '../Feature/feature';

export default {
	title: 'Component/FeatureSection',
} as ComponentMeta<typeof FeatureSection>;

const Template: ComponentStory<typeof FeatureSection> = ({ ...rest }) => {
	//👇 Assigns the result from the function to a variable
	return (
		<FeatureSection {...rest}>
			<Feature
				iconUrl={ExampleIconUrlOne}
				highlightColor={'#999'}
				title={'Test'}
				description={'Test2'}
			/>
			<Feature
				highlightColor={'#999'}
				title={'Test'}
				iconUrl={ExampleIconUrlOne}
				description={'Test2'}
			/>
			<Feature
				highlightColor={'#999'}
				title={'Test'}
				description={'Test2'}
			/>
		</FeatureSection>
	);
};

export const Default = Template.bind({});

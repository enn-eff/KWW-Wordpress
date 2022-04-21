/**
 * External dependencies
 */
import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Footer } from './footer';
import {
	ExampleNavigation as ExampleNavigationMenu, // Prevent name collision with local naming
	ExampleNavigationElementsLegal,
	ExampleNavigationElementsMain,
} from '../Navigation/navigation.stories';

import ExamplePartnerLogoOneUrl from '../../../public/partner_logo_one.svg';
import ExamplePartnerLogoTwoUrl from '../../../public/partner_logo_two.png';
import ExamplePartnerLogoThreeUrl from '../../../public/partner_logo_three.jpg';
import ExamplePartnerLogoFourUrl from '../../../public/partner_logo_four.png';
import ExampleFunderLogoOneUrl from '../../../public/funder_logo_one.svg';
import ExampleFunderLogoTwoUrl from '../../../public/funder_logo_two.svg';

export default {
	title: 'Component/Footer',
	parameters: {
		layout: 'fullscreen',
	},
	component: Footer,
	excludeStories: /Example.+/,
} as ComponentMeta<typeof Footer>;

export const ExampleAssociates = () => (
	<Footer.Associates
		fundingDescription={
			'Das Projekt KI Wissens- und Weiterbildungszentrum KWW wird im Rahmen des Programms "Zukunftszentren ' +
			'(KI) durch das Bundesministerium für Arbeit und Soziales gefördert'
		}
		funders={
			<>
				<Footer.Associate imageUrl={ExampleFunderLogoOneUrl} />
				<Footer.Associate imageUrl={ExampleFunderLogoTwoUrl} />
			</>
		}
		partnerDescription={'Partner:'}
		partners={
			<>
				<Footer.Associate imageUrl={ExamplePartnerLogoOneUrl} />
				<Footer.Associate imageUrl={ExamplePartnerLogoTwoUrl} />
				<Footer.Associate imageUrl={ExamplePartnerLogoThreeUrl} />
				<Footer.Associate imageUrl={ExamplePartnerLogoFourUrl} />
			</>
		}
	></Footer.Associates>
);

export const ExampleNavigation = () => (
	<Footer.Navigation
		mainNavigation={
			<ExampleNavigationMenu
				navigationElements={ExampleNavigationElementsMain}
			/>
		}
		legalNavigation={
			<ExampleNavigationMenu
				navigationElements={ExampleNavigationElementsLegal}
			/>
		}
		copyrightText={'2022 copyright KIWW'}
	/>
);

export const Associates: ComponentStory<typeof Footer.Associates> = () => {
	return <ExampleAssociates />;
};

export const Navigation: ComponentStory<typeof Footer.Navigation> = () => {
	return <ExampleNavigation />;
};

export const Default: ComponentStory<typeof Footer.Navigation> = () => {
	return (
		<Footer>
			<ExampleAssociates />
			<ExampleNavigation />
		</Footer>
	);
};

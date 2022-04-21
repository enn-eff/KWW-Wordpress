/**
 * WordPress dependencies
 */
import { render, Suspense } from '@wordpress/element';

/**
 * External dependencies
 */
import {
	Header,
	HeaderProps,
	Navigation,
	NavigationElement,
	NavigationElementProps,
} from '@kww/components';

/**
 * Internal dependencies
 */
import { parseProps } from '../../util';

window.addEventListener('DOMContentLoaded', () => {
	const element = document.querySelector('.wp-block-kww-header');

	if (element instanceof HTMLElement) {
		const parsedProps = parseProps(element.dataset);

		const { pageLogoUrl, fundingLogoUrl, fundingLogoExternalUrl } =
			parsedProps;
		const menuItems: NavigationElementProps[] = parsedProps.menuItems;

		Object.keys(element.dataset).forEach((dataKey) => {
			delete element.dataset[dataKey];
		});

		render(
			<Suspense fallback={<div className="wp-block-placeholder" />}>
				<Header
					pageLogoUrl={pageLogoUrl}
					fundingLogoUrl={fundingLogoUrl}
					fundingLogoExternalUrl={fundingLogoExternalUrl}
				>
					{Array.isArray(menuItems) && (
						<Navigation>
							{menuItems.map((navigationElement) => (
								<NavigationElement
									key={navigationElement.id}
									{...navigationElement}
								/>
							))}
						</Navigation>
					)}
				</Header>
			</Suspense>,
			element
		);
	}
});

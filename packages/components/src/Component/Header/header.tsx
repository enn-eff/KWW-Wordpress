/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface HeaderProps {
	pageLogoUrl?: string;
	fundingLogoUrl?: string;
	fundingLogoExternalUrl?: string;
	children?: ReactNode;
	className?: string;

	[x: string]: any;
}

export const Header = ({
	pageLogoUrl,
	fundingLogoUrl,
	fundingLogoExternalUrl = '#',
	children,
	className,
	...restProps
}: HeaderProps) => {
	className = [className, 'header'].filter((i) => !!i).join(' ');

	return (
		<header className={className} {...restProps}>
			{pageLogoUrl && (
				<a href={'/'} className="header__branding">
					<img
						src={pageLogoUrl}
						alt="Page logo"
						className="header__branding-logo"
					/>
				</a>
			)}

			{!!children && <div className="header__navigation">{children}</div>}

			{fundingLogoUrl && (
				<a
					href={fundingLogoExternalUrl}
					target={fundingLogoExternalUrl === '#' ? '' : '_blank'}
					className="header__funding"
					rel="noreferrer"
				>
					<img
						src={fundingLogoUrl}
						alt="Funding logo"
						className="header__funding-logo"
					/>
				</a>
			)}
		</header>
	);
};

/**
 * External dependencies
 */
import React, { ReactNode, ReactElement } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface FooterAssociateProps {
	imageUrl: string;
	url?: string;
	className?: string;

	[x: string]: any;
}

export const FooterAssociate = ({
	imageUrl,
	url,
	className,
	...restProps
}: FooterAssociateProps) => {
	className = [className, 'footer__associate'].filter((i) => !!i).join(' ');

	const image = <img src={imageUrl} alt="Logo url" />;

	return (
		<span className={className} {...restProps}>
			{url ? <a href={url}>{image}</a> : image}
		</span>
	);
};

export interface FooterAssociatesProps {
	fundingDescription: string | ReactNode;
	funders: ReactNode;
	partnerDescription: string | ReactNode;
	partners: ReactNode;
	className?: string;

	[x: string]: any;
}

export const FooterAssociates = ({
	fundingDescription,
	funders,
	partnerDescription,
	partners,
	className,
	...restProps
}: FooterAssociatesProps) => {
	className = [className, 'footer__associates'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			<div className="footer__associates-content">
				<div className="associates associates--funders">
					<div className="associates__description">
						{fundingDescription}
					</div>
					<div className="associates__logos">{funders}</div>
				</div>
				<div className="associates associates--partners">
					<div className="associates__description">
						{partnerDescription}
					</div>
					<div className="associates__logos">{partners}</div>
				</div>
			</div>
		</div>
	);
};

export interface FooterNavigationProps {
	mainNavigation: ReactNode;
	legalNavigation: ReactNode;
	copyrightText: string | ReactNode;
	className?: string;

	[x: string]: any;
}

export const FooterNavigation = ({
	mainNavigation,
	legalNavigation,
	copyrightText,
	className,
	...restProps
}: FooterNavigationProps) => {
	className = [className, 'footer__navigation'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			<div className="footer__navigation-content">
				<div className="footer__navigation-row">{mainNavigation}</div>
				<div className="footer__navigation-row">
					{legalNavigation}
					{copyrightText}
				</div>
			</div>
		</div>
	);
};

export interface FooterProps {
	children: ReactNode;
	className?: string;
	[x: string]: any;
}

export const Footer = ({
	children,
	url,
	className,
	...restProps
}: FooterProps) => {
	className = [className, 'footer'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			{children}
		</div>
	);
};

Footer.Associate = FooterAssociate;
Footer.Associates = FooterAssociates;
Footer.Navigation = FooterNavigation;

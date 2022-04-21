/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

/*
States:
- Hover
*/

export interface FeatureProps {
	iconUrl?: string;
	highlightColor?: string;
	title: string | ReactNode;
	description: string | ReactNode;
	buttonUrl?: string;
	buttonTitle?: string;
	className?: string;
	[x: string]: any;
}

export const Feature = ({
	iconUrl,
	highlightColor = '#000',
	title,
	description,
	buttonUrl,
	buttonTitle = 'mehr',
	className,
	...restProps
}: FeatureProps) => {
	className = [className, 'feature'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			<div className="feature__header">
				{iconUrl && <img src={iconUrl} alt="Feature icon" />}
			</div>
			{title && <div className="feature__title">{title}</div>}
			{description && (
				<div className="feature__description">{description}</div>
			)}
			{buttonUrl && (
				<div className="feature__button">
					<a href={buttonUrl}>{buttonTitle}</a>
				</div>
			)}
		</div>
	);
};

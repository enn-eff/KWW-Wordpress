/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface FeatureSectionProps {
	children?: ReactNode;
	className?: string;
	[x: string]: any;
}

export const FeatureSection = ({
	children,
	className,
	...restProps
}: FeatureSectionProps) => {
	className = [className, 'feature-section'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			{children}
		</div>
	);
};

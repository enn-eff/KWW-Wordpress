/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface ContentSectionProps {
	title: string | ReactNode;
	fontSize: string | number;
	fontWeight: string | number;
	children: ReactNode;
	className?: string;
	[x: string]: any;
}

export const ContentSection = ({
	title,
	children,
	className,
	...restProps
}: ContentSectionProps) => {
	className = [className, 'content-section'].filter((i) => !!i).join(' ');

	return (
		<section className={className} {...restProps}>
			{children}
		</section>
	);
};

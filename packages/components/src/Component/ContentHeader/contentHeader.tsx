/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

// Currently used on Landing-Page to present FutureCenters
export interface ContentHeaderProps {
	title: string | ReactNode;
	imageUrl?: string;
	backgroundImageUrl: string;
	breadcrumbs?: ReactNode;
	highlightColor?: string;
	className?: string;

	[x: string]: any;
}

export const ContentHeader = ({
	title,
	imageUrl,
	backgroundImageUrl,
	breadcrumbs,
	highlightColor,
	className,
	...restProps
}: ContentHeaderProps) => {
	className = [
		className,
		'content-header',
		!!imageUrl ? 'content-header--with-image' : 'content-header--no-image',
	]
		.filter((i) => !!i)
		.join(' ');

	return (
		<div className={className} {...restProps}>
			<pre>
				<p>Image: {imageUrl}</p>
				<p>Background: {backgroundImageUrl}</p>
			</pre>
		</div>
	);
};

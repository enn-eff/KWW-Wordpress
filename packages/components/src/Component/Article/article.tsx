/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface ArticleProps {
	imageUrl: string;
	date?: string;
	title: string | ReactNode;
	excerpt: string | ReactNode;
	hasHighlight?: boolean;
	highlightColor?: string;
	url: string;
	className?: string;
	[x: string]: any;
}

export const Article = ({
	imageUrl,
	date,
	title,
	excerpt,
	hasHighlight,
	highlightColor,
	url,
	className,
	...restProps
}: ArticleProps) => {
	className = [className, 'article'].filter((i) => !!i).join(' ');

	return (
		<button className={className} {...restProps}>
			{imageUrl}
		</button>
	);
};

/*
Quotation
 */

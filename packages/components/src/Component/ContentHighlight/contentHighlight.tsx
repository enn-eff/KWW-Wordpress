/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

// Currently used in FutureCenters to display a table
export interface ContentHighlightProps {
	title: string | ReactNode;
	highlightColor?: string;
	backgroundImageUrl?: string;
	children: ReactNode;
	className?: string;
	[x: string]: any;
}

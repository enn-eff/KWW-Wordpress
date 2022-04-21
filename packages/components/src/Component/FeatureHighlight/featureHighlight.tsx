/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

// Currently used on Landing-Page to present FutureCenters
export interface FeatureHighlightProps {
	title: string | ReactNode;
	description: string | ReactNode;
	buttonUrl?: string;
	buttonTitle?: string;
	highlightColor?: string;
	imageUrl?: string;
	backgroundImageUrl?: string;
	className?: string;
	[x: string]: any;
}

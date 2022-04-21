/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface QuotationProps {
	children?: string | ReactNode;
	originator: string | ReactNode;
	highlightColor: string;
	className?: string;
	[x: string]: any;
}

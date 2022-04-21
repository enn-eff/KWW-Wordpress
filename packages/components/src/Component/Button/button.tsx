/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface ButtonProps {
	children?: ReactNode; // Contains title/icon/...
	url: string;
	className?: string;
	[x: string]: any;
}

export const Button = ({
	children,
	url,
	className,
	...restProps
}: ButtonProps) => {
	className = [className, 'button'].filter((i) => !!i).join(' ');

	return (
		<button className={className} {...restProps}>
			{children}
		</button>
	);
};

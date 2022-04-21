/**
 * External dependencies
 */
import React, { ReactNode, useState } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface NavigationSubmenuProps {
	children?: ReactNode;
	className?: string;
	[x: string]: any;
}

export const NavigationSubmenu = ({
	children,
	className,
	...restProps
}: NavigationSubmenuProps) => {
	className = [className, 'navigation__submenu'].filter((i) => !!i).join(' ');

	return (
		<div className={className} {...restProps}>
			{children}
		</div>
	);
};

export interface NavigationElementProps {
	title: string;
	url: string;
	isActive?: boolean;
	isDisabled?: boolean;
	submenu?: NavigationElementProps[]; // Contains sub-menu elements
	className?: string;
	[x: string]: any;
}

export const NavigationElement = ({
	title,
	url,
	isActive,
	isDisabled,
	navigationElements,
	className = 'navigation__element',
	...restProps
}: NavigationElementProps) => {
	className = [
		className,
		'navigation__element',
		navigationElements && 'navigation__element--has-children',
		isActive && 'navigation__element--active',
		isDisabled && 'navigation__element--disabled',
	]
		.filter((i) => !!i)
		.join(' ');

	const [isHovering, setIsHovering] = useState(false);

	return (
		<div
			className={className}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			{...restProps}
		>
			<a className={'navigation__element-title'} href={url}>
				{title}
			</a>
			{Array.isArray(navigationElements) &&
				navigationElements.length &&
				isHovering && (
					<NavigationSubmenu>
						{navigationElements.map((navigationElement, i) => {
							return (
								<NavigationElement
									key={i}
									{...navigationElement}
								/>
							);
						})}
					</NavigationSubmenu>
				)}
		</div>
	);
};

export interface NavigationProps {
	children?: ReactNode;
	className?: string;
	[x: string]: any;
}

export const Navigation = ({
	children,
	className,
	...restProps
}: NavigationProps) => {
	className = [className, 'navigation'].filter((i) => !!i).join(' ');

	return (
		<nav className={className} {...restProps}>
			{children}
		</nav>
	);
};

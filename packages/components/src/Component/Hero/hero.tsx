/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

export interface HeroProps {
	imageUrl?: string;
	backgroundImageUrl?: string;
	children?: ReactNode;
	className?: string;
	[x: string]: any;
}

export const Hero = ({
	imageUrl,
	backgroundImageUrl,
	children,
	className,
	...restProps
}: HeroProps) => {
	className = [className, 'hero'].filter((i) => !!i).join(' ');

	return (
		<section className={className} {...restProps}>
			{imageUrl && (
				<img src={imageUrl} alt="Hero" className="hero__image" />
			)}

			<div className="hero__content">
				{backgroundImageUrl && (
					<img
						src={backgroundImageUrl}
						alt="Hero background"
						className="hero__background-image"
					/>
				)}
				{!!children && <h2 className={'hero__text'}>{children}</h2>}
			</div>
		</section>
	);
};

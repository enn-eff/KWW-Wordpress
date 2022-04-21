/**
 * Internal dependencies
 */
import './style.scss';
/**
 * External dependencies
 */
import React from 'react';

const normalText = [
	{ kind: 'p', text: 'Body copy, paragraph', styling: '16px, Regular' },
	{ kind: 'p', text: 'Label (form)', styling: '14px, SemiBold' },
	{ kind: 'code', text: 'Code', styling: 'Monospace, 16px, Regular' },
	{ kind: 'sup', text: 'Sup', styling: '11px, Regular' },
	{ kind: 'p', text: 'Inline highlight', styling: '14px, SemiBold' },
];

const headingText = [
	{ kind: 'h1', text: 'Heading 1', styling: '2em, Medium' },
	{ kind: 'h2', text: 'Heading 2', styling: '1.5em, Medium' },
	{ kind: 'h3', text: 'Heading 3', styling: '1.17em, Medium' },
	{ kind: 'h4', text: 'Heading 4', styling: '1em, Medium' },
	{ kind: 'h5', text: 'Heading 5', styling: '0.83em, Medium' },
	{ kind: 'h6', text: 'Heading 6', styling: '0.75em, Medium' },
];

export const Typography = ({ ...restProps }: any) => (
	<div {...restProps}>
		<div>
			<h3>Headings</h3>
			<p>
				Typographic scale when using headings in text component. Font:{' '}
				<strong>Fira Mono</strong>
			</p>
			<div className="card-box">
				{headingText.map((e) => (
					<div key={e.kind} style={{ paddingLeft: '0.5rem' }}>
						{React.createElement(e.kind, null, e.text)}
						<div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
							{e.styling}
						</div>
					</div>
				))}
			</div>
		</div>

		<div>
			<h3>Text</h3>
			<p>
				Typographic scale for normal text. Font:{' '}
				<strong>Montserrat</strong>
			</p>
			<div className="card-box">
				{normalText.map((e) => (
					<div key={e.kind} style={{ paddingLeft: '0.5rem' }}>
						{React.createElement(e.kind, null, e.text)}
						<div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
							{e.styling}
						</div>
					</div>
				))}
			</div>
		</div>

		<div>
			<h3>Links</h3>
			<p>Typographic scale for links</p>
			<div className="card-box">
				<div style={{ paddingLeft: '0.5rem' }}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href={'#'}>Link</a>
					<div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
						16px, Regular
					</div>
				</div>
			</div>
		</div>

		<div>
			<h3>Lists</h3>
			<p>
				Typographic scale for lists of items int he different
				variations: ordered and unordered
			</p>
			<div className="card-box">
				<div style={{ paddingLeft: '0.5rem' }}>
					<h4>Ordered lists</h4>
					<ol>
						<li>Ordered List 1</li>
						<li>Ordered List 2</li>
						<li>Ordered List 3</li>
					</ol>
				</div>
				<div style={{ paddingLeft: '0.5rem' }}>
					<h4>Numbered List</h4>
					<ul>
						<li>Numbered List 1</li>
						<li>Numbered List 2</li>
						<li>Numbered List 3</li>
					</ul>
				</div>
			</div>
		</div>

		<div>
			<h3>Text Style</h3>
			<p>Typographic scale for custom text styles</p>
			<div className="card-box">
				<div style={{ paddingLeft: '0.5rem' }}>
					<h1>
						Text with <mark>marker</mark> highlight
					</h1>
					<h2>
						Text with <mark>marker</mark> highlight
					</h2>
					<p>
						Text with <mark>marker</mark> highlight
					</p>
				</div>
			</div>
		</div>

		<div>
			<h3>Anchor Style</h3>
			<div className="card-box">
				<div style={{ paddingLeft: '0.5rem' }}>
					<a href="https://#">Test Anchor</a>
				</div>
			</div>
		</div>
	</div>
);

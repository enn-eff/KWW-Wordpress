/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	Button,
	SelectControl,
	ResponsiveWrapper,
	TextControl,
} from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * External dependencies
 */
import {
	Header,
	Navigation,
	NavigationElement,
	NavigationElementProps,
} from '@kww/components';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		pageLogoId,
		pageLogoUrl,
		fundingLogoId,
		fundingLogoUrl,
		fundingLogoExternalUrl,
		menuId,
	} = attributes;

	const menus = useSelect((select) => {
		return select(coreStore).getMenus();
	}, []);

	const menuItems: NavigationElementProps[] = useSelect(
		(select) => {
			if (menuId === 0) {
				return null;
			}

			const rawMenuItems = select(coreStore).getMenuItems({
				menus: menuId,
				per_page: -1,
			});

			let parsedMenuItems;

			if (Array.isArray(rawMenuItems)) {
				parsedMenuItems = rawMenuItems.map((menuItem) => {
					return {
						id: menuItem.id,
						title: menuItem.title?.raw,
						url: menuItem.url,
					};
				});
			}

			return parsedMenuItems;
		},
		[menuId]
	);

	const onSelectPageLogo = (media) => {
		setAttributes({
			pageLogoId: media.id,
			pageLogoUrl: media.url,
		});
	};

	const onMenuSelect = (selectedMenuId) => {
		setAttributes({
			menuId: parseInt(selectedMenuId, 10),
		});
	};

	const onSelectFundingLogo = (media) => {
		setAttributes({
			fundingLogoId: media.id,
			fundingLogoUrl: media.url,
		});
	};

	const onChangeFundingUrl = (value) => {
		setAttributes({
			fundingLogoExternalUrl: value,
		});
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Page logo:', 'kww')} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={onSelectPageLogo}
							value={pageLogoId}
							render={({ open }) => (
								<Button
									className={
										pageLogoId === 0
											? 'editor-post-featured-image__toggle'
											: 'editor-post-featured-image__preview'
									}
									onClick={open}
								>
									{pageLogoId === 0
										? __('Select image', 'kww')
										: __('Replace image', 'kww')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title={__('Menu', 'kww')} initialOpen={true}>
					{Array.isArray(menus) && (
						<SelectControl
							label={__('Select menu', 'kww')}
							value={menuId}
							options={[
								{
									label: __('---', 'kww'),
									value: 0,
								},
								...menus.map((menu) => ({
									label: menu.name,
									value: menu.id,
								})),
							]}
							onChange={onMenuSelect}
						/>
					)}
				</PanelBody>
				<PanelBody title={__('Funding', 'kww')} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={onSelectFundingLogo}
							value={fundingLogoId}
							render={({ open }) => (
								<Button
									style={{ marginBottom: '20px' }}
									className={
										pageLogoId === 0
											? 'editor-post-featured-image__toggle'
											: 'editor-post-featured-image__preview'
									}
									onClick={open}
								>
									{fundingLogoId === 0
										? __('Select image', 'kww')
										: __('Replace image', 'kww')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__('External address', 'kww')}
						value={fundingLogoExternalUrl}
						onChange={onChangeFundingUrl}
					/>
				</PanelBody>
			</InspectorControls>
			<Header pageLogoUrl={pageLogoUrl} fundingLogoUrl={fundingLogoUrl}>
				{Array.isArray(menuItems) && (
					<Navigation>
						{menuItems.map((navigationElement) => (
							<NavigationElement
								key={navigationElement.id}
								{...navigationElement}
							/>
						))}
					</Navigation>
				)}
			</Header>
		</div>
	);
}

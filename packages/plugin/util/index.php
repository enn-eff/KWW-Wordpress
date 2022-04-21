<?php
// Based on: https://developer.woocommerce.com/2021/11/15/how-does-woocommerce-blocks-render-interactive-blocks-in-the-frontend/
function kww_render_block_with_attributes($attributes, $content)
{
	$escaped_data_attributes = [];

	foreach ($attributes as $key => $value) {
		if (is_bool($value)) {
			$value = $value ? 'true' : 'false';
		}

		$key_prefix = 'data-';

		$is_scalar = is_scalar($value);
		if (!$is_scalar) {
			$value = wp_json_encode($value);
			$key_prefix .= '__json_';
		}

		$escaped_data_attributes[] = $key_prefix . esc_attr(strtolower(preg_replace('/(?<!\ )[A-Z]/', '-$0', $key))) . '="' . esc_attr($value) . '"';
	}

	return preg_replace('/^<div /', '<div ' . implode(' ', $escaped_data_attributes) . ' ', trim($content));
}

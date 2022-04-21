<?php
/**
 * Plugin Name:       KWW
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kww
 *
 * @package           create-block
 */

$GLOBALS['KWW_PLUGIN_DIR'] = __DIR__;
$GLOBALS['KWW_PLUGIN_BUILD_DIR'] = __DIR__ . '/build';
$GLOBALS['KWW_PLUGIN_PUBLIC_DIR'] = plugin_dir_url(__FILE__) . 'build';

require_once("util/index.php");
require_once("src/header/index.php");

add_action('wp_enqueue_scripts', function () {
	if (is_admin()) {
		return;
	}

	$script_path = 'render.js';
	$script_asset_path = 'render.asset.php';
	$script_asset = require($GLOBALS['KWW_PLUGIN_BUILD_DIR'] . '/' . $script_asset_path);

	wp_enqueue_script('kww-plugin', $GLOBALS['KWW_PLUGIN_PUBLIC_DIR'] . '/' . $script_path, $script_asset['dependencies']);
});

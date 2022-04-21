<?php

class Header
{
	protected static $instance = NULL;

	public static function get_instance()
	{
		NULL === self::$instance and self::$instance = new self;

		return self::$instance; // return the object
	}

	public function register_block()
	{
		register_block_type($GLOBALS['KWW_PLUGIN_BUILD_DIR'] . '/' . basename(__DIR__), array(
			'render_callback' => array($this, 'render_attributes')
		));
	}

	public function render_attributes($attributes, $content)
	{
		if (is_numeric($attributes['menuId']) && $attributes['menuId'] !== 0) {
			$menu_items = wp_get_nav_menu_items($attributes['menuId']);

			if (is_array($menu_items)) {
				$current_object_id = strval(get_queried_object_id());

				$attributes['menuItems'] = array_map(function ($menu_item) use ($current_object_id) {
					return array(
						'id' => $menu_item->ID,
						'url' => $menu_item->url,
						'title' => $menu_item->title,
						'isActive' => $menu_item->object_id === $current_object_id,
					);
				}, $menu_items);
			}

		}
//			echo '<pre>' . var_export($attributes, true) . '</pre>';

		return kww_render_block_with_attributes($attributes, $content);
	}
}

add_action('init', array(Header::get_instance(), 'register_block'));

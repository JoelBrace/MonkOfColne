<?php
function moc_enqueue_scripts() {
    $theme_uri = get_template_directory_uri();
    // Global styles & Scripts
    wp_enqueue_style('moc-main', $theme_uri . '/assets/css/main.css', array(), '1.0');
    wp_enqueue_script('moc-main', $theme_uri . '/assets/js/main.js', array('jquery'), '1.0', true);

    //Add CSS/JS to pages
    if (is_front_page()) {
        wp_enqueue_style('moc-index', $theme_uri . '/assets/css/index.css', array('moc-main'), '1.0');
        wp_enqueue_script('moc-index', $theme_uri . '/assets/js/index.js', array('moc-main'), '1.0', true);
    }

    if (is_page('services')) {
        wp_enqueue_style('moc-services', $theme_uri . '/assets/css/services.css', array('moc-main'), '1.0');
        wp_enqueue_script('moc-services', $theme_uri . '/assets/js/services.js', array('moc-main'), '1.0', true);
    }

    if ( strpos( get_page_uri( get_queried_object_id() ), 'service' ) === 0 ) {
        wp_enqueue_style('moc-service', $theme_uri . '/assets/css/service.css', array('moc-main'), '1.0');
        wp_enqueue_script('moc-service', $theme_uri . '/assets/js/service.js', array('moc-main'), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'moc_enqueue_scripts');

//404 on parent service page
add_filter( 'template_include', function( $template ) {
    if ( is_page( 'service' ) ) {
        global $wp_query;
        $wp_query->set_404();
        status_header( 404 );
        return get_404_template();
    }
    return $template;
});

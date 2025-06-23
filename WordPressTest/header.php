<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title><?php wp_title('|', true, 'right'); ?></title>
  <?php wp_head(); ?>
</head>
<body>
<svg id="fader"></svg>
  <nav id="navbar" class="navbar">
    <div class="logo">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/MonkOfColne.png" alt="Logo">
    </div>
    <div class="burger" id="burger" tabindex="0">
      <span class="burger-bg"></span>
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="menu">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="#">Projects</a>
      <a id="nav-contact-us" href="#contact-us">Contact Us</a>
      <a href="#">Social Media</a>
    </div>
  </nav>
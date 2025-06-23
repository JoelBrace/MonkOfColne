<!-- /*
 * Template Name: Service Page
 * Description: Use for any service, parent or child.
 */ -->
<?php get_header(); ?>
  <div class="container">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="headline">
        <div class="title"><?php the_title(); ?></div>
    </div>
    <div class="content">
        <?php the_content(); ?>
    </div>
    <?php endwhile; endif; ?>
  </div>
  <div class="ready-heading">
      <div class="title">Are you ready to partner with Monk Of Colne?</div>
      <div class="subtitle">We collaborate on projects within most sectors to provide efficient, cost-effective and innovative solutions for every civil engineering need.</div>
      <a href = "/#contact-us" class="contact-button">Contact us for a free quote</a>
    </div>
<?php get_footer(); ?>
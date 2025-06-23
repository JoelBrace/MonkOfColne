<?php get_header(); ?>
  <div class="carousel" id="carousel">
    <div class="carousel-item active" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide1.jpg');">
      <div class="carousel-content">
        <div class="carousel-header">Flagging & Setts</div>
        <div class="carousel-description">Expert installation of high-quality flagstones and setts, creating durable, stylish, and long-lasting surfaces for driveways, paths, and patios.</div>
      </div>
    </div>
    <div class="carousel-item" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide2.jpg');">
      <div class="carousel-content">
        <div class="carousel-header">Drainage & Excavations</div>
        <div class="carousel-description">Professional drainage solutions and excavations, ensuring efficient water management and solid foundations for all construction projects.</div>
      </div>
    </div>
    <div class="carousel-item" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide3.jpg');">
      <div class="carousel-content">
        <div class="carousel-header">Road & Footpath<br>Construction</div>
        <div class="carousel-description">High-quality road and footpath construction, delivering durable, safe, and well-engineered surfaces for public and private spaces.</div>
      </div>
    </div>
    <div class="carousel-item" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide4.jpg');">
      <div class="carousel-content">
        <div class="carousel-header">Street Calming Areas</div>
        <div class="carousel-description">Design and construction of street calming areas, enhancing safety and reducing traffic speed in residential and urban environments.</div>
      </div>
    </div>
    <div class="carousel-item" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide5.jpg');">
      <div class="carousel-content">
        <div class="carousel-header">Tarmacadam</div>
        <div class="carousel-description">Expert machine or hand-lay tarmacadam services, delivering smooth, durable, and high-quality surfaces for roads, driveways, and pathways.</div>
      </div>
    </div>
    <div class="carousel-dots" id="carousel-dots"></div>
  </div>
  <div id="contactButton" class="contact-button">Contact us for a free quote</div>
  <div class="headline">
    <div class="title">Welcome to Monk of Colne Limited</div>
    <div class="subtitle">An award-winning, established groundworks contractor based in Lancashire, we specialise in tarmacadam surfacing, drainage and block paving for the public and private sectors.</div>
  </div>
  <div class="content">
    <div>Areas we serve:</div>
    <div>Portfolio</div>
    <div>Companies we've worked with</div>
  </div>
  <div class="divider mar-t10"></div>
  <div class="quote-carousel" id="quotes-carousel">
    <div class="quote previous">
      <div class="quote-text-container">
        <div class="quote-text">
          <span class="orange">"</span>
          Seen their work first hand and they don't cut any corners. It's top quality work and thay graft hard. Well recommend.
          <span class="quotation">"</span>
        </div>
        <div class="quotee">Frank Clarky</div>
      </div>
    </div>
    <div class="quote current">
      <div class="quote-text-container">
        <div class="quote-text">
          <span class="orange">"</span>
          John and his team did a first class job doing my driveway. His team were hardworking, friendly and very accommodating. Job was clean and completed to a very high standard.
          <span class="orange">"</span>
        </div>
        <div class="quotee">Raz</div>
      </div>
    </div>
    <div class="quote next">
      <div class="quote-text-container">
        <div class="quote-text">
          <span class="orange">"</span>
          Great company. Excellent foundations and brickwork, cleared the site, very tidy. Always communicated and came up with best way to achieve what we wanted. Would highly recommend.
          <span class="orange">"</span>
        </div>
        <div class="quotee">Andrew Turton</div>
      </div>
    </div>
    <div class="quote">
      <div class="quote-text-container">
        <div class="quote-text">
          <span class="orange">"</span>
          Fantastic service! Professional team, on-time delivery, and excellent quality. They handled our commercial project flawlessly. Highly recommend for complex engineering needs!
          <span class="orange">"</span>
        </div>
        <div class="quotee">Olivia Chambers</div>
      </div>
    </div>
    <div class="quote">
      <div class="quote-text-container">
        <div class="quote-text">
          <span class="orange">"</span>
          Great experience! Efficient, reliable, and innovative solutions. They saved us time and money while maintaining top-notch quality. Will hire again!
          <span class="orange">"</span>
        </div>
        <div class="quotee">Matthew Fox</div>
      </div>
    </div>
  </div>
  <div class="divider mar-b10"></div>
  <div class="contact-section">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label for="name">Your Name*</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Your Email*</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Your Message*</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="contact-map">
      <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=5%20Sun%20St%2C%20Colne%20BB8%200JJ%2C%20UK&key=AIzaSyDgh74fyIKHWqivHHA8jGVUnM419wnms5o"></iframe>
    </div>
  </div>
<?php get_footer(); ?>
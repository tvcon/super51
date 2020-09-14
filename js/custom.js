(function ( $ ) {
  var owl = $('.testimonial-slider');
  owl.owlCarousel({
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  })
  var owl1 = $('.screenshot-slider');
  owl1.owlCarousel({
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
  var owl2 = $('.install-slider');
  owl2.owlCarousel({
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  })
}) (jQuery)

AOS.init();
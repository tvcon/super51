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

  // var owl1 = $('.tour-block');
  // owl1.owlCarousel({
  //   margin: 0,
  //   loop: false,
  //   nav: true,
  //   dots: false,
  //   items: 1,
  // })

  // var owl2 = $('.testimonial-block');
  // owl2.owlCarousel({
  //   margin: 30,
  //   loop: false,
  //   nav: true,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 2
  //     },
  //     1000: {
  //       items: 3
  //     }
  //   }
  // })

  // //$('.features-block > ul .owl-item:first-child li').addClass('show-arrow');
  // $('.features-block > ul .owl-item li').on('click', function() {
  //   $(this).addClass('show-arrow');
  //   $(this).parent().siblings().children().removeClass('show-arrow');
  // })
  // if ($(window).width() < 768) {
  //   $('#nav-icon').on('click', function(){
  //     $('.main-nav').slideToggle();
  //   })
  //   $('.main-nav ul li a').on('click', function(){
  //     $('.main-nav').slideUp();
  //   })
  // }

  // //const $navbar = $('.navbar');

  // $('.main-nav a[href^="#"]').on('click', function(e) {
  //     e.preventDefault();

  //     const scrollTop =
  //         $($(this).attr('href')).position().top;

  //     $('html, body').animate({ scrollTop });
  // })
  // $('.footer-menu a[href^="#"]').on('click', function(e) {
  //     e.preventDefault();

  //     const scrollTop =
  //         $($(this).attr('href')).position().top;

  //     $('html, body').animate({ scrollTop });
  // })
}) (jQuery)

AOS.init();
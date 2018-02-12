// Referenced https://formden.com/blog/validate-contact-form-jquery

$(document).ready(function() {
  console.log("Ready!!");

  $('#contact-full-name').on('input', function() {
    var input = $(this);
    var is_name = input.val();
    if (is_name) {
      input.removeClass("error").addClass("valid");
    }
    else {
      input.removeClass("valid").addClass("error");
    }
  });

  $('#contact-email').on('input', function() {
    var input = $(this);
    var emailInputValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // test is a method used to match strings
    var is_email = emailInputValidator.test(input.val());
    if (is_email) {
      input.removeClass("error").addClass("valid");
    }
    else {
      input.removeClass("valid").addClass("error");
    }
  });

  $('#contact-subject').on('input', function() {
    var input = $(this);
    var is_subject = input.val();
    if (is_subject) {
      input.removeClass("error").addClass("valid");
    }
    else {
      input.removeClass("valid").addClass("error");
    }
  });

  $('#contact-message').on('input', function() {
    var input = $(this);
    var is_message = input.val();
    if (is_message) {
      input.removeClass("error").addClass("valid");
    }
    else {
      input.removeClass("valid").addClass("error");
    }
  });


  $('#get-in-touch').on('submit', function(event){
    var input = $('#get-in-touch :input');
    input.each(function(){
      if ($(this).hasClass('valid')) {
        input.addClass('form-submitted');
      }
      else {
        event.preventDefault();
      }
      $(this).hide();
      $('.contact-header').addClass('error-hide');
      $('#thank-you').removeClass('error-hide').show();
    });
  });

  $('#contact').on('click', function() {
    var contactForm = $('#get-in-touch :input');
    var heading = $('.contact-header');
    heading.removeClass('error-hide').show();
    contactForm.show();
    $('#thank-you').addClass('error-hide');
    $('form')[0].reset();
  });


  $(function() {

  // settings
  var $slider = $('.slider');
  var $slide = 'li';
  var $transitionTime = 1000;
  var $timeBetweenSlides = 3000;

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transitionTime);

  // auto scroll
  setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transitionTime);

      if (slides().length == $i + 1)
      $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transitionTime);
      slides().eq($i + 1).addClass('active');
    }
    , $transitionTime +  $timeBetweenSlides
  );

});

  $(function() {

  // settings
  var $testimonial = $('#testimonials');
  var $eachTestimonial = 'p';
  var $transitionTime = 1000;
  var $timeBetween = 3500;

  function testimonials(){
    return $testimonial.find($eachTestimonial);
  }

  testimonials().fadeOut();

  // set active classes
  testimonials().first().addClass('active');
  testimonials().first().fadeIn($transitionTime);

  // auto scroll
  $interval = setInterval(
    function(){
      var $i = $testimonial.find($eachTestimonial + '.active').index();
      testimonials().eq($i).removeClass('active');
      testimonials().eq($i).fadeOut($transitionTime);

      if (testimonials().length == $i + 1) $i = -1; // loop to start

      testimonials().eq($i + 1).fadeIn($transitionTime);
      testimonials().eq($i + 1).addClass('active');
    }
    , $transitionTime +  $timeBetween
  );

});

  // $('.hamburger').on('click', function() {
  //   $('.responsive-menu').(addClass('expand');
  //   $(this).addClass('btn-none');
  // })

});


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

  // $(.slides).each(function() {
  //   $(this).removeClass('slides').addClass('slides-show');
  // })

  jQuery(function($) {

  // settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 500; // 1 second
  var $time_between_slides = 3000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides
  );

});

});


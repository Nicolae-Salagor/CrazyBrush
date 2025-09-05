/* Slider */
$('.painting__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    outline: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

/* Menu */
  $(function(){
    $('.burger').click(function(){
        $('.mobile').toggleClass('active');
        $('.burger').toggleClass('active');
    });
  });


  



/* Form Validation */
$(document).ready(function() {
  $('.contacts-form__submit').on('click', function(e) {
      e.preventDefault();
      $('#contancts-form').submit();
  })
  $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
      },
      "Please check your input."
  );

  // Function that sends the form
  function valEl(el) {
      el.validate({
          rules: {
              name: {
                  required: true
              },
              email: {
                  required: true,
                  email: true
              },
              text: {
                required: true
              }
          },
          messages: {
              name: {
                  required: 'Input is required to Enter'
              },
              email: {
                  required: 'Input is required to Enter',
                  email: 'Wrong E-mail format'
              },
              text: {
                  required: 'This textarea should be field'
              }
          },

          // Check for id="" of form
          submitHandler: function(form) {
              var $form = $(form);
              var $formId = $(form).attr('id');
              switch ($formId) {
                  // if form has contancts-form ID
                  case 'contancts-form':
                      $.ajax({
                              type: 'POST',
                              url: $form.attr('action'),
                              data: $form.serialize()
                          })
                          .done(function() {
                              console.log('Success');
                          })
                          .fail(function() {
                              console.log('Fail');
                          })
                          .always(function() {
                            console.log('Always');
                            setTimeout(function() {
                                $('#thanks-message').fadeIn();
                                $form.trigger('reset');
                                //строки для остлеживания целей в Я.Метрике и Google Analytics
                            }, 1100);
                            $('#thanks-message').on('click', function(e) {
                                $(this).fadeOut();
                            });
                        });
                      break;
              }
              return false;
          }
      })
  }

  // Put the validation on form with class contacts-form
  $('.contacts-form').each(function() {
      valEl($(this));
  });

});
  
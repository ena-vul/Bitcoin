
$(document).ready(function () {

    if ($('.main-slider').length > 0) {
        $('.main-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            items: 1
        });
    }



    if ($('.feedback-slider').length > 0) {
        $('.feedback-slider').owlCarousel({
            margin: 20,
            autoplay: true,
            autoplayHoverPause: true,
            items: 1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2
                }
            }
        });
    }
    
    




// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end


// validacija forme

    if ($('.register-form').length > 0) {
        $(function () {
            $(".register-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6
                    },
                    re_password: {
                        required: true,
                        equalTo: '#password'
                    }
                },
                messages: {
                            name: {
                                required: 'Name is required.'
                            },
                            email: {
                                required: 'Email is required.',
                                email: 'Please enter a valid e-mail address.'
                            },
                            password: {
                                required: 'Password is required.',
                                minlength: 'Please enter at least 6 characters.'
                            },
                            re_password: {
                                required: 'Please repeat your password',
                                equalTo: 'Password is not the same.'
                                
                            }
                        },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
        
    }
    
    if ($('.login-form').length > 0) {
        $(function () {
            $(".login-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                            email: {
                                required: 'Email is required.',
                                email: 'Please enter a valid e-mail address.'
                            },
                            password: {
                                required: 'Password is required.',
                                minlength: 'Please enter at least 6 characters.'
                            }
                        },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }
    
    //Form Validation


});



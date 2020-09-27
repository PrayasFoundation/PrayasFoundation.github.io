/*-------------------------------------------------------------------*/
/* Project: Prayas Foundation */
/* Ver: 1.0.2*/
/* Date: 10-09-2020*/
/* Author: Pushp Vashisht & Aashna Singh*/
/*-------------------------------------------------------------------*/

jQuery(function($) {

    "use strict";

    // 00. RTL status check.
    var rtl_status = false;
    if ($('html').is('[dir]')) {
        rtl_status = true;
    }

    var states = null;
    var cities = null;
    var localities = null;
    var blood_groups = null;

    // DETECT TOUCH DEVICE

    function is_touch_device() {
        return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
    }

    // ANIMATIONS //
    function animations() {

        animations = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 30,
            mobile: false,
            live: true
        });

        animations.init();

    }

    // ONE PAGE SMOOTH SCROLLING 

    function smooth_scrolling() {

        $(".nav_menu").on("click", function() {

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                var offset = $('.header-wrapper').outerHeight();

                if ($('.stuck').length === 1) {
                    offset = $('.stuck').outerHeight();
                } else {
                    offset = parseInt(offset, 0) + 24;
                }

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - parseInt(offset, 0)
                    }, 1300);

                    return false;

                }

            }

        });

    }

    // PARALLAX

    if (typeof $.fn.stellar !== 'undefined') {

        if (!is_touch_device()) {

            $(window).stellar({
                horizontalScrolling: false,
                verticalScrolling: true,
                responsive: true,
                verticalOffset: 50
            });

        }

    }

    // SLIDER 1

    if ($("#slider_1").length) {

        $("#slider_1").owlCarousel({
            rtl: rtl_status,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            },
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

    }

    // STICKY HEADER & MENU

    if ($(".main-header").attr('data-sticky_header')) {

        $('.main-header .header-wrapper').waypoint('sticky', {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: 'stuck'
        });

    }

    // GALLERY.

    if ($('.gallery-light-box').length) {

        $('.gallery-light-box').venobox();

    }

    // GALLERY CAROUSEL

    if ($(".gallery-carousel").length) {

        $(".gallery-carousel").owlCarousel({
            rtl: rtl_status,
            items: 6,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
        });
    }

    // COUNTER

    if ($(".counter").length) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    //DONORS/CLIENTS LOGOS 

    if ($(".logo-items").length) {

        $(".logo-items").owlCarousel({
            rtl: rtl_status,
            items: 6,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 6,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"]
        });
    }



    //Our Services 

    if ($(".our-services").length) {

        $(".our-services").owlCarousel({
            rtl: rtl_status,
            items: 6,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"]
        });
    }




    // TESTIMONIAL CAROUSEL.

    if ($(".testimonial-container ").length) {

        $(".testimonial-container").owlCarousel({
            rtl: rtl_status,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true,
                    pagination: true,
                    paginationNumbers: false
                }
            },
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }

    // CONTACT FORM 

    function email_checkRegexp(o, regexp) {

        if (!(regexp.test(o.val()))) {

            return false;

        } else {

            return true;

        }

    }

    if ($('#contact-form').length) {

        var $contact_form = $("#contact-form");

        var $contact_submit_btn = $contact_form.find("button.btn-custom");
        var $user_name = $contact_form.find("#user_name");
        var $user_email = $contact_form.find("#user_email");
        var $email_subject = $contact_form.find("#email_subject");
        var $email_message = $contact_form.find("#email_message");

        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        var $all_fields = $([]).add($user_name).add($user_email).add($email_subject).add($email_message);


        $all_fields.val("");

        var $error_border = "border-bottom: 1px solid red;";
        var contact_form_bValid, user_name_bValid, user_email_bValid, user_email_subject_bValid, user_email_message_bValid;


        $contact_form.find("button[type=submit]").on("click", function() {

            contact_form_bValid = true;

            if ($user_name.val() === "") {

                user_name_bValid = false;
                $user_name.next("span").remove();
                $user_name.attr("style", $error_border).after("<span class='error'>" + $user_name.attr("data-msg") + "</span>");

            } else {
                user_name_bValid = true;
                $user_name.removeAttr("style").next("span").remove();

            }

            contact_form_bValid = contact_form_bValid && user_name_bValid;


            if ($user_email.val() === "" || email_checkRegexp($user_email, emailRegex) == false) {

                user_email_bValid = false;
                $user_email.next("span").remove();
                $user_email.attr("style", $error_border).after("<span class='error'>" + $user_email.attr("data-msg") + "</span>");

            } else {
                user_email_bValid = true;
                $user_email.removeAttr("style").next("span").remove();

            }

            contact_form_bValid = contact_form_bValid && user_email_bValid;


            if ($email_subject.val() === "") {

                user_email_subject_bValid = false;
                $email_subject.next("span").remove();
                $email_subject.attr("style", $error_border).after("<span class='error'>" + $email_subject.attr("data-msg") + "</span>");

            } else {
                user_email_subject_bValid = true;
                $email_subject.removeAttr("style").next("span").remove();
            }

            contact_form_bValid = contact_form_bValid && user_email_subject_bValid;

            if ($email_message.val() === "") {

                user_email_message_bValid = false;
                $email_message.next("span").remove();
                $email_message.attr("style", $error_border).after("<span class='error'>" + $email_message.attr("data-msg") + "</span>");

            } else {
                user_email_message_bValid = true;
                $email_message.removeAttr("style").next("span").remove();

            }

            contact_form_bValid = contact_form_bValid && user_email_message_bValid;

            if (contact_form_bValid === true) {

                $all_fields.attr("disabled", "disabled");
                $contact_submit_btn.after("<span class='form_msg'>Please wait ....</span>").attr("disabled", "disabled");

                $.ajax({
                    url: "contact_email.php",
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        safety_key: 'dynatf',
                        user_name: $user_name.val(),
                        user_email: $user_email.val(),
                        email_subject: $email_subject.val(),
                        email_message: $email_message.val()
                    },
                    success: function(data) {


                        if (data.status === 1) {

                            $contact_submit_btn.next("span").remove();
                            $contact_submit_btn.after("<span class='form_msg'>" + data.msg + "</span>");

                            setTimeout(function() {

                                $all_fields.removeAttr("disabled").val("");

                                $contact_submit_btn.next("span").slideUp('slow', function() {
                                    $(this).remove();
                                    $contact_submit_btn.removeAttr("disabled");
                                });

                            }, 3000)


                        } else {

                            $all_fields.removeAttr("disabled");

                        }

                    },
                    error: function(xhr, textStatus, e) {
                        alert("Email can not be sent. Please try again.");
                        return;
                    }

                });


            }

            return false;

        })

    }


    //WoW Animation.
    animations();

    //One Page Scrolling.
    smooth_scrolling();


    // BACK TO TOP BUTTON.

    if ($('#backTop').length === 1) {

        $('#backTop').backTop({
            'theme': 'custom'
        });

    }

    // Register Donor
    
    $("#appoinment-form").submit(function(e) {
        e.preventDefault();
        var name = $("#your_name").val();
        var email = $("#your_email").val();
        var mobile = $("#your_phone").val();
        var dob = $("#dob").val();
        var bg = $("#bg").val();
        var state = $("#state").val();
        var city = $("#city").val();
        var locality = $("#locality").val();
        var btn_submit = $("#btn_submit");
        // console.log(name, email, mobile, dob, bg, state, city, locality);
        $.post(
            "http://prayasfoundation.org.in/api/donors",
            {
                member_name: name,
                email: email,
                mobile: mobile,
                dob: dob,
                blood_group: bg,
                state: state,
                city: city,
                locality: locality
            },
            function(data, status) {

                if (status === "success") {

                    btn_submit.after("<span class='form_msg'>Request submitted</span>");

                    setTimeout(function() {

                        btn_submit.next("span").slideUp('slow', function() {
                            $(this).remove();
                        });

                    }, 3000)


                } else {

                    btn_submit.after("<span class='form_msg'>Request submission falied</span>");

                    setTimeout(function() {

                        btn_submit.next("span").slideUp('slow', function() {
                            $(this).remove();
                        });

                    }, 3000)

                }

            },
        );

    });

    // // Update city based on state
    // $("#state").change(function(){
    //     var selectedStateId = $(this).children("option:selected").attr("data-state-id");
    //     $.get(`http://localhost:3000/api/cities/${selectedStateId}`, function(data, status){
    //         cities = data;
    //         $("#city").html("<option>Select your City</option>");
    //         for(var i=0; i<cities.length; i++){
    //             $("#city").append(
    //                 `<option data-city-id=${cities[i]["id"]}>${cities[i]["city_name"]}</option>`
    //             );
    //         }
    //     });
    // });

    // // Update localities based on city
    // $("#city").change(function(){
    //     var selectedCityId = $(this).children("option:selected").attr("data-city-id");
    //     $.get(`http://localhost:3000/api/localities/${selectedCityId}`, function(data, status){
    //         localities = data;
    //         $("#locality").html("<option>Select your locality</option>");
    //         for(var i=0; i<localities.length; i++){
    //             $("#locality").append(
    //                 `<option data-locality-id=${localities[i]["id"]}>${localities[i]["locality_name"]}</option>`
    //             );
    //         }
    //     });
    // });

    // PRELOADER

    $(window).on("load", function() {
        $("#preloader").fadeOut(500);
    });
});
$(document).ready(function () {

    scrollClassChange();

});

$(window).scroll(function () {

    scrollClassChange();

});

function scrollClassChange() {

    var navHeight = $('#main-nav').outerHeight();
    var scrolled = $(window).scrollTop();

    if (scrolled > navHeight) {
        $('.navbar').addClass('navbar-scroll');
        $('#top').css('opacity', '1');
    } else {
        $('.navbar').removeClass('navbar-scroll');
        $('#top').css('opacity', '0');
    }

};

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links

        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }

    });

var colorMap = {
    review: "#336699",
    js101: "#CC333F",
    js102: "#EB6841",
    js103: "#EDC951",
    jquery1: "#4BAF4F",
    jquery2: "#9C26B0",
    jquery3: "#009688"
};

$(document).ready(function(){
    // Let's fade in the default section
    $('.section[data-section="bonus"]').fadeIn();

    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    $(".nav-list-item").click(function() {
        if (!$(this).hasClass('active')) {

            $(this).addClass('active');

            $(this).siblings().removeClass('active');

            var section = $(this).attr('data-section');

            // Step 1: Instead of setting the color for each element that needs a color change,
            // We are setting the body class to relfect the current section.
            // We have definied all necessary styles in the css

            // BONUS: How do we fix the issue of the header-1 color changing before the fadeOut finishes?

            $('.section.current').fadeOut(300,function() {
                $(".section[data-section=" + section + "]").fadeIn().addClass('current');
                $(".header-1").css('color', color);
            }).removeClass('current');

        }
    });
});

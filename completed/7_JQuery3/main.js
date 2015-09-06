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
    $('.section[data-section="jquery3"]').fadeIn();

    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    $(".nav-list-item").click(function() {
        if (!$(this).hasClass('active')) {

            // Change the active state the item you just clicked on
            $(this).addClass('active');

            // Remove active class from all sibling elements
            $(this).siblings().removeClass('active');

            // Change the color of the header bar's background, according to the colorMap object defined above
            var section = $(this).attr('data-section');
            var color = colorMap[section];

            $(".header-bar").css('background', color);

            // Step 1: Change the color of the header-1 element to match header-bar
            $(".header-1").css('color', color);

            // Step 2: Hide all the sections so we can then fade in the one we just clicked on
            $('.section').hide();
            // Talk about the fade out / fade in with callbacks option

            // Step 3: Now that we've added data-section attributes to each section,
            // Let's target the section of the nav-list-item we just clicked on
            // Step 1a: Fade in the section
            $(".section[data-section=" + section + "]").fadeIn();

        }
    });
});

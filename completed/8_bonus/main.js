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

            // Change the active state the item you just clicked on
            $(this).addClass('active');

            // Remove active class from all sibling elements
            $(this).siblings().removeClass('active');

            // Change the color of the header bar's background, according to the colorMap object defined above
            var section = $(this).attr('data-section');

            // Step 1: Instead of setting the color for each element that needs a color change,
            // We are setting the body class to relfect the current section.
            // We have definied all necessary styles in the css
            $('body').attr('class', 'page-' + section)

            $(".section[data-section=" + section + "]").fadeIn().siblings('section').hide();

        }
    });
});

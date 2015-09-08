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
    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    // Step 1: Set up a click event listener on the nav items

    // Step 2: Give the element you just clicked on a class of "active"

    // Step 3: Remove the "active" class from all sibling elements

    // Step 4: Change the color of the header bar's background, according to the colorMap object defined above

    // Hint 1: You need a way of accessing the correct color in the colorMap object.
    // We have added "data-section" attributes to the nav-list-item elements that can act as our keys

    // Hint 2: Once we know which section we are clicking on, use the colorMap object to get the color value

    // Hint 3: After we have our color value, now we can target our header element and change the background
    // Think: What is a better way to change the background color, rather than change the css directly?

    // BONUS: Check to make sure the item you clicked on isn't already the active one.
    // Hint: Use a console.log to make sure your logic works!
});

$(document).ready(function(){
    // Step 1: Listen for a click event on our checkboxes
    // Step 2: Use the toggleClass method to add or remove the "chcked" class to the checkbox that was clicked
    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });
});

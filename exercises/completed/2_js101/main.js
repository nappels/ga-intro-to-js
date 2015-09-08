$(document).ready(function(){
    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    // Step 1: 2+2
    // Step 2: (2+2)*10

    // Step 3: Ask youself a question using a confirm dialog
    window.confirm("Do you like apples?");

    // Step 4: Ask youself an open ended questions using a prompt dialog
    window.prompt("How do you like them apples?");

    // Step 5: Why aren't the checkboxes working?
    // Answer: There is a "L" character causing an error. You see this in the web console
    // Just delete it from this file

});

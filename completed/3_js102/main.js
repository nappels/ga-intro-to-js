$(document).ready(function(){
    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    // Step 1: Create a new variable that is an array.
    var array = [];

    // Step 2: Give that new array 2 new values: "foo" and "bar"
    array[0] = "foo";
    array[1] = "bar";

    // Step 3: Access the string "foo" in the above array, and store it in a new variable
    var newVar = array[0];

    // Step 4: Write that new variable to the console
    console.log(newVar);

    // Step 5: Create a new variable that is an object
    var object = {};

    // Step 6: Give that object 2 new parameters (see below)
    // Give it a name key, with your name as the value
    // Give it an occupation key, with your dream occupation as the value
    object["name"] = "Noah";
    object["occupation"] = "Food Eater";

    // Step 8: Ctreate a new variable the puts together both values in the object and returns something like:
    // "[Your name] wants to get paid to be a [your accupation]"

    var newVar2 = object.name + ' wants to get paid to be a ' + object.occupation;

    // Step 9: write that new variable to the console
    console.log(newVar2);


    // if / else exercise

    // Ask the user a yes or no question and store the result in a variable
    var isConfirmed = window.confirm("Do you like apples?");

    // Use that result variable to create an alert message for both the true and false cases
    if (isConfirmed) {
        window.alert("How do you like them apples?");
    }
    else {
        window.alert("You ruined the joke :(");
    }
});

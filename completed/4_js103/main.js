$(document).ready(function(){
    $(".checkbox").click(function(){
        $(this).toggleClass("checked");
    });

    // Step 1: Write a function that take a number as an arument.
    // Step 1a: Inside the function, multiply the number by 10
    // Step 1b: Return that new number
    function multiplyBy10(int) {
        return int*10;
    };

    // Step 3: Create a new array with 5 different numbers in it.
    var array = [10, 20, 30, 40, 50];

    // Step 4:
    // Write a for loop that iterates through the array you just created.
    for (var i=0; i < array.length; i++) {
    }

    // Step 5:
    // For each iteration create a variable named returnString with the following string:
    // "[current item in the array] times 10 = "
    for (var i=0; i < array.length; i++) {
        var returnString = array[i] + " * 10 = ";
    }

    // Step 5:
    // Run your multiplyBy10 function with the current value of your array as the input.
    for (var i=0; i < array.length; i++) {
        var returnString = array[i] + " * 10 = ";
        multiplyBy10(array[i]);
    }

    // Step 6: Add the return value of multiplyBy10 to returnString.
    for (var i=0; i < array.length; i++) {
        var returnString = array[i] + " * 10 = ";
        returnString += multiplyBy10(array[i]);
    }

    // Step 7: Write returnString to the console
    for (var i=0; i < array.length; i++) {
        var returnString = array[i] + " * 10 = ";
        returnString += multiplyBy10(array[i]);
        console.log(returnString);
    }
});

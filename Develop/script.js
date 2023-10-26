// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//done, $(document).ready(function() {Your code that interacts with the DOM goes here});

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () {
    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();
    // Get the id of the containing time-block
    var timeBlockId = $(this).parent().attr("id");
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the hour from the time-block id
    var hour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the hour to the current hour and add the appropriate class
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the user input from localStorage using the time-block id as the key
    var userInput = localStorage.getItem(timeBlockId);
    // Set the value of the corresponding textarea element
    $(this).find(".description").val(userInput);
  });
  //
  // TODO: Add code to display the current date in the header of the page.
  // Get the current date using Day.js
  var currentDate = dayjs().format("dddd, MMMM D");

  // Set the text of the header element to the current date
  $("header h1").text(currentDate);

  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the user input from localStorage using the time-block id as the key
    var userInput = localStorage.getItem(timeBlockId);
    // Set the value of the corresponding textarea element
    $(this).find(".description").val(userInput);
  });
});

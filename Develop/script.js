$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();
    // Get the id of the containing time-block
    var timeBlockId = $(this).parent().attr("id");
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
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
  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the id of the time-block
    var timeBlockId = $(this).attr("id");
    // Get the user input from localStorage using the time-block id as the key
    var userInput = localStorage.getItem(timeBlockId);
    // Set the value of the corresponding textarea element
    $(this).find(".description").val(userInput);
  });
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

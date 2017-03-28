$(document).ready(function() {
  var buzzer = $("#buzzer")[0]; // Play end of time buzzer
  var count = parseInt($("#sessionDigit").html()); // Convert from string to integer
  var breakTime = parseInt($("#breakDigit").html()); // Convert from string to integer
  console.log(count);
  $("#reset").hide(); // Hide reset button upon load

// Start the timer; i.e., begin the countdown
$("#start").click(function(){
  // Use setInterval to call function timer
  var counter = setInterval(timer, 1000); // 1 millisecond = 1 second

  function timer(){
    count -= 1; // Run every second
    if(count === 0){ // Stop when timer reaches zero
      clearInterval(counter);
    }

    $("#sessionDigit").html(count);

  }
});



// Subtract time from the session clock
$("#minus5Clock").click(function(){
  if(count>1){ // Because we don't want negative or zero hours
  count -= 1; // decrement count by 1 each click
  $("#sessionDigit").html(count);
  console.log(count);
}
});

// Add time to the session clock
$("#add5Clock").click(function(){
  count += 1; // decrement count by 1 each click
  $("#sessionDigit").html(count);
  console.log(count);
});

// Subtract time from the break clock
$("#minus5Break").click(function(){
  if(breakTime>1){ // Because we don't want negative or zero hours
  breakTime -= 1; // decrement count by 1 each click
  $("#breakDigit").html(breakTime);
  console.log(breakTime);
}
});

// Add time to the break clock
$("#add5Break").click(function(){
  breakTime += 1; // decrement count by 1 each click
  $("#breakDigit").html(breakTime);
  console.log(breakTime);
});



});

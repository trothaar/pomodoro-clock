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

  //Operate session timer
  function timer(){
    $("#start, #add5Clock, #minus5Clock, #add5Break, #minus5Break, #breakDigit, #title1, #title2").hide(); // Hide variables
    $("#timeType").html("Session Time: "); // Add a new header
    $("#timeType").show(); // Ensure header is displayed
    count -= 1; // Run every second
    if(count === 0){ // Stop when timer reaches zero
      buzzer.play(); // Play the basketball buzzer
      clearInterval(counter); // Stop the countdown
      var startBreak = setInterval(breakTimer, 1000); // 1 millisecond = 1 second
      $("#sessionDigit").hide(); // Hide the zero now that the counter is done
    }
    $("#sessionDigit").html(count);
    //Operate break timer
    function breakTimer(){
      $("#timeType").html("Break Time: "); // Add a new header
      $("#breakDigit").show(); // Bring the break digit back from stasis
      $("#timeType").show(); // Ensure header is displayed
      breakTime -= 1; // Run every second
      if(breakTime === 0){ // Stop when timer reaches zero
        clearInterval(startBreak); // Stop the countdown
        buzzer.play(); // Play the basketball buzzer again
        $("#reset").show(); // Display the reset button
        $("#breakDigit, #timeType").hide(); // Hide the zero
      }
      $("#breakDigit").html(breakTime);
    }
  }
});

// Operates the reset button
$("#reset").click(function(){
  count = 10;
  breakTime = 5;
  $("#sessionDigit").html(count);
  $("#breakDigit").html(breakTime);
  $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #sessionDigit, #breakDigit, #title1, #title2").show();
  $("#reset, #timeType").hide();
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

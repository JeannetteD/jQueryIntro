$(document).ready(function() {

  // Pick a random number
  var random = Math.floor((Math.random() * 5) + 1);
  console.log("random number: " + random);

  // Start counter at 0
  var count = 0;

  $("button").on("click", function() {
    playHiLoGame(random);

    // Increment counter
    count = count + 1;

    if (count == 5) {
      $("#warning").text("Game over!");
    } else if (count == 4) {
      $("#warning").text("You have one more try!");
    } else if (count == 3) {
      $("#warning").text("You have two more tries!");
    }

    console.log("tries: " + count);
  });

});


function playHiLoGame(random) {

   // Get the number from the user
   var guess = $("input").val();
   console.log("user guess: " + guess);

   // Hide paragraphs
   $("p").hide();

   // If guess is too high...
   if (guess > random) {
     console.log("number is too high!");
     $("p#high").show();
   }

   // If guess is too low...
   if (guess < random) {
     console.log("number is too low!")
     $("p#low").show();
   }

   // If number is a match...
   if (guess == random) {
     console.log("number is just right!")
     $("p#match").show();
   }

}




   // If number is too low...








  // var userGuess = ;
  //
  // while(random != parseInt(userGuess)) {
  //   if (random < parseInt(userGuess)) {
  //     alert("Your guess is too high!");
  //   }
  //   if (random > parseInt(userGuess)) {
  //     alert("Your guess is too low!");
  //   }
  // }
  // if (random === parseInt(userGuess)) {
  //   alert ("You guessed it!");
  // }

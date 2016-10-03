// $(document).ready (function(){
//   $("button").on ("click", function(){
//     alert($("p").text());
//   })
// })



$(document).ready (function() {

  $("button").on ("click", function() {
    $("img").addClass("shake");

    // Pick a random number
    var random = Math.floor(Math.random() * 4)
    console.log("picking a random number...")
    console.log("the random number is " + random);

    // Hide all answers
    $("p").hide();
    console.log("hiding all answers");

    // Show answer that matches our random number
    $("p").eq(random).show();
    console.log("showing answer number " + random);

    // Reset question for next time
    $("input").val("");
    console.log("resetting question for next time")

  });

});

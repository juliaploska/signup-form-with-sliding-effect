$("#sign-up").click(function () {
  $(".green-container").css("transform", "translateX(80%)");
  $(".signin-container").addClass("move");
  $(".signup-container").removeClass("move");
});

$("#sign-in").click(function () {
  $(".green-container").css("transform", "translateX(0%)");
  $(".signup-container").addClass("move");
  $(".signin-container").removeClass("move");
});

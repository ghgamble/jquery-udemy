$(function() {
      // jQuery goes here...

      // Uncomment this line to fade out the red box on page load
      $(".red-box").fadeTo(1000, 0.25);
      $(".green-box").fadeTo(1000, 0.5);
      $(".blue-box").fadeTo(1000, 0.75);

      $(".blue-box").fadeToggle();
      $(".blue-box").fadeToggle();
});

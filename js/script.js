$(function() {
      // $('ul ul:first').append("<li>I'm going to be the last sub-item");
      // $("<li>I'm going to be the last time</li>").appendTo("ul ul:first");
      // $('ul ul').prepend("<li>I'm going to be the last sub-item");
      // $("<li>I'm going to be the last time</li>").prependTo("ul ul:first");
      // // $("<h4>Grace Gamble</h4>").prependTo("#content");
      // $(".red-box").after("<div class='red-box'>Another Red</div>");
      // $(".blue-box").before("<div class='blue-box'>Another Blue</div>");
      // $(".blue-box").before(function(){
      //       return "<div class='blue-box'>Blue 2</div>";
      // });
      $(".blue-box").before($(".red-box"));
});

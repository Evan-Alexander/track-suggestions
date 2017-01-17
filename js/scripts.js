// var size = (small, medium, large);
// if (size === small) {
//   return "#ruby"
// } else if (size === medium) {
//   return "#php"
// } else (size === large) {
//   return "#php" || "#java"
// };
//
// var demand = (high, no-matter);
// if (demand === high) {
//   return "#php" || "#java"
// } else {
//   return "ruby"
// };
//
// var simple = (easy, whatever);
// if (simple === easy) {
//   return "#ruby"
// } else {
//   return "#php" || "#java"
// };
//
// var what = (web-apps, android-apps, software);
// if (what === web-apps) {
//   return "#ruby"
// } else if (what === adnroid-apps) {
//   return "#java"
// } else (what === software){
//   return "#ruby"
// }


$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);
    $("#show").show();

    event.preventDefault();
  });

  $("#blank form").submit(function(event) {
    var companySize = $("#size").val();
    if (companySize === "small") {
      $("div#ruby").show();
    } else if (companySize === "medium") {
      $("div#php").show();
    } else if (companySize === "large") {
      $("div#java").show();
    }

    event.preventDefault();
  });

  $("#blank form").submit(function(event) {
    var demand = $("#demand").val();
    if (demand === "high") {
      $("div#php").show();
      $("div#java").show();
    } else if (companySize === "no-matter") {
      $("div#php").show();
      $("div#java").show();
      $("div#ruby").show();
    }

    event.preventDefault();
  });
  // //
  $("#blank form").submit(function(event) {
    var simple = $("#simple").val();
    if (simple === "easy") {
      $("div#ruby").show();
    } else if (simple === "whatever") {
      $("div#php").show();
      $("div#java").show();
    }

    event.preventDefault();
  });
  // //
  $("#blank form").submit(function(event) {
    var build = $("input:radio[name=build]:checked").val();
    if (build === "web-apps") {
      $("div#ruby").show();
    } else if (build === "android-apps") {
      $("div#java").show();
    } else if (build === "software") {
      $("div#php").show();
    }

    event.preventDefault();
  });



});

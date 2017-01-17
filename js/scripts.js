
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

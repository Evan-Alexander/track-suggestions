$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#show").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#company-size form").submit(function(event) {
    var ComapanySize = $("select#size").val();
    if (ComapanySize === large) {
      $('#php #java' ).show();
    }

    $(".lang").text(langInput);

    event.preventDefault();
  });
});

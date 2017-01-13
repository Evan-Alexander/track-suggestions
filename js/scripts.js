$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();
    // var size = $("select#size").val();
    //
    // if {
    //   (size )
    // }

    $(".name").text(nameInput);


    $("#show").show();

    event.preventDefault();
  });


});

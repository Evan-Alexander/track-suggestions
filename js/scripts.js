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


// $(document).ready(function() {
//   $("#blank form").submit(function(event) {
//     var nameInput = $("input#name").val();
//
//     $(".name").text(nameInput);
//     $("#show").show();
//     event.preventDefault();
//   });
// });



$(document).ready(function() {
  $("#companySize form").submit(function(event) {
    var ComapanySize = $("select#size").val();
    if (ComapanySize === small) {
      $('#ruby' ).show();
    };

    // $(".lang").text(langInput);

    event.preventDefault();
  });
});

// To whom that may see this sad display:  I can't figure out how to get the entered name to "show up" with the hidden content when submit button is clicked if its at the end of all the forms instead of within the specific "name" form.  Honestly, I wouldn't have the faintest clue how to put these all together and make them work.  I've been working on JUST the JS part of this since 12:30 today.  I go back and forth tinkering with my html to see if placement of the submit button helps.  It does, apparently, but I feel like with the insurance practice lesson the submit button worked with both.  I'm aware that they're in the same form container. But for this lesson the forms are split up into two columns and I can't figure that out.  Now at the 11th hour I'm really wishing I just kept the whole thing in one column.  So, I write this to you because from your perspective I'm sure it looks like I just blew this off.  I didn't.  I worked on as many lessons as I could this week.  But without explicit examples and me just changing an ID or a CLASS, I pretty much don't get how this works.

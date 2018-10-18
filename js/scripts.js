$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var age = parseInt($("input#age").val());
    if (age >= 18) {
      $('#legal').show();
    } else {
      $('#minor').show();
    }
  console.log(age)
  });


});
// if (age >= 18)

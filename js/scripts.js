$(document).ready(function() {

    $("#formOne").submit(function(event){
      event.preventDefault();
      var name =$("#nme").val();
      var q1 = $("input#hp_ww").val();
      // var q2 = $("input#Inputfood").val();
      // var q3 = $("input#Inputmusic").val();
      // var q4 = $("#iceCream").val();
      // var q5 = $("#iceCream").val();


}
      $("ul#namelist").append("<li>" + name + " " + "</li>");
      $("ul#HP").append("<li>" +  + " " + "</li>");
      $("ul#WW").append("<li>" +  + " " + "</li>");
      $("ul#DT").append("<li>" +  + " " + "</li>");
      $("ul#JB").append("<li>" +  + " " + "</li>");
    });
});

(q1 === yes )

var ww=0;
var jb=0;
var hp=0;
var dt=0;

function countAnswers(q1, q2, q3, q4, q5){
  if (q1 == "yes") {
    ww++;
    jb++;
  } else {
    hp++;
    dt++;

  }
}

$(document).ready(function() {

    $("#formOne").submit(function(event){
      event.preventDefault();
      var name =$("#nme").val();
      var q1 = $("#hp_ww").val();
      var q2 = $("#hp_DT").val();
      var q3 = $("#hp_jb").val();
      var q4 = $("#island").val();
      var q5 = $("#tater_taco").val();
      countAnswers(q1, q2, q3, q4, q5);
      var answersArr = [ww, jb, hp, dt];
      answersArr.sort();
      var topResult = answersArr[0];
      if(topResult===ww)
      {
        $(".results").text(ww)
      }





      // if (q1 == "yes") {
      //   ww++;
      //   jb++;
      //   $("ul#WW").append("<li>" + q1 + "</li>");
      //   $("ul#JB").append("<li>" + q1 + "</li>");
      // } else {
      //   hp++;
      //   $("ul#HP").append("<li>" + q1 + "</li>");
      //   $("ul#DT").append("<li>" + q1 + "</li>");
      // }
      //
      // if (q2 == "dry") {
      //   $("ul#DT").append("<li>" + q2 + "</li>");
      // } else if (q2 == "wet") {
      //   $("ul#HP").append("<li>" + q2 + "</li>");
      //   $("ul#JB").append("<li>" + q2 + "</li>");
      // } else {
      //     $("ul#WW").append("<li>" + q2 + "</li>");
      // }
      //
      // if (q3 == "yes") {
      //   $("ul#JB").append("<li>" + q3 + "</li>");
      //   $("ul#DT").append("<li>" + q3 + "</li>");
      //   $("ul#WW").append("<li>" + q3 + "</li>");
      // } else {
      //   $("ul#HP").append("<li>" + q3  + "</li>");
      // }
      //
      // if (q4 == "yes") {
      //   $("ul#HP").append("<li>" + q4 + "</li>");
      //   $("ul#WW").append("<li>" + q4 + "</li>");
      //   $("ul#JB").append("<li>" + q4 + "</li>");
      // } else {
      //   $("ul#DT").append("<li>" + q4 + "</li>");
      // }
      //
      // if (q5 == "1") {
      //   $("ul#HP").append("<li>" + q5  + "</li>");
      //   $("ul#DT").append("<li>" + q5 + "</li>");
      // } else {
      //   $("ul#WW").append("<li>" + q5 + "</li>");
      //   $("ul#JB").append("<li>" + q5 + "</li>");
      // }
      //
      // $("ul#namelist").append("<li>" + name + "</li>");


  var harry_points = $("#HP").char
  child = $("#hp").children;
  console.log(child.length);

    });

});

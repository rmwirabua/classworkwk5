$(document).ready(function(){
  $("img#img-des").click(function(){
    $("p#wht-text0").toggle();
    $("img#img-des").toggle();
  });
  $("img#img-dev").click(function(){
    $("p#wht-text1").toggle();
    $("img#img-dev").toggle();
  });
  $("img#img-product").click(function(){
    $("p#wht-text2").toggle();
    $("img#img-product").toggle();
  });
  $("img#img-work1").hover(function(){
    $("P#work1").show();
  });
  $("img#img-work2").hover(function(){
    $("P#work2").show();
  });
   $("img#img-work3").hover(function(){
    $("P#work3").show();
  });
     $("img#img-work4").hover(function(){
    $("P#work4").show();
  });
     $("img#img-work5").hover(function(){
    $("P#work5").show();
  });
     $("img#img-work6").hover(function(){
    $("P#work6").show();
  });
     $("img#img-work7").hover(function(){
    $("P#work7").show();
  });
     $("img#img-work8").hover(function(){
    $("P#work8").show();
  });
  $("#submit").click(function(){
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var textInput = $("input#text").val();
    alert("Hi "+ textInput + ", we have received your message. Thank you for reaching out to us.").val();

  });

});

// if (emailInput == "") {
//  alert('the email field cannot be blank')
//  return false;
// }


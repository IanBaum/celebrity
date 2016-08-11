$(document).ready(function(){
  $("#userInfo").submit(function(event) {
    event.preventDefault();
  var age = parseInt($("#userAge").val());
  var gender = $("input:radio[name=gender]:checked").val();
  var food = parseInt($("#userFood").val());

  if(age) {

    $("#ageDiv").removeClass("has-error")

  if(food === 1) {
    $("#audreyH").show();
    $("#bobR").hide();
    $("#willS").hide();
    $("#leoD").hide();
    $("#tinaF").hide();
  }
  else if(food === 2) {
    $("#audreyH").hide();
    $("#bobR").hide();
    $("#willS").hide();
    $("#leoD").show();
    $("#tinaF").hide();
  }
  else if(food === 3) {
    $("#audreyH").hide();
    $("#bobR").show();
    $("#willS").hide();
    $("#leoD").hide();
    $("#tinaF").hide();
  }
  else if(food === 4) {
    $("#audreyH").hide();
    $("#bobR").hide();
    $("#willS").show();
    $("#leoD").hide();
    $("#tinaF").hide();
  }
  else {
    $("#audreyH").hide();
    $("#bobR").hide();
    $("#willS").hide();
    $("#leoD").hide();
    $("#tinaF").show();
  }
}else{
  $("#ageDiv").addClass("has-error");
  $("#audreyH").hide();
  $("#bobR").hide();
  $("#willS").hide();
  $("#leoD").hide();
  $("#tinaF").hide();
}



  });

});

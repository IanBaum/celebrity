$(document).ready(function(){
  $("#userInfo").submit(function(event) {
    event.preventDefault();
  var age = parseInt($("#userAge").val());
  var gender = $("input:radio[name=gender]:checked").val();
  var food = $("userFood").val();
  });


});

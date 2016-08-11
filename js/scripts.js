var triangle = function(s1,s2,s3){
  if((s1 + s2 > s3) && (s2 + s3 > s1) && (s3 + s1 > s2))
  {
    if((s1 === s2)  || (s2 === s3) || (s1 ===s3))
    {
      if( (s1 === s2) && (s2 === s3) && (s1 === s1))
        return "equilateral triangle";
      else
        return"isosoalies traingle";
    }
    else
      return"scalene triangle";
  }
  else
    return"Not a triangle";
}

$(document).ready(function() {
  $("form").submit(function(){
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    $("#answer").text(triangle(side1,side2,side3));
    $("#result").show();
    event.preventDefault();
  });
});

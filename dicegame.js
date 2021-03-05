$("button").click(function(){


  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
$("button").text("PLAY AGAIN!")
$(".img1").attr("src","images\\dice"+randomNumber1+".png");
$(".img2").attr("src","images\\dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
  $("h1").text("Player 1 Wins!");
}
else if(randomNumber1<randomNumber2)
{
  $("h1").text("Player 2 Wins!");
}
else {
  $("h1").text("DRAW !");
}

});

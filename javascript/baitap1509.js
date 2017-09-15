setInterval(function(){
  D = new Date();
  var Time =""
  var H=D.getHours()
  var M=D.getMinutes()
  var S=D.getSeconds()
  if(H<10){
    H ="0"+ D.getHours()
  }
  if (M<10){
    M ="0"+ D.getMinutes()
  }
  if (S<10){
    S="0"+ D.getSeconds()
  }
  Time = Time+ H + ":" + M + ":" + S
  $(".show_text").text(Time)
}, 1000)

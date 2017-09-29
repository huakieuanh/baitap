a=[]
b=[]
T=200000
var kiemtra1
t=4000
nextnumber=1
diem1=0
diem2=0
kiemtra2=0
luot1=1
check=false
pause=0
myvar=0
IntervalBig=0
for(i=0;i<100;i++){
  a[i]=i+1
}

function reset(){
  kiemtra1=1
  b=[]
  T=200000
  t=4000
  nextnumber=1
  $(".fa-gamepad").removeClass("player2")
  $(".fa-gamepad").removeClass("player1")
  $(".show_diem").empty()
  $(".thoigianchay").empty()
  $(".1to100").empty()
  clearInterval(IntervalBig);
  clearInterval(myvar);
  $(".mode2").css("background-color","")
  $(".mode1").css("background-color","")
  $(".showkq").text("")
  $(".show_time").text("")
  diem1=0
  diem2=0
  luot1=1
  check=false
  kiemtra2=0
  $(".manhinh1").show()
}
function random(){
  for (i=0;i<a.length; i++){
    j = Math.floor(Math.random()*100)
    while(b[j]){
      j = Math.floor(Math.random()*100)
    }
    b[j]=a[i]
  }
  for(j=0;j<b.length;j++){
    x='<button class="number" onclick="number('+b[j]+')">'+b[j]+'</button>'
    $(".1to100").append(x)
  }
}

function mode1(){
  kiemtra2=0
  $("#audiotag1")[0].play()
  $(".mode1").css("background-color","#00FFFF")
  $(".mode2").css("background-color","#E6EEFE")
}
function mode2(){
  $("#audiotag1")[0].play()
  kiemtra2=1
  $(".mode2").css("background-color","#00FFFF")
  $(".mode1").css("background-color","#E6EEFE")
}

function batdau(){
  $(".manhinh1").hide()
  $(".manhinh2").show()
  $(".show_nextnumber").text(nextnumber)
  random()
  if(kiemtra2){
    $(".show_diem").append('<i class="diem1"> Player1: 0 </i>')
                   .append('<i class="diem2"> Player2: 0 </i>')
    $(".thoigianchay").append('<div class="w3-border 2" style="margin-top: 400px;margin-left: 300px; margin-right: 300px"> <div class="w3-small" style="background-color:rgb(200, 23, 8); height:15px;width:100%;"></div> </div>')
    kiemsoatthoigian()
  }
  IntervalBig = setInterval(function(){
    if(!pause){
      T=T-100
      R=T*100/200000+"%"
      k= Math.round((200000-T)/1000)
      $(".w3-grey").css("width",R)
      if(T==0){
        Ketthuc()
      }
    }
  }, 100)
}

function number(n){
  tongso=nextnumber-1
  if(n==nextnumber){
    check=true
    for(j=0;j<b.length;j++){
      if(n==b[j]){
        lightcon=$(".1to100").children()[j]
        $(lightcon).css("color","#23F90B")
        nextnumber=nextnumber+1
        $(".show_nextnumber").text(nextnumber)
        if(kiemtra2){
          if(luot1){
            diem1=diem1+1
            $(".diem1").text(" Player1: "+ diem1)
            Toplayer2()
          }
          else {
            diem2=diem2+1
            $(".diem2").text(" Player2: "+ diem2)
            Toplayer1()
          }
        }
      }
    }
  }
  else{
    Ketthuc()
  }
}

function kiemsoatthoigian(){
  if(kiemtra1){
    myvar=setInterval(function(){
      if(!pause){
        if(check){
          t=4000
          check=false
        }
        t=t-100
        if(t==0){
          if(luot1){
            Toplayer2()
          }
          else{
            Toplayer1()
          }
          t=4000
        }
        r=t*100/4000+"%"
        $(".w3-small").css("width",r)
      }
    }, 100);
  }
}
function Ketthuc(){
  $(".manhinh2").hide()
  $(".manhinh3").show()
  if(kiemtra2){
    if(diem1>diem2){
      $(".show_text").text("Player1 is the winner!")
      $(".show_diem").text("Tong diem: "+ diem1)
      localStorage.setItem("Highscore1", diem1);

    }
    else{
      $(".show_text").text("Player2 is the winner!")
      $(".show_diem").text("Tong diem: "+ diem2)
      localStorage.setItem("Highscore2", diem2);
    }
  }
  else{
    if(nextnumber<=100){
      if(localStorage.getItem("muchoanthanh")<tongso){
        localStorage.setItem("muchoanthanh",tongso)
      }
      $(".showkq").text("Ban da tim duoc "+ tongso +" so")
      $(".show_time").text("Trong thoi gian "+k+" s")
      $(".show_text").text("Game Over! The highest score is "+ localStorage.getItem("muchoanthanh"))
    }
  }
}
function Toplayer2(){
  $(".fa-gamepad").removeClass("player1").addClass("player2");
  luot1=0
}
function Toplayer1(){
  $(".fa-gamepad").removeClass("player2").addClass("player1");
  luot1=1
}

function Back(){
  reset()
  $(".manhinh2").hide()
}
function Pause(){
  pause=1
  $(".manhinh2").hide()
  $(".manhinhpause").show()
}
function Play(){
  pause=0
  $(".manhinh2").show()
  $(".manhinhpause").hide()
}
function Restart(){
  $(".manhinh3").hide()
  reset()
}

// function number(n){
//   if(n==nextnumber){
//     $(event.target).css("color","#23F90B")
//     nextnumber=nextnumber+1
//     $(".show_nextnumber").text(nextnumber)
//   }
//   else{
//     $(".manhinh2").hide()
//     $(".manhinh3").show()
//   }
// }
//$(".fa-gamepad" ).switchClass("player1","player2")

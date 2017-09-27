a=[]
b=[]
T=200000
t=4000
nextnumber=1
diem1=0
diem2=0
kiemtra2=0
luot1=1
check=false
for(i=0;i<100;i++){
  a[i]=i+1
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
  $(".mode1").css("background-color","#00FFFF")
}
function mode2(){
  kiemtra2=1
  $(".mode2").css("background-color","#00FFFF")
  $(".show_diem").append('<i class="diem1"> Player1: 0 </i>')
                 .append('<i class="diem2"> Player2: 0 </i>')
}

function batdau(){
  $(".manhinh1").hide()
  $(".manhinh2").show()
  $(".show_nextnumber").text(nextnumber)
  random()
  debugger
  if(kiemtra2){
    kiemsoatthoigian()
  }
  setInterval(function(){
    T=T-100
    R=T*100/200000+"%"
    $(".w3-grey").css("width",R)
    if(T==0){
      Ketthuc()
    }
  }, 100)
}

function number(n){
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
  setInterval(function(){
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
  }, 100);
}
function Ketthuc(){
  $(".manhinh2").hide()
  $(".manhinh3").show()
  $(".show_text").text("Game Over!")
  if(kiemtra2){
    if(diem1>diem2){
      $(".show_text").text("Player1 is the winner!")
      $(".show_diem").text("Tong diem: "+ diem1)
    }
    else{
      $(".show_text").text("Player2 is the winner!")
      $(".show_diem").text("Tong diem: "+ diem2)
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

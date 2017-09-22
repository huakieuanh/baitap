var x="rgb("
var c=[], a=[]
var To=5000
var T=5000
function batdau(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"block"})
  for(i=0;i<4;i++){
    c[0]=x+Math.floor((Math.random()*256)+50)+","+Math.floor((Math.random()*50)+1)+","+Math.floor((Math.random()*20)+1)+")"
    c[1]=x+Math.floor((Math.random()*50)+1)+","+Math.floor((Math.random()*256)+150)+","+Math.floor((Math.random()*20)+1)+")"
    c[2]=x+Math.floor((Math.random()*40)+1)+","+Math.floor((Math.random()*40)+1)+","+Math.floor((Math.random()*256)+100)+")"
    c[3]=x+Math.floor(Math.random()*10)+","+Math.floor(Math.random()*10)+","+Math.floor(Math.random()*25)+")"
  }
  for (i=0;i<c.length; i++){
    j= Math.floor(Math.random()*4)
    while(a[j]){
      j = Math.floor(Math.random()*4)
    }
    a[j]=c[i]
  }
  so= Math.floor(Math.random()*4)
  $(".color").css("background-color",a[so])
  $(".color1").css("background-color",a[0])
  $(".color2").css("background-color",a[1])
  $(".color3").css("background-color",a[2])
  $(".color4").css("background-color",a[3])
  setInterval(function(){
    if (check==true){
      To=5000
      T=5000
      $(".w3-grey").css("width","100%")
      check=false
      if(diem>5&&diem<15){
        To=4000
        T=4000
      }
      else if(diem>=15&&diem<30){
        To=3000
        T=3000
      }
      else if(diem>=30&&diem<50){
        To=2000
        T=2000
      }
      else if(diem>=50){
        To=1000
        T=1000
      }
    }
    T=T-100
    R=T*100/To+"%"
    $(".w3-grey").css("width",R)
    if(T==0){
      Sai()
    }
  }, 100)
}

var diem=0
var check=false
function Dung(){
  check=true
  a=[]
  c=[]
  diem=diem+1
  $(".show_diem").text(diem+" Points")
  for(i=0;i<4;i++){
    c[0]=x+Math.floor((Math.random()*256)+50)+","+Math.floor((Math.random()*50)+1)+","+Math.floor((Math.random()*20)+1)+")"
    c[1]=x+Math.floor((Math.random()*50)+1)+","+Math.floor((Math.random()*256)+150)+","+Math.floor((Math.random()*20)+1)+")"
    c[2]=x+Math.floor((Math.random()*40)+1)+","+Math.floor((Math.random()*40)+1)+","+Math.floor((Math.random()*256)+100)+")"
    c[3]=x+Math.floor(Math.random()*10)+","+Math.floor(Math.random()*10)+","+Math.floor(Math.random()*25)+")"
  }

  for (i=0;i<c.length; i++){
    j = Math.floor(Math.random()*4)
    while(a[j]){
      j = Math.floor(Math.random()*4)
    }
    a[j]=c[i]
  }
  so= Math.floor(Math.random()*4)
  $(".color").css("background-color",a[so])
  $(".color1").css("background-color",a[0])
  $(".color2").css("background-color",a[1])
  $(".color3").css("background-color",a[2])
  $(".color4").css("background-color",a[3])
}

function Sai(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"none"})
  $(".manhinh3").css({display:"block"})
  $(".show_diem").text(diem+" Points")
}

function color(n){
  if(so==n-1){
    Dung()
  }
  else{
    Sai()
  }
}

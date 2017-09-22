var x="rgb("
var c=[], a=[]
var To=5000
var T=5000
function batdau(){
  $(".manhinh1").hide()
  $(".manhinh2").show()
  daomau()
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
  daomau()

function Sai(){
  $(".manhinh2").hide()
  $(".manhinh3").show()
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

function random(start, end){
  return Math.floor((Math.random()*end)+start)
}

function daomau(){
  for(i=0;i<4;i++){
    c[0]=x+random(50, 256)+","+random(1, 50)+","+random(1,20)+")"
    c[1]=x+random(1, 50)+","+random(150, 256)+","+random(1, 20)+")"
    c[2]=x+random(1, 40)+","+random(10, 50)+","+random(100, 256)+")"
    c[3]=x+random(0, 20)+","+random(0, 10)+","+random(0, 25)+")"
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

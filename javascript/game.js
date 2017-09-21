$( document ).ready(function() {
  a=Math.floor((Math.random() * 100) + 1)
  $(".show_num").text(a);
});

function batdau(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"block"})
  b=Math.floor((Math.random() * 100) + 1)
  $(".show_num").text(b);
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
var To=5000
var T=5000
function Dung(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"block"})
  c=Math.floor((Math.random() * 100) + 1)
  $(".show_num").text(c);
  a=b
  b=c
  check=true
  diem=diem+1
  $(".show_diem").text(diem+" Points")
}

function Sai(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"none"})
  $(".manhinh3").css({display:"block"})
  $(".show_diem").text(diem+" Points")
}

function Lonhon(){
  if(b>a || b==a){
    Dung()
  }
  else {
    Sai()
  }
}

function Nhohon(){
  if(b<a){
    Dung()
  }
  else {
    Sai()
  }
}

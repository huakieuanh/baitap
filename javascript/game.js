$( document ).ready(function() {
  a=Math.floor((Math.random() * 100) + 1)
  $(".show_num").text(a);
});

function batdau(){
  $(".manhinh1").css({display:"none"})
  $(".manhinh2").css({display:"block"})
  b=Math.floor((Math.random() * 100) + 1)
  $(".show_num").text(b);
}

function Lonhon(){
  if(b>a || b==a){
    $(".manhinh1").css({display:"none"})
    $(".manhinh2").css({display:"block"})
    c=Math.floor((Math.random() * 100) + 1)
    $(".show_num").text(c);
    a=b
    b=c
  }
  else {
    alert("Not True!")
    $(".manhinh1").css({display:"none"})
    $(".manhinh2").css({display:"none"})
    $(".manhinh3").css({display:"block"})
  }
}

function Nhohon(){
  if(b<a){
    $(".manhinh1").css({display:"none"})
    $(".manhinh2").css({display:"block"})
    c=Math.floor((Math.random() * 100) + 1)
    $(".show_num").text(c);
    a=b
    b=c
  }
  else {
    alert("Not True!")
    $(".manhinh1").css({display:"none"})
    $(".manhinh2").css({display:"none"})
    $(".manhinh3").css({display:"block"})
  }
}

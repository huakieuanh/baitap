a=[]
run=0
name=""
diem=0
dung=0
To=5000
T=5000
check=true
function random(){
  a=[]
  $(".arrow").empty()
  for(i=0;i<dif;i++){
   x=Math.floor(Math.random()*(3)+37); //tao ham moi
   a[i]=x
   $(".arrow").append(render(a[i]))
  }
}
function render(so){
    if(so==37){
      name="left"
    }
    else if(so==38){
      name="up"
    }
    else if (so==39){
      name="right"
    }
    else{
      name="down"
    }
  return '<i class="fa fa-arrow-'+name+'" aria-hidden="true"></i>'
}

$(document).keydown(function(e) {
  if(check){
    press=e.keyCode;
    if(press==a[run]){
      thutucon=$(".arrow").children()[run]
      $(thutucon).css("color","#23F90B")
      $(thutucon).animate({fontSize: "+=100px" }).animate({fontSize: "-=100px" })
      run++
      if(run==a.length){
        diem=diem+1
        if(diem>3&&diem<15){
          dif=Math.floor(Math.random()*(4)+4);
        }
        else if(diem>=15&&diem<30){
          dif=Math.floor(Math.random()*(3)+8);
        }
        else if(diem>=30&&diem<50){
          dif= Math.floor(Math.random()*(5)+5);
        }
        else if(diem>=50){
          dif=Math.floor(Math.random()*(6)+6);
        }
        $(".show_diem").text(diem+" points")
        setTimeout(function(){
          random()
          run=0;
          check=true;
        }, 200);
        check=false
        dung=1
      }
    }
    else{
      $(".manhinh2").hide()
      $(".manhinh3").show()
    }
  }
});
function batdau(){
  $(".manhinh1").hide()
  $(".manhinh2").show()
  dif=Math.floor(Math.random()*(2)+3)
  random()
  setInterval(function(){
    if(check){
      if (dung==1){
        To=5000
        T=5000
        $(".w3-grey").css("width","100%")
        dung=0
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
        $(".manhinh2").hide()
        $(".manhinh3").show()
      }
    }
  }, 100)
}

var a=-1, b=-1, p=-1;
function Ketqua(n){
  if(a == -1){
    a = n
  }
  else if(p == -1){
    p = n
  }
  else if(b == -1){
    b = n
  }

  $(".show_kq").text(n)
}

function TinhToan(){
  var kq=0
  if(p=="+"){
    kq=kq+(a+b)
  }
  else if(p=="-"){
    kq=kq+(a-b)
  }
  else if(p=="x"){
    kq=kq+(a*b)
  }
  else if(p==":"){
    kq=kq+(a/b)
  }
  a = -1
  b = -1
  p = -1
  $(".show_kq").text(kq)
}

function Clear(){
  a = -1
  b = -1
  p = -1
  $(".show_kq").text(0)
}

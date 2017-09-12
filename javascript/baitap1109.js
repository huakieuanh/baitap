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

function Ketqua(n){
  x=[0,1,2,3,4,5,6,7,8,9];
  a=""
  b=""
  var i=0;
  for(i=0;i<x.length;i++){
    if(n == x[i] && p == -1){
      a = a+n
      a = Number("a")
    }
    else if(n == x[i] && p !=-1){
      b = b+n
      b = Number("b")
    }
    else if(n!=x[i]){
      p = n
    }
  }
   $(".show_kq").text(a,b,p)
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
  $(".show_kq").text(kq)}

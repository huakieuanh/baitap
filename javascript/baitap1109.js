// var a=-1, b=-1, p=-1;
// function Ketqua(n){
//   if(a == -1){
//     a = n
//   }
//   else if(p == -1){
//     p = n
//   }
//   else if(b == -1){
//     b = n
//   }

//   $(".show_kq").text(n)
// }

// function TinhToan(){
//   var kq=0
//   if(p=="+"){
//     kq=kq+(a+b)
//   }
//   else if(p=="-"){
//     kq=kq+(a-b)
//   }
//   else if(p=="x"){
//     kq=kq+(a*b)
//   }
//   else if(p==":"){
//     kq=kq+(a/b)
//   }
//   a = -1
//   b = -1
//   p = -1
//   $(".show_kq").text(kq)
// }
 var a=""
 var b=""
 var p=-1
function Clear(){
  a=""
  b=""
  p=-1
  $(".show_kq").text(0)
}


function TinhToan(){
  var so_a=Number(a)
  var so_b=Number(b)
  var kq=0
  if(p=="+"){
    kq=kq+(so_a+so_b)
  }
  else if(p=="-"){
    kq=kq+(so_a-so_b)
  }
  else if(p=="x"){
    kq=kq+(so_a*so_b)
  }
  else if(p==":"){
    kq=kq+(so_a/so_b)
  }
  $(".show_kq").text(kq)
  a=""
  b=""
  p=-1
}

function Ketqua(n){
  so=Number(n)
  if(so>=0&&so<=9){
    if(p == -1){
      a = a+n
      $(".show_kq").text(a)
    }
    else if(p !=-1){
      b = b+n
      $(".show_kq").text(b)
    }
  }
  else{
    p = n
    $(".show_kq").text(p)
  }
}

function Back(){
  var so_a=Number(a)
  var so_b=Number(b)
  if(so_a>=10&& p==-1){
    so_a = (so_a - so_a % 10)/10
    $(".show_kq").text(so_a)
    a=String(so_a)
  }
  else if (so_b>=10&& p !=-1){
    so_b = (so_b - so_b % 10)/10
    $(".show_kq").text(so_b)
    b=String(so_b)
  }
  else {
    $(".show_kq").text(0)
  }
}

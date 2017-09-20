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
  var so_a=parseFloat(a)
  var so_b=parseFloat(b)
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
  if(so>=0&&so<=9||n=="."){
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
  var A=""
  var B=""
  var i=0
  if(a.length>=2 && p==-1){
    for(i=0;i<a.length-1;i++){
      A=A+a[i]
    }
    $(".show_kq").text(A)
    a=A
  }
  else if (b.length>=2 && p !=-1){
    for(i=0;i<b.length-1;i++){
    B=B+b[i]
    $(".show_kq").text(B)
    }
    b=B
  }
  else {
    $(".show_kq").text(0)
  }
}

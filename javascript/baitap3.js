function UCLN(a,b){
	var sodu=0, d=0;
if(b>a){
  sodu=b%a
}
if(sodu==0) {
  return a
}
else {
  d=(b-sodu)/a
}
for(i=d;i>0;i--){
  if(b%i==0 && a%i==0){
     return i
   }
 }
}

function tinhketqua(){
  so_a = parseInt($("#so_a").val())
  so_b = parseInt($("#so_b").val())
  $(".show_text").text(UCLN(so_a,so_b))
}
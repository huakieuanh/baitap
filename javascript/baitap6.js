function tinh(a,p,b){
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
	else if(p=="/"){
	  kq=kq+(a/b)
	}
	return kq
}
function Ketqua(){
  a = parseInt($("#a").val())
  p = $("#p").val()
  b = parseInt($("#b").val())
$(".show_kq").text(tinh(a,p,b))
}
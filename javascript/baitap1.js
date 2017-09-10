function chanle(a){
k=a.length-1
  for (i=a.length-1;i>=0;i--){
   if(a[i]%2!=0){
     c = a[i]
     a[i] = a[k]
     a[k] = c
     k--  
   }
  }
  return a
}
$(document).ready(function(){
	$(".show_text").text(chanle([1,2,4,7,6,9]))
})

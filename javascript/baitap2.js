function Tim2phantucotongmax(array){
  var sMax=0
  var S=0
  var result=[]
  var j=0
  for(var i=0;i<array.length;i++){
    S=array[i]+array[i+1]
    if(sMax<S){
      sMax=S
      result[j]=array[i]
      result[j+1]=array[i+1]
    } 
  }
  return result
}

$(document).ready(function(){
	$(".show_text").text(Tim2phantucotongmax([1,2,3,6,4,1]))
})
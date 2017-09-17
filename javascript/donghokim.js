function rotate(dom, deg){
  dom.css({
     '-moz-transform':'rotate('+deg+'deg) translateX(50%)',
     '-webkit-transform':'rotate('+deg+'deg) translateX(50%)',
     '-o-transform':'rotate('+deg+'deg) translateX(50%)',
     '-ms-transform':'rotate('+deg+'deg) translateX(50%)',
     'transform':'rotate('+deg+'deg) translateX(50%)'
  })
}

setInterval(function(){
  D = new Date ();
  H = D.getHours()
  M = D.getMinutes()
  S = D.getSeconds()
  Ts=S*6
  Tm=M*6+S/60
  Th=H*30+(M*30)/60+(S*30)/3600
  rotate($("#sec"),Ts-90)
  rotate($("#.Min"),Tm-90)
  rotate($("#.Hou"),Th-90)
}, 1000)

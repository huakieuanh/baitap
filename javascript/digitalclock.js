a = 0
setInterval(function(){
  D = new Date();
  var Time =""
  var H=D.getHours()
  var M=D.getMinutes()
  var S=D.getSeconds()
  if(H<10){
    H ="0"+ D.getHours()
  }
  if (M<10){
    M ="0"+ D.getMinutes()
  }
  if (S<10){
    S="0"+ D.getSeconds()
  }
  Time = Time+ H + ":" + M + ":" + S
  $(".show_text").text(Time)
  a++
  if(a==5){
    a=0
    $('.bkg').fadeOut('3000', function() {
      $(this).css('background-image', 'url('+BG[i]+')').fadeIn('3000');
      });
    i++
    if(i==BG.length){
      i=0
    }
  }
}, 1000)

BG=[
    "https://wallpaperscraft.com/image/wolf_snow_lying_cold_forest_trees_56340_2574x1750.jpg",
    "https://dncache-mauganscorp.netdna-ssl.com/cropped-wallpapers/2126/2126598-1920x1080-[DesktopNexus.com].jpg?st=83qAU1RmepGLFqXlYguAwg&e=1506761318",
    "https://wallpaperscraft.com/image/polar_bears_arctic_alaska_sleep_couple_99212_2048x1366.jpg",
    "https://wallpaperscraft.com/image/wolf_light_forest_wild_calm_peace_51264_1920x1200.jpg"
   ]

i=0
$( document ).ready(function() {
  $('.bkg').fadeOut('3000', function() {
      $(this).css('background-image', 'url('+BG[i]+')').fadeIn('3000');
    });
  i++
});


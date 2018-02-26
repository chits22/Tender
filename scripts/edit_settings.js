var slider = document.getElementById("distance")
var textBox = document.getElementById("distance_text")

setInterval(function(){
  textBox.innerHTML = slider.value + " miles";
}, 10);
